<template>
   <div class="bg-white">
      <div class="w-full mx-auto py-6 mx-8 border-b">
        <h1 class="text-3xl font-bold text-gray-900">{{title}}</h1>
      </div>
    </div>
    <section>
      <div class="px-8">
        <div class="px-4 py-6 sm:px-0">
          <slot></slot>
        </div>
      </div>
    </section>
</template>
<script setup>
   const props = defineProps({
       title: String,
   })
</script>
<style>
</style>
