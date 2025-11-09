<script setup lang="ts">
import type { LandingContentSchema } from '~~/content/'

defineProps<{ page: LandingContentSchema }>()
</script>

<template>
  <div>
    <UPageHero v-if="page" :title="page.title" :description="page.description">
      <template #subtitle>
        <p v-if="page.hero?.subheading">
          {{ page.hero.subheading }}
        </p>
      </template>
      <template #links>
        <UButton color="success">
          {{ page.hero?.cta?.primary?.text || 'Créer un match maintenant' }}
        </UButton>
        <UButton variant="ghost" to="/register">
          {{ page.hero?.cta?.secondary?.text || 'Créer un compte gratuit' }}
        </UButton>
      </template>
    </UPageHero>

    <UPageFeature v-if="page">
      <template #default>
        <ContentRenderer :value="page" />
      </template>
    </UPageFeature>

    <UPageCTA :title="page.hero.cta.title">
      <template #links>
        <UButton color="success">
          {{ page.hero.cta.primary.text }}
        </UButton>
      </template>
    </UPageCTA>
  </div>
</template>
