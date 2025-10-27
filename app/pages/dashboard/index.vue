<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('dashboard.title'),
})
</script>

<template>
  <UDashboardPanel
    id="app-dashboard"
    :ui="{ body: 'lg:py-12' }"
  >
    <template #header>
      <UDashboardNavbar :title="$t('dashboard.title')">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto" />
    </template>
  </UDashboardPanel>
</template>

<style scoped>

</style>
