<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead: string
}>()
</script>

<template>
  <section class="border-b border-slate-200/80">
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange"><span class="h-2 w-2 bg-brand-orange" />{{ eyebrow }}</p>
      <h1 class="mt-3 max-w-4xl text-4xl text-slate-900 sm:text-6xl">{{ title }}</h1>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{{ lead }}</p>
    </div>
  </section>
</template>
