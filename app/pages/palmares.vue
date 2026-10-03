<script setup lang="ts">
const { t } = useClubLang()
useHead(() => ({
  title: t.value.honours.seoTitle,
  meta: [{ name: "description", content: t.value.honours.seoDescription }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t.honours.eyebrow" :title="t.honours.title" :lead="t.honours.lead" />
    <section class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2">
        <article class="rounded-2xl bg-white p-8 shadow-sm">
          <p class="display text-3xl text-brand-orange">1976/77</p>
          <h2 class="mt-3 text-2xl text-slate-900">{{ t.honours.series }}</h2>
          <dl class="mt-6 grid grid-cols-3 gap-4 border-y border-slate-200 py-4 text-center">
            <div><dt class="text-xs text-slate-500">{{ t.honours.wins }}</dt><dd class="display text-3xl text-slate-900">20</dd></div>
            <div><dt class="text-xs text-slate-500">{{ t.honours.goals }}</dt><dd class="display text-3xl text-slate-900">82</dd></div>
            <div><dt class="text-xs text-slate-500">{{ t.honours.conceded }}</dt><dd class="display text-3xl text-slate-900">20</dd></div>
          </dl>
          <p class="mt-6 text-sm leading-relaxed text-slate-600">{{ t.honours.seriesText }}</p>
        </article>
        <article class="rounded-2xl bg-white p-8 shadow-sm">
          <p class="display text-3xl text-brand-orange">2024/25</p>
          <h2 class="mt-3 text-2xl text-slate-900">{{ t.honours.champion }}</h2>
          <dl class="mt-6 grid grid-cols-4 gap-4 border-y border-slate-200 py-4 text-center">
            <div><dt class="text-xs text-slate-500">{{ t.honours.matches }}</dt><dd class="display text-3xl text-slate-900">24</dd></div>
            <div><dt class="text-xs text-slate-500">{{ t.honours.wins }}</dt><dd class="display text-3xl text-slate-900">19</dd></div>
            <div><dt class="text-xs text-slate-500">{{ t.honours.points }}</dt><dd class="display text-3xl text-slate-900">59</dd></div>
            <div><dt class="text-xs text-slate-500">{{ t.honours.goals }}</dt><dd class="display text-3xl text-brand-orange">93</dd></div>
          </dl>
          <p class="mt-6 text-sm leading-relaxed text-slate-600">{{ t.honours.championText }}</p>
        </article>
      </div>
      <div class="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <NuxtLink to="/histoire" class="text-sm text-brand-orange">{{ t.honours.read }}</NuxtLink>
      </div>
    </section>
  </div>
</template>
