<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead: string
}>()
</script>

<template>
  <section class="bg-slate-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p class="text-xs font-bold uppercase tracking-widest text-brand-orange">{{ eyebrow }}</p>
      <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold uppercase">{{ title }}</h1>
      <p class="mt-4 max-w-2xl text-slate-300">{{ lead }}</p>
    </div>
  </section>
</template>
