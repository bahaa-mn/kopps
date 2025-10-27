<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()

const open = ref(false)

const links = [[{
  label: t('dashboard.title'),
  icon: 'solar:home-angle-broken',
  to: '/dashboard',
  onSelect: () => {
    open.value = false
  }
}, {
  label: t('settings.title'),
  icon: 'solar:settings-broken',
  to: '/settings',
  defaultOpen: true,
  type: 'trigger',
  children: [{
    label: t('settings.general.title'),
    to: '/settings',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: t('settings.security.title'),
    to: '/settings/security',
    onSelect: () => {
      open.value = false
    }
  }]
}], [

]] satisfies NavigationMenuItem[][]
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header="{ collapsed }">
        <div class="w-full flex justify-center items-center">
          <Icon v-if="collapsed" name="solar:home-angle-broken" />
          <h1
            v-else
            to="/dashboard"
            class="w-full text-center"
          >
            CGen
          </h1>
        </div>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />

        <UNavigationMenu
          :collapsed
          :items="links[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>

      <template #footer="{ collapsed }">
        <UserMenu :collapsed />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
