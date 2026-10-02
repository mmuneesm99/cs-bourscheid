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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article class="bg-white border border-slate-200 rounded-xl p-8">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-orange">1976/77</p>
          <h2 class="text-2xl font-extrabold uppercase mt-2">{{ t.honours.series }}</h2>
          <dl class="mt-6 grid grid-cols-3 gap-4 text-center">
            <div><dt class="text-[10px] uppercase text-slate-500 font-bold">{{ t.honours.wins }}</dt><dd class="text-3xl font-black">20</dd></div>
            <div><dt class="text-[10px] uppercase text-slate-500 font-bold">{{ t.honours.goals }}</dt><dd class="text-3xl font-black">82</dd></div>
            <div><dt class="text-[10px] uppercase text-slate-500 font-bold">{{ t.honours.conceded }}</dt><dd class="text-3xl font-black">20</dd></div>
          </dl>
          <p class="text-sm text-slate-600 mt-6 leading-relaxed">{{ t.honours.seriesText }}</p>
        </article>
        <article class="bg-slate-950 text-white rounded-xl p-8">
          <p class="text-xs font-bold uppercase tracking-widest text-brand-orange">2024/25</p>
          <h2 class="text-2xl font-extrabold uppercase mt-2">{{ t.honours.champion }}</h2>
          <dl class="mt-6 grid grid-cols-4 gap-4 text-center">
            <div><dt class="text-[10px] uppercase text-slate-400 font-bold">{{ t.honours.matches }}</dt><dd class="text-3xl font-black">24</dd></div>
            <div><dt class="text-[10px] uppercase text-slate-400 font-bold">{{ t.honours.wins }}</dt><dd class="text-3xl font-black">19</dd></div>
            <div><dt class="text-[10px] uppercase text-slate-400 font-bold">{{ t.honours.points }}</dt><dd class="text-3xl font-black">59</dd></div>
            <div><dt class="text-[10px] uppercase text-slate-400 font-bold">{{ t.honours.goals }}</dt><dd class="text-3xl font-black text-brand-orange">93</dd></div>
          </dl>
          <p class="text-sm text-slate-300 mt-6 leading-relaxed">{{ t.honours.championText }}</p>
        </article>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <NuxtLink to="/histoire" class="text-xs font-bold uppercase tracking-wider text-brand-orange">{{ t.honours.read }}</NuxtLink>
      </div>
    </section>
  </div>
</template>
