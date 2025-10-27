<script setup lang="ts">
const items = computed(() => [])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        Kopps
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        icon="solar:user-bold"
        color="neutral"
        variant="ghost"
        to="/login"
        class="lg:hidden"
      />

      <UButton
        icon="solar:user-bold"
        label="Se connecter"
        color="neutral"
        variant="outline"
        to="/login"
        class="hidden lg:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        to="/register"
        block
      />
    </template>
  </UHeader>
</template>
