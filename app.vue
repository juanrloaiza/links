<script setup lang="ts">
const { data } = await useAsyncData('linkslist', () => queryContent('/links').findOne())

const links = data.value.body

</script>

<template>
  <div>
    <a v-for="link in links" :href="link.url">{{ link.name }}</a>
  </div>
</template>
