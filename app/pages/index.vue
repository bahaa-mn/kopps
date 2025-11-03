<script setup lang="ts">
definePageMeta({
  layout: 'landing',
  guest: true
})

const { locale } = useI18n()
const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(() => queryCollection(collectionName.value).path('/').first(), { watch: [locale] })
</script>

<template>
  <div>
    <LandingContent v-if="page" :page="page" />
    <div v-else>
      Loading...
    </div>
  </div>
</template>
