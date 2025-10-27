<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()

useSeoMeta({
  titleTemplate: `${t('settings.title')} - %s`
})

const links = [[{
  label: t('settings.general.title'),
  icon: 'i-lucide-user',
  to: '/settings',
  exact: true
}, {
  label: t('settings.security.title'),
  icon: 'i-lucide-shield',
  to: '/settings/security'
}]] satisfies NavigationMenuItem[][]
</script>

<template>
  <UDashboardPanel
    id="settings"
    :ui="{ body: 'lg:py-12' }"
  >
    <template #header>
      <UDashboardNavbar :title="$t('settings.title')">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <UNavigationMenu
          :items="links"
          class="-mx-1 flex-1"
        />
      </UDashboardToolbar>
    </template>

    <template #body>
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto">
        <NuxtPage />
      </div>
    </template>
  </UDashboardPanel>
</template>
