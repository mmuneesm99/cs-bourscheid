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
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 space-y-5">
          <h2 class="text-3xl font-extrabold uppercase text-slate-900">{{ t.club.names }}</h2>
          <p class="text-sm text-slate-600 leading-relaxed">{{ t.club.p1 }}</p>
          <p class="text-sm text-slate-600 leading-relaxed">{{ t.club.p2 }}</p>
          <div class="flex flex-wrap gap-3 pt-2">
            <NuxtLink to="/equipe" class="bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded">{{ t.club.seeSquad }}</NuxtLink>
            <NuxtLink to="/contact" class="border border-slate-300 hover:border-brand-orange text-xs font-bold uppercase tracking-wider px-5 py-3 rounded">{{ t.club.write }}</NuxtLink>
          </div>
        </div>
        <div class="lg:col-span-6 relative rounded-xl overflow-hidden h-80 shadow-xl">
          <img src="/images/pitch.jpg" :alt="t.club.pitchAlt" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <p class="absolute bottom-4 left-4 right-4 text-white font-bold">{{ t.club.groundLine }}</p>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-extrabold uppercase text-slate-900 mb-8">{{ t.club.join }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <AppIcon name="shirt" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase mt-4">{{ t.common.firstTeam }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.club.firstText }}</p>
            <NuxtLink to="/matchs" class="mt-4 inline-flex text-xs font-bold uppercase text-brand-orange">{{ t.common.homeMatches }}</NuxtLink>
          </article>
          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <AppIcon name="users" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase mt-4">{{ t.common.reserves }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.club.reserveText }}</p>
            <NuxtLink to="/equipe" class="mt-4 inline-flex text-xs font-bold uppercase text-brand-orange">{{ t.nav.squad }}</NuxtLink>
          </article>
          <article class="bg-white border border-slate-200 rounded-xl p-6">
            <AppIcon name="heart-handshake" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase mt-4">{{ t.common.volunteers }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.club.volunteerText }}</p>
            <a href="mailto:csb@pt.lu" class="mt-4 inline-flex text-xs font-bold uppercase text-brand-orange">csb@pt.lu</a>
          </article>
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div class="bg-white rounded-xl border border-slate-200 p-5"><span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.seat }}</span><p class="font-bold mt-1">Lisseneck 11</p><p class="text-slate-500">L-9377 Hoscheid</p></div>
          <div class="bg-white rounded-xl border border-slate-200 p-5"><span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.ground }}</span><p class="font-bold mt-1">Kierfechtswee</p><p class="text-slate-500">{{ t.common.michelau }}</p></div>
          <div class="bg-white rounded-xl border border-slate-200 p-5"><span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.president }}</span><p class="font-bold mt-1">Steve Heischbourg</p><p class="text-slate-500">{{ t.common.committee }}</p></div>
          <div class="bg-white rounded-xl border border-slate-200 p-5"><span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.phone }}</span><p class="font-bold mt-1">+352 691 792 489</p><p class="text-slate-500">{{ t.common.groundPhone }}</p></div>
        </div>
      </div>
    </section>
  </div>
</template>
