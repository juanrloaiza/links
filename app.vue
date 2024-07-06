<script setup lang="ts">
const { data } = await useAsyncData('linkslist', () => queryContent('/links').findOne())

const links = data.value.body

</script>

<template>
  <div class="min-h-screen bg-indigo-100">
    <div class="container max-w-xl mx-auto py-20">
      <div class="flex flex-col justify-center items-center py-10 font-bold">
        <img src="assets/logo.png" class="w-28 bg-white rounded-full p-1" />
        <h1 class="text-4xl my-6">Juan R. Loaiza</h1>
        <p>Filósofo y académico (U. Alberto Hurtado)</p>
      </div>
      <div class="flex flex-col">
        <a v-for="link in links" :href="link.url">
          <div
            class="flex justify-center items-center text-center py-5 px-8 border rounded-2xl m-2 hover:bg-indigo-300 text-xl font-semibold bg-white ">

            {{
              link.name
            }}
            <div></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
