<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

const { t } = useI18n()

useSeoMeta({
  title: t('settings.general.title'),
})

const toast = useToast()
const { user } = useUserSession()

const schema = z.object({
  name: z.string(),
  email: z.email()
})

type FormData = z.output<typeof schema>

const state = reactive<Partial<FormData>>({
  name: user.value?.name,
  email: user.value?.email
})

const hasChanges = computed(() => {
  return state.name?.trim() !== user.value?.name?.trim()
    || state.email?.trim() !== user.value?.email?.trim()
})

async function submit(_event: FormSubmitEvent<FormData>) {
  if (!hasChanges.value) {
    toast.add({
      title: $t('error.settings.profile.noChanges.title'),
      description: $t('error.settings.profile.noChanges.description'),
      icon: 'solar:info-circle-broken',
      color: 'info'
    })
    return
  }

  toast.add({
    title: $t('settings.general.toast.success.title'),
    description: $t('settings.general.toast.success.description'),
    icon: 'solar:check-circle-broken',
    color: 'success'
  })
}
</script>

<template>
  <UForm
    id="settings"
    :schema
    :state
    @submit="submit"
  >
    <UPageCard
      :title="$t('settings.general.profile.title')"
      :description="$t('settings.general.profile.description')"
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton
        form="settings"
        class="w-fit lg:ms-auto"
        :label="$t('action.save')"
        color="neutral"
        :variant="hasChanges ? 'solid' : 'soft'"
        :disabled="!hasChanges"
        type="submit"
      />
    </UPageCard>

    <UPageCard variant="subtle">
      <UFormField
        name="name"
        :label="$t('name')"
        class="flex max-sm:flex-col justify-between items-start gap-4"
      >
        <UInput
          v-model="state.name"
          autocomplete="off"
        />
      </UFormField>
      <USeparator />
      <UFormField
        name="email"
        :label="$t('email')"
        class="flex max-sm:flex-col justify-between items-start gap-4"
      >
        <UInput
          v-model="state.email"
          type="email"
          autocomplete="off"
        />
      </UFormField>
    </UPageCard>
  </UForm>
</template>
