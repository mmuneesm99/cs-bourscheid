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
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <ol>
          <li v-for="event in t.history.events" :key="event.year" class="grid grid-cols-1 gap-2 border-t border-slate-200 py-6 sm:grid-cols-[8rem_1fr]">
            <span class="display text-2xl text-brand-orange">{{ event.year }}</span>
            <div>
              <h2 class="text-xl text-slate-900">{{ event.title }}</h2>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ event.text }}</p>
            </div>
          </li>
        </ol>
        <p class="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
          {{ t.history.more }} <NuxtLink to="/palmares" class="text-brand-orange">{{ t.nav.honours }}</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>
