<script setup lang="ts">
defineProps<{ page: any }>()
</script>

<template>
  <div>
    <PageHero v-if="page" :title="page.title" :description="page.description">
      <template #subtitle>
        <p v-if="page.hero?.subheading">
          {{ page.hero.subheading }}
        </p>
      </template>
      <template #actions>
        <Button color="success">
          {{ page.hero?.cta?.primary?.text || 'Créer un match maintenant' }}
        </Button>
        <Button variant="ghost" to="/register">
          {{ page.hero?.cta?.secondary?.text || 'Créer un compte gratuit' }}
        </Button>
      </template>
    </PageHero>

    <PageFeature v-if="page">
      <template #default>
        <ContentRenderer :value="page" />
      </template>
    </PageFeature>

    <PageCTA v-if="page">
      <template #default>
        <h3>{{ page.title }}</h3>
        <p>{{ page.description }}</p>
        <Button color="success">
          {{ page.hero?.cta?.primary?.text }}
        </Button>
      </template>
    </PageCTA>
  </div>
</template>
