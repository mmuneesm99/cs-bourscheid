<script setup lang="ts">
const { t } = useClubLang()
useHead(() => ({
  title: t.value.club.seoTitle,
  meta: [{ name: "description", content: t.value.club.seoDescription }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t.club.eyebrow" :title="t.club.title" :lead="t.club.lead" />
    <section class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div class="space-y-5 lg:col-span-6">
          <h2 class="text-4xl text-slate-900">{{ t.club.names }}</h2>
          <p class="text-base leading-relaxed text-slate-600">{{ t.club.p1 }}</p>
          <p class="text-base leading-relaxed text-slate-600">{{ t.club.p2 }}</p>
          <div class="flex flex-wrap gap-3 pt-2">
            <NuxtLink to="/equipe" class="rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-brand-orange">{{ t.club.seeSquad }}</NuxtLink>
            <NuxtLink to="/contact" class="rounded-full border border-slate-300 px-5 py-2.5 text-sm hover:border-brand-orange hover:text-brand-orange">{{ t.club.write }}</NuxtLink>
          </div>
        </div>
        <div class="relative h-80 overflow-hidden rounded-2xl lg:col-span-6">
          <img src="/images/pitch.jpg" :alt="t.club.pitchAlt" class="h-full w-full object-cover">
          <p class="absolute bottom-0 left-0 right-0 bg-slate-900/75 px-4 py-3 text-sm text-white">{{ t.club.groundLine }}</p>
        </div>
      </div>
    </section>
    <section class="bg-white py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 class="mb-8 text-3xl text-slate-900">{{ t.club.join }}</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article class="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/images/service-first-team.jpg" :alt="t.common.firstTeam" class="h-48 w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl text-slate-900">{{ t.common.firstTeam }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ t.club.firstText }}</p>
              <NuxtLink to="/matchs" class="mt-4 inline-flex text-sm font-semibold text-brand-orange">{{ t.common.homeMatches }}</NuxtLink>
            </div>
          </article>
          <article class="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/images/service-reserves.jpg" :alt="t.common.reserves" class="h-48 w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl text-slate-900">{{ t.common.reserves }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ t.club.reserveText }}</p>
              <NuxtLink to="/equipe" class="mt-4 inline-flex text-sm font-semibold text-brand-orange">{{ t.nav.squad }}</NuxtLink>
            </div>
          </article>
          <article class="overflow-hidden rounded-2xl border border-slate-200">
            <img src="/images/service-volunteers.jpg" :alt="t.common.volunteers" class="h-48 w-full object-cover">
            <div class="p-6">
              <h3 class="text-xl text-slate-900">{{ t.common.volunteers }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ t.club.volunteerText }}</p>
              <a href="mailto:csb@pt.lu" class="mt-4 inline-flex text-sm font-semibold text-brand-orange">csb@pt.lu</a>
            </div>
          </article>
        </div>
        <dl class="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div><dt class="text-sm text-brand-orange">{{ t.common.seat }}</dt><dd class="mt-1 text-lg">Lisseneck 11<br>L-9377 Hoscheid</dd></div>
          <div><dt class="text-sm text-brand-orange">{{ t.common.ground }}</dt><dd class="mt-1 text-lg">Kierfechtswee<br>{{ t.common.michelau }}</dd></div>
          <div><dt class="text-sm text-brand-orange">{{ t.common.president }}</dt><dd class="mt-1 text-lg">Steve Heischbourg<br>{{ t.common.committee }}</dd></div>
          <div><dt class="text-sm text-brand-orange">{{ t.common.phone }}</dt><dd class="mt-1 text-lg">+352 691 792 489<br>{{ t.common.groundPhone }}</dd></div>
        </dl>
      </div>
    </section>
  </div>
</template>
