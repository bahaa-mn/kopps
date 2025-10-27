<script lang="ts" setup>
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <div class="w-full flex gap-4">
    <UButton
      type="button"
      label="Annuler"
      to="/"
      color="neutral"
      variant="ghost"
      block
      :disabled="loading"
    />
    <UButton
      type="submit"
      label="Valider"
      color="primary"
      block
      :loading
    />
  </div>
</template>

<style scoped>

</style>
