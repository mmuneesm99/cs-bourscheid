<script setup lang="ts">
const { t } = useClubLang()
useHead(() => ({
  title: t.value.history.seoTitle,
  meta: [{ name: "description", content: t.value.history.seoDescription }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t.history.eyebrow" :title="t.history.title" :lead="t.history.lead" />
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol class="space-y-4">
          <li v-for="event in t.history.events" :key="event.year" class="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-3">
            <span class="text-brand-orange font-black text-lg">{{ event.year }}</span>
            <div>
              <h2 class="font-extrabold uppercase text-sm">{{ event.title }}</h2>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ event.text }}</p>
            </div>
          </li>
        </ol>
        <p class="mt-8 text-sm text-slate-500">
          {{ t.history.more }} <NuxtLink to="/palmares" class="text-brand-orange font-bold">{{ t.nav.honours }}</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>
