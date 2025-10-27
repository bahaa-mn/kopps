<script setup lang="ts">
import type { AuthFormField, FormError, FormSubmitEvent } from '@nuxt/ui'
import type { H3Error } from 'h3'
import * as z from 'zod'

definePageMeta({
  layout: 'auth',
  guest: true
})

useSeoMeta({
  title: 'Connexion',
  description: 'Se connecter pour continuer'
})

const toast = useToast()
const route = useRoute()
const { t } = useI18n()
const { fetch: refreshSession } = useUserSession()

const loading = ref(false)

const isDev = import.meta.dev

const fields: AuthFormField[] = [
  {
    name: 'email',
    label: t('email'),
    type: 'text',
    placeholder: t('email'),
    defaultValue: isDev ? 'john.doe@example.com' : undefined
  },
  {
    name: 'password',
    label: t('password'),
    type: 'password',
    placeholder: '********',
    defaultValue: isDev ? 'Test.123' : undefined
  }
]

const providers = [{
  label: '',
  icon: 'ri:google-fill',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Se connecter avec Google' })
  }
}]

const schema = z.object({
  email: z.email(),
  password: z.string()
})

type FormData = z.output<typeof schema>

function validate(state: Partial<FormData>): FormError[] {
  const errors: FormError[] = []
  const { email, password } = state

  if (email === undefined || email === null || email === '')
    errors.push({ name: 'email', message: t('error.required') })
  else if (z.email().safeParse(email).success === false)
    errors.push({ name: 'email', message: t('error.auth.email.invalid') })

  if (password === undefined || password === null || password === '')
    errors.push({ name: 'password', message: t('error.required') })

  return errors
}

async function login(data: FormSubmitEvent<FormData>) {
  loading.value = true
  try {
    await $fetch('/api/login', {
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
    let description = t('error.auth.login.server')
    if (err?.statusCode === 404) {
      description = t('error.auth.login.notFound')
    }
    else if (err?.statusCode === 401) {
      description = t('error.auth.login.password.invalid')
    }
    toast.add({
      title: t('error.auth.login.failed'),
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
    separator=""
    title="Connexion"
    icon="solar:user-bold"
    :validate-on="[]"
    :validate="validate"
    @submit="login"
  >
    <template #description>
      {{ t('login.noAccount') }}
      <ULink
        to="/register"
        class="text-primary font-medium"
      >
        {{ t('login.signUp') }}
      </ULink>
    </template>

    <template #password-hint>
      <ULink
        to="/"
        class="text-primary font-medium"
        tabindex="-1"
      >
        Mot de passe oublié
      </ULink>
    </template>

    <template #submit>
      <AuthActionButtons :loading />
    </template>
  </UAuthForm>
</template>
