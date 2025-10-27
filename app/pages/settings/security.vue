<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import * as z from 'zod'

const { t } = useI18n()

useSeoMeta({
  title: t('settings.security.title'),
})

const passwordSchema = z.object({
  current: z.string().min(8, $t('settings.security.password.current.placeholder')),
  new: z.string().min(8, $t('settings.security.password.new.placeholder'))
})

type PasswordSchema = z.output<typeof passwordSchema>

const password = reactive<Partial<PasswordSchema>>({
  current: undefined,
  new: undefined
})

const canChangePassword = computed(() => {
  return password.current && password.new && password.current !== password.new
})

function validate(state: Partial<PasswordSchema>): FormError[] {
  const errors: FormError[] = []
  if (state.current && state.new && state.current === state.new) {
    errors.push({ name: 'new', message: $t('settings.security.password.new.error.duplicate') })
  }
  return errors
}
</script>

<template>
  <UPageCard
    :title="$t('password')"
    :description="$t('settings.security.password.description')"
    variant="subtle"
  >
    <UForm
      class="flex flex-col gap-4 max-w-xs"
      :schema="passwordSchema"
      :state="password"
      :validate="validate"
      :validate-on="[]"
    >
      <UFormField name="current">
        <UInput
          v-model="password.current"
          type="password"
          :placeholder="$t('settings.security.password.current.placeholder')"
          class="w-full"
        />
      </UFormField>

      <UFormField name="new">
        <UInput
          v-model="password.new"
          type="password"
          :placeholder="$t('settings.security.password.new.placeholder')"
          class="w-full"
        />
      </UFormField>

      <UButton
        class="w-fit"
        type="submit"
        :disabled="!canChangePassword"
        :label="$t('settings.security.password.update.label')"
      />
    </UForm>
  </UPageCard>

  <UPageCard
    :title="$t('settings.security.account.title')"
    :description="$t('settings.security.account.description')"
    class="bg-gradient-to-tl from-error/10 from-5% to-default whitespace-pre-line"
  >
    <template #footer>
      <UModal
        :title="$t('settings.security.account.delete.modal.title')"
        :description="$t('settings.security.account.delete.modal.description')"
      >
        <UButton
          :label="$t('action.delete')"
          color="error"
        />

        <template #body>
          <p class="mb-4">
            {{ $t('settings.security.account.delete.modal.body') }}
          </p>
        </template>

        <template #footer>
          <div class="w-full flex justify-end gap-2">
            <UButton
              :label="$t('action.cancel')"
              variant="outline"
              color="neutral"
            />
            <UButton
              :label="$t('action.delete')"
              color="error"
            />
          </div>
        </template>
      </UModal>
    </template>
  </UPageCard>
</template>
