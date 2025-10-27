<script setup lang="ts">
</script>

<template>
  <USeparator class="h-px" />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Vifauto © {{ new Date().getFullYear() }}
      </p>
    </template>

    <ULink
      class="text-sm"
      to="/"
    >
      Mentions Légales
    </ULink>
  </UFooter>
</template>
