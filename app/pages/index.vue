<script setup lang="ts">
const { t } = useClubLang()
const selectedPlayer = ref<string | null>(null)
const mapSrc = computed(() => `https://maps.google.com/maps?q=Kierfechtswee,+L-9171+Michelau,+Luxembourg&hl=${t.value.contact.mapLang}&z=16&output=embed`)

useHead(() => ({
  title: t.value.home.seoTitle,
  meta: [{ name: "description", content: t.value.home.seoDescription }]
}))
</script>

<template>
  <div>
    <section id="hero" class="relative bg-slate-950 text-white min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/images/hero.jpg" :alt="t.home.heroLead" class="w-full h-full object-cover object-center opacity-50">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 w-full text-center">
        <span class="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          {{ t.home.heroBadge }}
        </span>
        <h1 class="font-black tracking-tight uppercase leading-none mb-6 max-w-full" style="font-size: clamp(1.45rem, 6.5vw, 6rem);">
          CS Buurschent
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal mb-8">
          {{ t.home.heroLead }}
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 max-w-sm sm:max-w-none mx-auto">
          <NuxtLink to="/matchs" class="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-md font-bold uppercase text-xs tracking-wider shadow-lg shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5 text-center">
            {{ t.home.heroMatches }}
          </NuxtLink>
          <NuxtLink to="/histoire" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-bold uppercase text-xs tracking-wider backdrop-blur-md transition-all text-center">
            {{ t.home.heroHistory }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <div class="relative z-20 max-w-5xl mx-auto px-4 w-full -mt-16">
      <div class="bg-slate-900 border border-slate-700 text-white rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-4 sm:gap-5 min-w-0">
          <div class="w-14 h-14 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
            <AppIcon name="zap" class="w-7 h-7" />
          </div>
          <div class="min-w-0">
            <h2 class="text-base sm:text-xl font-bold uppercase tracking-wide leading-snug">{{ t.home.bannerTitle }}</h2>
            <p class="text-sm text-slate-200 mt-1.5 leading-relaxed">{{ t.home.bannerText }}</p>
          </div>
        </div>
        <NuxtLink to="/contact" class="shrink-0 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all w-full md:w-auto text-center">
          {{ t.common.contactUs }}
        </NuxtLink>
      </div>
    </div>

    <section id="about" class="pt-16 pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 space-y-6">
            <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">{{ t.home.aboutKicker }}</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase leading-tight">
              {{ t.home.aboutTitle }}
            </h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ t.home.aboutP1 }}
            </p>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ t.home.aboutP2 }}
            </p>
            <div class="pt-4">
              <NuxtLink to="/club" class="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenLight text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-colors shadow-lg shadow-brand-green/20">
                {{ t.home.aboutCta }} <AppIcon name="arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div class="relative rounded-xl overflow-hidden shadow-xl h-80 group">
              <img src="/images/pitch.jpg" :alt="t.home.pitchAlt" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <span class="text-xs font-semibold text-brand-orange uppercase">{{ t.home.mainGround }}</span>
                <p class="font-bold text-sm">{{ t.home.groundLine }}</p>
              </div>
            </div>
            <div class="space-y-6 flex flex-col justify-between">
              <div class="bg-slate-50 border border-slate-100 p-8 rounded-xl shadow-sm text-center">
                <span class="block text-5xl font-black text-slate-900 tracking-tight">1969</span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 block">{{ t.home.foundedLabel }}</span>
              </div>
              <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <p class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.home.closedSeason }}</p>
                <p class="text-sm text-slate-700 mt-2 leading-relaxed">{{ t.home.closedText }}</p>
                <NuxtLink to="/palmares" class="mt-4 inline-flex text-xs font-bold uppercase text-brand-orange">{{ t.home.seeHonours }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white border-y border-slate-100" :aria-label="t.home.statsLabel">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
        <div class="py-8 lg:px-6 text-center">
          <span class="block text-3xl font-black text-slate-900">1969</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.home.foundedLabel }}</span>
        </div>
        <div class="py-8 lg:px-6 text-center">
          <span class="block text-3xl font-black text-slate-900">2</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.home.seniors }}</span>
        </div>
        <div class="py-8 lg:px-6 text-center">
          <span class="block text-3xl font-black text-brand-orange">93</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.home.goals }}</span>
        </div>
        <div class="py-8 lg:px-6 text-center">
          <span class="block text-3xl font-black text-slate-900">{{ t.home.rank }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.home.champion }}</span>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-12">
          <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">{{ t.home.historyKicker }}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase mt-2">{{ t.home.historyTitle }}</h2>
          <p class="text-slate-600 text-sm leading-relaxed mt-4">
            {{ t.home.historyLead }}
          </p>
        </div>
        <ol class="space-y-4">
          <li v-for="event in t.homeEvents" :key="event.year" class="bg-white border border-slate-200 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-3 sm:gap-8">
            <span class="text-brand-orange font-black text-lg">{{ event.year }}</span>
            <div>
              <h3 class="font-extrabold text-slate-900 uppercase text-sm">{{ event.title }}</h3>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ event.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="bg-brand-green text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-2">{{ t.home.service }}</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-snug">
              {{ t.home.glory }}
            </h2>
            <p class="text-slate-300 text-sm mt-3 max-w-2xl">
              {{ t.home.gloryText }}
            </p>
          </div>
          <div class="lg:col-span-4 flex lg:justify-end">
            <NuxtLink to="/equipe" class="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded font-bold uppercase text-xs tracking-wider shadow-lg transition-all">
              {{ t.home.seeSquad }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="fixtures" class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">{{ t.home.competition }}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase mt-2">{{ t.home.legacyTitle }}</h2>
          <div class="w-12 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200/80 group">
            <div class="h-48 overflow-hidden relative">
              <img src="/images/match-fels.jpg" :alt="t.home.matchAlt" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase">{{ t.home.squadBadge }}</span>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-slate-900 mb-2">{{ t.home.squadTitle }}</h3>
              <p class="text-xs text-slate-500 mb-4">{{ t.home.squadText }}</p>
              <NuxtLink to="/equipe" class="text-brand-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                {{ t.home.seeRoster }} <AppIcon name="chevron-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200/80 group">
            <div class="h-48 overflow-hidden relative">
              <img src="/images/match-perle.jpg" :alt="t.home.trainAlt" class="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase">{{ t.home.market }}</span>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-slate-900 mb-2">{{ t.home.arrivalsTitle }}</h3>
              <p class="text-xs text-slate-500 mb-4">{{ t.home.arrivalsText }}</p>
              <NuxtLink to="/equipe" class="text-brand-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                {{ t.home.seeArrivals }} <AppIcon name="chevron-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200/80 group">
            <div class="h-48 overflow-hidden relative">
              <img src="/images/match-result.jpg" :alt="t.home.saveAlt" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase">{{ t.home.roundBadge }}</span>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-slate-900 mb-2">SC Ell – CS Bourscheid</h3>
              <p class="text-xs text-slate-500 mb-4">{{ t.home.roundText }}</p>
              <NuxtLink to="/matchs" class="text-brand-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                {{ t.home.matchInfo }} <AppIcon name="chevron-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="roster" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">{{ t.home.season }}</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase mt-2">{{ t.home.playersStaff }}</h2>
            <p class="text-sm text-slate-500 mt-3 max-w-xl">{{ t.home.rosterLead }}</p>
          </div>
          <div class="mt-4 md:mt-0 flex gap-2">
            <span class="px-3 py-1 bg-slate-900 text-white rounded text-xs font-bold uppercase">{{ t.home.firstTeam }}</span>
            <NuxtLink to="/equipe" class="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase hover:bg-slate-200">{{ t.common.reserves }}</NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <button v-for="player in highlights" :key="player.name" type="button" class="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm text-left hover:border-brand-orange" @click="selectedPlayer = player.name">
            <PlayerKit :name="player.name" :code="player.code" />
            <div class="p-5 border-t border-slate-100">
              <span class="text-[10px] font-bold text-brand-orange uppercase tracking-wider">{{ t.roles[player.role] }}</span>
              <h3 class="font-extrabold text-slate-900 text-base mt-1">{{ player.name }}</h3>
              <p class="text-xs text-slate-500 mt-1">{{ t.nations[player.nation] }} · {{ t.common.born }} {{ player.born }}</p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <section class="bg-brand-green text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 space-y-6">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest block">{{ t.home.honoursKicker }}</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold uppercase leading-tight">{{ t.home.excellence }}</h2>
            <p class="text-slate-300 text-sm leading-relaxed">
              {{ t.home.excellenceText }}
            </p>
            <div class="space-y-3 pt-2">
              <div class="p-4 bg-brand-greenLight rounded-lg border border-white/10 flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-wider">{{ t.home.titleD3 }}</span>
                <AppIcon name="check-circle-2" class="w-4 h-4 text-brand-orange shrink-0" />
              </div>
              <div class="p-4 bg-brand-greenLight rounded-lg border border-white/10 flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-wider">{{ t.home.titleSeries }}</span>
                <AppIcon name="check-circle-2" class="w-4 h-4 text-brand-orange shrink-0" />
              </div>
            </div>
          </div>
          <div class="lg:col-span-7">
            <div class="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
              <img src="/images/legacy.jpg" :alt="t.home.duelAlt" class="w-full h-[420px] object-cover object-center">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div class="absolute bottom-6 left-6 right-6">
                <span class="text-xs font-bold text-brand-orange uppercase">{{ t.home.spirit }}</span>
                <h3 class="text-xl font-extrabold uppercase mt-1">{{ t.home.historic }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-12">
          <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">{{ t.home.lifeKicker }}</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase mt-2">{{ t.home.lifeTitle }}</h2>
          <p class="text-slate-600 text-sm leading-relaxed mt-4">{{ t.home.lifeLead }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article class="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <AppIcon name="shirt" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase text-slate-900 mt-4">{{ t.common.firstTeam }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.home.firstText }}</p>
          </article>
          <article class="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <AppIcon name="users" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase text-slate-900 mt-4">{{ t.common.reserves }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.home.reserveText }}</p>
          </article>
          <article class="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <AppIcon name="heart-handshake" class="w-6 h-6 text-brand-orange" />
            <h3 class="font-extrabold uppercase text-slate-900 mt-4">{{ t.common.volunteers }}</h3>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ t.home.volunteerText }}</p>
          </article>
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div class="rounded-xl border border-slate-200 p-5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.seat }}</span>
            <p class="font-bold text-slate-900 mt-1">Lisseneck 11</p>
            <p class="text-slate-500">L-9377 Hoscheid</p>
          </div>
          <div class="rounded-xl border border-slate-200 p-5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.ground }}</span>
            <p class="font-bold text-slate-900 mt-1">Kierfechtswee</p>
            <p class="text-slate-500">{{ t.common.michelau }}</p>
          </div>
          <div class="rounded-xl border border-slate-200 p-5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.president }}</span>
            <p class="font-bold text-slate-900 mt-1">Steve Heischbourg</p>
            <p class="text-slate-500">{{ t.common.committee }}</p>
          </div>
          <div class="rounded-xl border border-slate-200 p-5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-orange">{{ t.common.phone }}</span>
            <p class="font-bold text-slate-900 mt-1">+352 691 792 489</p>
            <p class="text-slate-500">{{ t.common.groundPhone }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-2">{{ t.home.location }}</span>
            <h3 class="text-2xl font-extrabold uppercase mb-4">{{ t.home.motivation }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              {{ t.home.locationText }}
            </p>
            <div class="space-y-4 text-xs">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-orange shrink-0">
                  <AppIcon name="map-pin" class="w-4 h-4" />
                </div>
                <div>
                  <strong class="block text-white uppercase">{{ t.home.mainStadium }}</strong>
                  <span class="text-slate-400">{{ t.home.stadiumLine }}</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-orange shrink-0">
                  <AppIcon name="mail" class="w-4 h-4" />
                </div>
                <div>
                  <strong class="block text-white uppercase">{{ t.home.officialEmail }}</strong>
                  <a href="mailto:csb@pt.lu" class="text-slate-400 hover:text-white">csb@pt.lu</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-orange shrink-0">
                  <AppIcon name="phone" class="w-4 h-4" />
                </div>
                <div>
                  <strong class="block text-white uppercase">{{ t.common.phone }}</strong>
                  <span class="text-slate-400">{{ t.contact.phoneLine }}</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand-orange shrink-0">
                  <AppIcon name="shield" class="w-4 h-4" />
                </div>
                <div>
                  <strong class="block text-white uppercase">{{ t.home.federation }}</strong>
                  <span class="text-slate-400">{{ t.home.federationName }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden border border-slate-700 shadow-lg h-80 lg:h-full min-h-80 bg-slate-800">
            <iframe
              :title="t.home.mapTitle"
              :src="mapSrc"
              class="w-full h-full border-0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
    <PlayerDialog :name="selectedPlayer" @close="selectedPlayer = null" />
  </div>
</template>
