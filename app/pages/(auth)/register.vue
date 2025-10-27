<script setup lang="ts">
import type { AuthFormField, FormError, FormSubmitEvent } from '@nuxt/ui'
import type { H3Error } from 'h3'
import * as z from 'zod'

definePageMeta({
  layout: 'auth',
  guest: true
})

useSeoMeta({
  title: 'Inscription',
  description: 'Créer un compte pour commencer'
})

const toast = useToast()
const route = useRoute()
const { t } = useI18n()
const { fetch: refreshSession } = useUserSession()

const loading = ref(false)

const isDev = import.meta.dev

const fields: AuthFormField[] = [
  {
    name: 'name',
    type: 'text' as const,
    label: t('name'),
    placeholder: t('name'),
    defaultValue: isDev ? 'John Doe' : undefined
  },
  {
    name: 'email',
    type: 'text' as const,
    label: t('email'),
    placeholder: t('email'),
    defaultValue: isDev ? 'john.doe@example.com' : undefined
  },
  {
    name: 'password',
    label: t('password'),
    type: 'password' as const,
    placeholder: t('password'),
    defaultValue: isDev ? 'Test.123' : undefined
  },
  {
    name: 'terms',
    type: 'checkbox' as const,
    defaultValue: isDev ? true : undefined
  }
]

const providers = [{
  label: '',
  icon: 'ri:google-fill',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}]

const schema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  terms: z.boolean()
})

type FormData = z.output<typeof schema>

function validate(state: Partial<FormData>): FormError[] {
  const errors: FormError[] = []
  const { name, email, password, terms } = state

  if (name === undefined || name === null || name === '')
    errors.push({ name: 'name', message: t('error.required') })
  else if (name.length < 3)
    errors.push({ name: 'name', message: t('error.auth.name.short') })

  if (email === undefined || email === null || email === '')
    errors.push({ name: 'email', message: t('error.required') })
  else if (typeof email === 'string' && z.email().safeParse(email).success === false)
    errors.push({ name: 'email', message: t('error.auth.email.invalid') })

  if (password === undefined || password === null || password === '') {
    errors.push({ name: 'password', message: t('error.required') })
  }
  else {
    if (password.length < 8)
      errors.push({ name: 'password', message: t('error.auth.register.password.short') })
    if (!/[A-Z]/.test(password))
      errors.push({ name: 'password', message: t('error.auth.register.password.uppercase') })
    if (!/[a-z]/.test(password))
      errors.push({ name: 'password', message: t('error.auth.register.password.lowercase') })
    if (!/\d/.test(password))
      errors.push({ name: 'password', message: t('error.auth.register.password.digit') })
    if (/\s/.test(password))
      errors.push({ name: 'password', message: t('error.auth.register.password.space') })
    if (!/[^a-z0-9\s]/i.test(password))
      errors.push({ name: 'password', message: t('error.auth.register.password.special') })
  }

  if (!terms) {
    errors.push({
      name: 'terms',
      message: 'Vous devez accepter les conditions d\'utilisation'
    })
  }

  return errors
}

async function register(data: FormSubmitEvent<FormData>) {
  loading.value = true
  try {
    await $fetch('/api/register', {
      method: 'post',
      body: data.data
    })
    await refreshSession()
    if (route.redirectedFrom) {
      navigateTo(route.redirectedFrom)
    }
    else {
      navigateTo('/')
    }
  }
  catch (error) {
    const err = error as H3Error
    let description = t('error.server')
    if (err?.statusCode === 409) {
      description = t('error.auth.register.user.exists')
    }
    toast.add({
      title: t('error.auth.register.failed'),
      description,
      color: 'error'
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <UAuthForm
    :fields
    :schema
    :providers
    :validate-on="[]"
    :validate
    separator=""
    icon="solar:user-plus-bold"
    title="Créer un compte"
    @submit="register"
  >
    <template #description>
      {{ t('register.alreadyAccount') }}
      <ULink
        to="/login"
        class="text-primary font-medium"
      >
        {{ t('register.signIn') }}
      </ULink>
    </template>

    <template #terms-field="{ state }">
      <UCheckbox v-model="state.terms">
        <template #label>
          J'accepte les
          <ULink
            class="text-primary font-medium"
            to="/terms"
          >
            conditions d'utilisations
          </ULink>
        </template>
      </UCheckbox>
    </template>

    <template #submit>
      <AuthActionButtons :loading />
    </template>
  </UAuthForm>
</template>
