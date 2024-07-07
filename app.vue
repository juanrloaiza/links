<script setup lang="ts">
interface Link {
  name: string,
  url: string,
  icon: string
}

interface YAMLArray {
  body: Array<Link>
}

const { data: treeLinksYAML } = await useAsyncData('linkslist', () => queryContent<YAMLArray>('/links').findOne())

const { data: socialMediaYAML } = await useAsyncData('socialMediaLinks', () => queryContent<YAMLArray>('/social').findOne())

if (!treeLinksYAML.value || !socialMediaYAML.value) {
  throw new Error("No data received")
}

const links: Array<Link> = treeLinksYAML.value.body

const socialMedia: Array<Link> = socialMediaYAML.value.body

</script>

<template>
  <Script src="https://kit.fontawesome.com/56ed2b6624.js" crossorigin="anonymous" />
  <div class="min-h-screen bg-gradient-to-b from-slate-300 to-slate-100">
    <div class="container max-w-lg px-2 mx-auto py-20">
      <div class="flex flex-col justify-center items-center py-10 font-bold">
        <img src="/logo.png" class="w-28 bg-white rounded-full p-1" />
        <h1 class="text-4xl my-6">Juan R. Loaiza</h1>
        <p>Filósofo y académico (U. Alberto Hurtado)</p>
      </div>
      <div class="flex flex-col">
        <a v-for="link in links" :href="link.url">
          <div
            class="flex 
            justify-center items-center text-center py-5 px-8 border-2 border-slate-300 rounded-2xl m-1 hover:bg-slate-300 font-semibold bg-white text-lg">
            {{
              link.name
            }}
          </div>
        </a>
      </div>
      <div class="flex justify-center my-8">
        <a 
        class="text-slate-700 hover:text-slate-500 text-3xl mx-2"
        v-for="socialLink in socialMedia"
        :href="socialLink.url">
        <i :class="socialLink.icon"/>
        </a>
      </div>
    </div>
  </div>
</template>
