<script lang="ts" setup>
defineProps<{
  title: string
  description?: string
  danger?: boolean
  body: string
  confirmLabel?: string
  cancelLabel?: string
}>()

const emits = defineEmits(['confirm', 'cancel'])

const open = defineModel<boolean>()

function cancel() {
  emits('cancel')
}
function confirm() {
  emits('confirm')
}
</script>

<template>
  <UModal
    v-model:open="open"
    :title
    :description="description"
    @close:prevent="cancel"
  >
    <template #body>
      <p>
        {{ body }}
      </p>
    </template>

    <template #footer>
      <div class="w-full flex gap-4">
        <UButton
          color="neutral"
          variant="ghost"
          block
          :label="cancelLabel ?? $t('action.cancel')"
          @click="cancel"
        />
        <UButton
          :color="danger ? 'error' : 'primary'"
          block
          :label="confirmLabel ?? $t('action.confirm')"
          @click="confirm"
        />
      </div>
    </template>
  </UModal>
</template>

<style scoped>

</style>
