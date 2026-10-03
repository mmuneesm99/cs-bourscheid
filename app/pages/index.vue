<script setup lang="ts">
import { fill } from "~/utils/copy"
import { clubOutcome } from "~/utils/matches"

const { t, lang } = useClubLang()
const selectedPlayer = ref<string | null>(null)
const mapSrc = computed(() => `https://maps.google.com/maps?q=Kierfechtswee,+L-9171+Michelau,+Luxembourg&hl=${t.value.contact.mapLang}&z=16&output=embed`)
const standing = computed(() => fill(t.value.matches.standing, {
  place: tableAfterFour.place[lang.value],
  points: tableAfterFour.points
}))
const { next, following } = useFixtures()

const results = computed(() => leagueResults.map((match) => ({
  ...match,
  ...clubOutcome(match)
})))

function markLabel(mark: string) {
  if (mark === "W") return t.value.matches.markWin
  if (mark === "D") return t.value.matches.markDraw
  return t.value.matches.markLoss
}

function markClass(mark: string) {
  if (mark === "W") return "bg-red-50 text-brand-orange"
  if (mark === "D") return "bg-slate-100 text-slate-600"
  return "bg-slate-100 text-slate-400"
}

useHead(() => ({
  title: t.value.home.seoTitle,
  meta: [{ name: "description", content: t.value.home.seoDescription }]
}))
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-[#12151c] text-white">
      <img src="/images/hero.jpg" alt="" class="absolute inset-0 h-full w-full object-cover object-center">
      <div class="absolute inset-0 bg-[#12151c]/55" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#12151c] via-[#12151c]/35 to-[#12151c]/40" />
      <div class="relative mx-auto grid min-w-0 max-w-6xl items-end gap-10 px-4 py-16 sm:px-6 lg:min-h-[40rem] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-20">
        <div class="min-w-0">
          <img src="/images/logo.png" alt="" class="h-16 w-16 object-contain sm:h-20 sm:w-20" width="80" height="80">
          <p class="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">{{ next?.competition[lang] || t.home.heroBadge }}</p>
          <h1 class="mt-3 max-w-full text-5xl text-white sm:text-7xl">CS Buurschent</h1>
          <p class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">{{ t.home.heroBadge }}</p>
        </div>
        <article class="min-w-0 rounded-2xl bg-white p-6 text-[#243040] shadow-xl shadow-black/20 sm:p-8">
          <p class="text-lg text-brand-orange">{{ t.matches.next }}</p>
          <template v-if="next">
            <p class="mt-1 text-sm text-black/60">{{ next.round[lang] }}</p>
            <div class="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-xl font-bold leading-tight text-slate-900">{{ next.home }}</p>
                <p class="mt-2 text-sm text-slate-500">{{ t.matches.homeBadge }}</p>
              </div>
              <div class="lg:text-center">
                <p class="text-sm text-brand-orange">{{ t.matches.kickoff }}</p>
                <p v-if="next.time" class="display mt-1 text-4xl tabular-nums text-slate-900">{{ next.time }}</p>
                <p v-else class="mt-1 text-sm text-slate-500">{{ next.date[lang] }}</p>
              </div>
              <div class="border-t border-slate-200 pt-5 lg:border-0 lg:pt-0 lg:text-right">
                <p class="text-xl font-bold leading-tight text-slate-900">{{ next.away }}</p>
                <p class="mt-2 text-sm text-brand-orange">{{ t.matches.awayBadge }}</p>
              </div>
            </div>
            <p class="mt-6 text-sm text-slate-700">{{ next.date[lang] }}</p>
            <p v-if="next.venue" class="mt-1 text-sm font-semibold text-slate-900">{{ next.venue }}</p>
            <p v-if="next.page" class="mt-2 text-sm leading-relaxed text-slate-500">{{ t.matches.awayNote }}</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink to="/matchs" class="inline-flex rounded-full bg-brand-orange px-5 py-2.5 text-sm text-white hover:bg-brand-orangeHover">{{ t.home.matchInfo }}</NuxtLink>
              <a v-if="next.page" :href="next.page" class="inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm hover:border-brand-orange" target="_blank" rel="noopener noreferrer">{{ t.matches.ellSheet }}</a>
            </div>
          </template>
          <p v-else class="mt-4 text-sm leading-relaxed text-slate-600">{{ t.matches.noNext }}</p>
        </article>
      </div>
    </section>

    <section v-if="following.length" class="border-b border-slate-200 bg-white" :aria-label="t.matches.upcoming">
      <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div class="flex items-end justify-between gap-4">
          <p class="text-sm font-semibold text-brand-orange">{{ t.matches.upcoming }}</p>
          <NuxtLink to="/matchs" class="shrink-0 text-sm font-semibold text-brand-orange">{{ t.home.matchInfo }}</NuxtLink>
        </div>
        <ul class="mt-5 grid gap-3 lg:grid-cols-2">
          <li v-for="match in following" :key="match.kickoff" class="rounded-2xl border border-slate-200 px-4 py-4">
            <p class="text-sm text-slate-500">{{ match.round[lang] }} · {{ match.date[lang] }}<span v-if="match.time"> · {{ match.time }}</span></p>
            <p class="mt-2 text-base text-slate-900">
              <span :class="match.home === 'CS Bourscheid' ? 'font-semibold' : ''">{{ match.home }}</span>
              <span class="text-slate-400"> – </span>
              <span :class="match.away === 'CS Bourscheid' ? 'font-semibold' : ''">{{ match.away }}</span>
            </p>
            <p class="mt-1 text-sm" :class="match.side === 'home' ? 'text-brand-orange' : 'text-slate-500'">
              {{ match.side === "home" ? t.matches.homeBadge : t.matches.awayBadge }}<span v-if="match.venue"> · {{ match.venue }}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-[#12151c] py-14 text-white">
      <div class="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange"><span class="h-2 w-2 bg-brand-orange" />{{ t.matches.seasonLabel }}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">{{ t.matches.results }}</h2>
        </div>
        <NuxtLink to="/matchs" class="text-sm font-semibold text-brand-orange">{{ t.home.matchInfo }}</NuxtLink>
      </div>
      <ul class="mx-auto mt-8 grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <li v-for="match in results" :key="match.date.FR" class="min-w-0 rounded-2xl bg-white px-4 py-4 text-[#1c2128]">
          <div class="flex items-center justify-between gap-3">
            <span class="text-sm text-slate-500">{{ match.date[lang] }}</span>
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold" :class="markClass(match.mark)">{{ markLabel(match.mark) }}</span>
          </div>
          <div class="mt-3 flex items-start justify-between gap-3">
            <p class="min-w-0 text-sm leading-snug" :class="match.home === 'CS Bourscheid' ? 'font-semibold text-slate-900' : 'text-slate-500'">{{ match.home }}</p>
            <p class="display shrink-0 text-lg tabular-nums text-brand-orange">{{ match.score }}</p>
          </div>
          <p class="mt-1 text-sm leading-snug" :class="match.away === 'CS Bourscheid' ? 'font-semibold text-slate-900' : 'text-slate-500'">{{ match.away }}</p>
        </li>
      </ul>
      <div class="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <article class="overflow-hidden rounded-2xl bg-white text-[#1c2128]">
          <div class="bg-brand-orange px-6 py-4 text-white">
            <h2 class="text-2xl">{{ t.matches.table }}</h2>
          </div>
          <div class="p-6">
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ standing }}</p>
          <table class="mt-4 w-full text-left text-sm">
            <thead class="text-slate-500">
              <tr>
                <th class="py-2 font-medium">#</th>
                <th class="px-2 py-2 font-medium">{{ t.nav.club }}</th>
                <th class="py-2 text-right font-medium">{{ t.matches.points }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in tableAfterFour.around"
                :key="row.place.FR"
                class="border-t border-slate-100"
                :class="row.team === 'CS Bourscheid' ? 'bg-red-50 font-semibold text-slate-900' : 'text-slate-600'"
              >
                <td class="py-3 pl-2 tabular-nums" :class="row.team === 'CS Bourscheid' ? 'text-brand-orange' : ''">{{ row.place[lang] }}</td>
                <td class="px-2 py-3">{{ row.team }}</td>
                <td class="py-3 pr-2 text-right text-base tabular-nums">{{ row.points }}</td>
              </tr>
            </tbody>
          </table>
          <NuxtLink to="/matchs" class="mt-4 inline-flex text-sm font-semibold text-brand-orange">{{ t.home.matchInfo }}</NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4">
        <article class="rounded-2xl border-t-4 border-brand-orange bg-white px-5 py-5 shadow-sm">
          <p class="display text-4xl">1969</p>
          <p class="mt-2 text-sm text-slate-500">{{ t.home.foundedLabel }}</p>
        </article>
        <article class="rounded-2xl border-t-4 border-brand-orange bg-white px-5 py-5 shadow-sm">
          <p class="display text-4xl">2</p>
          <p class="mt-2 text-sm text-slate-500">{{ t.home.seniors }}</p>
        </article>
        <article class="rounded-2xl border-t-4 border-brand-orange bg-white px-5 py-5 shadow-sm">
          <p class="display text-4xl text-brand-orange">{{ tableAfterFour.place[lang] }}</p>
          <p class="mt-2 text-sm text-slate-500">{{ t.matches.placeLabel }}</p>
        </article>
        <article class="rounded-2xl border-t-4 border-brand-orange bg-white px-5 py-5 shadow-sm">
          <p class="display text-4xl">{{ tableAfterFour.points }}</p>
          <p class="mt-2 text-sm text-slate-500">{{ t.matches.points }}</p>
        </article>
      </div>
      <div class="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <article class="rounded-2xl bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold text-brand-orange">{{ t.home.heroBadge }}</p>
          <h2 class="mt-1 text-4xl text-slate-900">CS Buurschent</h2>
          <p class="mt-5 text-base leading-relaxed text-slate-600">{{ t.home.historyLead }}</p>
          <p class="mt-3 text-base leading-relaxed text-slate-600">{{ t.home.aboutP2 }}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <NuxtLink to="/club" class="rounded-full bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-brand-orange">{{ t.home.aboutCta }}</NuxtLink>
            <NuxtLink to="/histoire" class="rounded-full border border-slate-300 px-5 py-2.5 text-sm hover:border-brand-orange hover:text-brand-orange">{{ t.nav.history }}</NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section id="roster" class="py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-semibold text-brand-orange">{{ t.home.season }}</p>
            <h2 class="mt-1 text-3xl text-slate-900">{{ t.home.firstTeam }}</h2>
            <p class="mt-3 max-w-xl text-sm text-slate-600">{{ t.home.rosterLead }}</p>
          </div>
          <NuxtLink to="/equipe" class="text-sm font-semibold text-brand-orange">{{ t.home.seeRoster }}</NuxtLink>
        </div>
        <img src="/images/team.jpg" :alt="t.home.firstTeam" class="mt-8 w-full rounded-2xl object-cover">
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button v-for="player in highlights" :key="player.name" type="button" class="flex h-[22.5rem] w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm hover:shadow-md" @click="selectedPlayer = player.name">
            <div class="h-56 w-full shrink-0">
              <PlayerKit :name="player.name" :code="player.code" />
            </div>
            <div class="flex h-[8.5rem] flex-col px-5 py-4">
              <span class="text-xs font-semibold text-brand-orange">{{ t.roles[player.role] }}</span>
              <h3 class="mt-1 line-clamp-2 text-lg leading-tight text-slate-900">{{ player.name }}</h3>
              <p class="mt-auto line-clamp-2 text-sm text-slate-500">{{ t.nations[player.nation] }} · {{ t.common.born }} {{ player.born }}</p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto grid max-w-6xl gap-4 px-4 py-4 sm:grid-cols-2 sm:px-6">
        <NuxtLink to="/palmares" class="rounded-2xl border-t-4 border-brand-orange bg-white p-6 shadow-sm">
          <p class="display text-3xl text-brand-orange">2024/25</p>
          <h2 class="mt-3 text-2xl text-slate-900">{{ t.home.titleD3 }}</h2>
          <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{{ t.home.closedText }}</p>
        </NuxtLink>
        <NuxtLink to="/palmares" class="rounded-2xl border-t-4 border-brand-orange bg-white p-6 shadow-sm">
          <p class="display text-3xl text-brand-orange">1976/77</p>
          <h2 class="mt-3 text-2xl text-slate-900">{{ t.home.titleSeries }}</h2>
          <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{{ t.homeEvents[1].text }}</p>
        </NuxtLink>
      </div>
    </section>

    <section id="contact" class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p class="text-sm text-brand-orange">{{ t.home.location }}</p>
          <h2 class="mt-1 text-3xl text-slate-900">{{ t.home.mapTitle }}</h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600">{{ t.home.locationText }}</p>
          <dl class="mt-6 space-y-4 text-sm">
            <div>
              <dt class="text-slate-500">{{ t.home.mainStadium }}</dt>
              <dd class="mt-1">{{ t.home.stadiumLine }}</dd>
            </div>
            <div>
              <dt class="text-slate-500">{{ t.common.seat }}</dt>
              <dd class="mt-1">Lisseneck 11, L-9377 Hoscheid</dd>
            </div>
            <div>
              <dt class="text-slate-500">{{ t.home.officialEmail }}</dt>
              <dd class="mt-1"><a href="mailto:csb@pt.lu" class="hover:text-brand-orange">csb@pt.lu</a></dd>
            </div>
            <div>
              <dt class="text-slate-500">{{ t.common.phone }}</dt>
              <dd class="mt-1">{{ t.contact.phoneLine }}</dd>
            </div>
          </dl>
          <NuxtLink to="/contact" class="mt-6 inline-flex rounded-full bg-brand-orange px-5 py-2.5 text-sm text-white hover:bg-brand-orangeHover">{{ t.common.contactUs }}</NuxtLink>
        </div>
        <div class="min-h-80 overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            :title="t.home.mapTitle"
            :src="mapSrc"
            class="h-full min-h-80 w-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    <PlayerDialog :name="selectedPlayer" @close="selectedPlayer = null" />
  </div>
</template>
