<script setup lang="ts">
import { fill } from "~/utils/copy"
import { clubOutcome } from "~/utils/matches"

const { t, lang } = useClubLang()
const { next, later } = useFixtures()

const standing = computed(() => fill(t.value.matches.standing, {
  place: tableAfterFour.place[lang.value],
  points: tableAfterFour.points
}))

const results = computed(() => leagueResults.map((match) => ({
  ...match,
  ...clubOutcome(match)
})))

const season = computed(() => {
  return results.value.reduce((total, match) => {
    total.goalsFor += match.ours
    total.goalsAgainst += match.theirs
    if (match.mark === "W") total.wins += 1
    else if (match.mark === "D") total.draws += 1
    else total.losses += 1
    return total
  }, { wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 })
})

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
  title: t.value.matches.seoTitle,
  meta: [{ name: "description", content: t.value.matches.seoDescription }]
}))
</script>

<template>
  <div>
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto grid min-w-0 max-w-6xl items-end gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-16">
        <div class="min-w-0">
          <p class="text-sm font-semibold text-brand-orange">{{ t.matches.next }}</p>
          <template v-if="next">
            <h1 class="mt-2 text-5xl text-slate-900 sm:text-6xl">{{ next.home }}</h1>
            <p class="display mt-2 text-2xl text-slate-400">{{ next.away }}</p>
            <p v-if="next.page" class="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{{ t.matches.awayNote }}</p>
          </template>
          <p v-else class="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{{ t.matches.noNext }}</p>
        </div>
        <div v-if="next" class="rounded-2xl bg-slate-900 px-6 py-6 text-white">
          <p class="text-sm text-brand-orange">{{ next.competition[lang] }} · {{ next.round[lang] }}</p>
          <p v-if="next.time" class="display mt-2 text-5xl tabular-nums">{{ next.time }}</p>
          <p class="mt-2 text-sm text-slate-300">{{ next.date[lang] }}</p>
          <p v-if="next.venue" class="mt-1 text-sm text-white">{{ next.venue }}</p>
          <p class="mt-1 text-sm text-slate-400">{{ next.side === "home" ? t.matches.homeBadge : t.matches.awayBadge }}</p>
          <div class="mt-5 flex flex-wrap gap-3">
            <a v-if="next.page" :href="next.page" class="inline-flex rounded-full bg-brand-orange px-5 py-2.5 text-sm text-white hover:bg-brand-orangeHover" target="_blank" rel="noopener noreferrer">{{ t.matches.ellSheet }}</a>
            <a :href="sofascoreTeam" class="inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm text-white hover:border-brand-orange" target="_blank" rel="noopener noreferrer">{{ t.matches.sofascore }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white" :aria-label="t.matches.upcoming">
      <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p class="text-sm font-semibold text-brand-orange">{{ t.matches.upcoming }}</p>
        <p class="mt-2 max-w-2xl text-sm text-slate-500">{{ t.matches.upcomingLead }}</p>
        <ul class="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          <li v-for="match in later" :key="match.kickoff" class="grid gap-3 py-4 sm:grid-cols-[13rem_5rem_minmax(0,1fr)] sm:items-center">
            <div>
              <p class="text-sm text-slate-500">{{ match.round[lang] }}</p>
              <p class="text-sm text-slate-700">{{ match.date[lang] }}</p>
              <p v-if="match.time" class="display text-2xl tabular-nums text-slate-900">{{ match.time }}</p>
            </div>
            <p class="text-sm font-semibold" :class="match.side === 'home' ? 'text-brand-orange' : 'text-slate-500'">
              {{ match.side === "home" ? t.matches.homeBadge : t.matches.awayBadge }}
            </p>
            <div class="min-w-0">
              <p class="text-base text-slate-900">
                <span :class="match.home === 'CS Bourscheid' ? 'font-semibold' : ''">{{ match.home }}</span>
                <span class="text-slate-400"> – </span>
                <span :class="match.away === 'CS Bourscheid' ? 'font-semibold' : ''">{{ match.away }}</span>
              </p>
              <p v-if="match.venue" class="mt-1 text-sm text-slate-500">{{ match.venue }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-slate-200" :aria-label="t.matches.seasonLabel">
      <div class="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <div class="border-b border-r border-slate-200 px-4 py-5 text-center lg:border-b-0">
          <span class="display block text-4xl normal-case text-brand-orange">{{ tableAfterFour.place[lang] }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.placeLabel }}</span>
        </div>
        <div class="border-b border-slate-200 px-4 py-5 text-center sm:border-r lg:border-b-0">
          <span class="display block text-4xl">{{ tableAfterFour.points }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.points }}</span>
        </div>
        <div class="border-b border-r border-slate-200 px-4 py-5 text-center lg:border-b-0">
          <span class="display block text-4xl">{{ season.wins }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.wins }}</span>
        </div>
        <div class="border-b border-slate-200 px-4 py-5 text-center sm:border-r lg:border-b-0">
          <span class="display block text-4xl">{{ season.draws }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.draws }}</span>
        </div>
        <div class="border-r border-slate-200 px-4 py-5 text-center">
          <span class="display block text-4xl">{{ season.losses }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.losses }}</span>
        </div>
        <div class="px-4 py-5 text-center">
          <span class="display block text-4xl tabular-nums">{{ season.goalsFor }}<span class="text-slate-300">:</span>{{ season.goalsAgainst }}</span>
          <span class="text-sm text-slate-500">{{ t.matches.goals }}</span>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <article class="lg:col-span-3">
          <div class="flex items-end justify-between gap-4 border-b-2 border-slate-200 pb-3">
            <div>
              <p class="text-sm text-brand-orange">{{ t.matches.seasonLabel }}</p>
              <h2 class="mt-1 text-4xl">{{ t.matches.results }}</h2>
            </div>
            <div class="flex gap-1.5" :aria-label="t.matches.form">
              <span
                v-for="match in results"
                :key="match.date.FR"
                class="flex h-7 w-7 items-center justify-center text-xs"
                :class="markClass(match.mark)"
              >{{ markLabel(match.mark) }}</span>
            </div>
          </div>
          <ul>
            <li v-for="match in results" :key="match.date.FR" class="flex flex-col gap-3 border-b border-slate-200 py-4 sm:flex-row sm:items-center">
              <div class="flex items-center justify-between sm:w-40 sm:shrink-0">
                <span class="text-sm text-slate-500">{{ match.date[lang] }}</span>
                <span class="flex h-7 w-7 items-center justify-center text-xs sm:hidden" :class="markClass(match.mark)">{{ markLabel(match.mark) }}</span>
              </div>
              <div class="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-3">
                <p class="min-w-0 break-words text-right text-base leading-tight" :class="match.home === 'CS Bourscheid' ? 'font-semibold' : 'text-slate-500'">{{ match.home }}</p>
                <p class="display px-2 py-1.5 text-center text-base tabular-nums text-brand-orange">{{ match.score }}</p>
                <p class="min-w-0 break-words text-base leading-tight" :class="match.away === 'CS Bourscheid' ? 'font-semibold' : 'text-slate-500'">{{ match.away }}</p>
              </div>
              <span class="hidden h-7 w-7 shrink-0 items-center justify-center text-xs sm:flex" :class="markClass(match.mark)">{{ markLabel(match.mark) }}</span>
            </li>
          </ul>
          <p class="border-t border-slate-200 py-4 text-sm leading-relaxed text-slate-500">{{ t.matches.source }}</p>
        </article>

        <article class="lg:col-span-2">
          <div class="border-b-2 border-slate-200 pb-3">
            <p class="text-sm text-brand-orange">{{ t.matches.seasonLabel }}</p>
            <h2 class="mt-1 text-4xl">{{ t.matches.table }}</h2>
            <p class="mt-3 text-base leading-relaxed">{{ standing }}</p>
          </div>
          <table class="w-full text-left text-base">
            <thead class="bg-[#12151c] text-sm text-white">
              <tr>
                <th class="py-3 font-normal">#</th>
                <th class="px-2 py-3 font-normal">{{ t.nav.club }}</th>
                <th class="px-2 py-3 text-center font-normal">{{ t.matches.played }}</th>
                <th class="py-3 text-right font-normal">{{ t.matches.points }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in tableAfterFour.around"
                :key="row.place.FR"
                class="border-t border-slate-200"
                :class="row.team === 'CS Bourscheid' ? 'bg-red-50 font-semibold text-slate-900' : 'text-slate-600'"
              >
                <td class="py-3 pl-2 tabular-nums">{{ row.place[lang] }}</td>
                <td class="px-2 py-3">{{ row.team }}</td>
                <td class="px-2 py-3 text-center tabular-nums">{{ row.played }}</td>
                <td class="display py-3 pr-2 text-right text-xl tabular-nums">{{ row.points }}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <div class="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div class="flex flex-col items-start justify-between gap-5 rounded-2xl bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <h2 class="text-2xl text-slate-900">{{ t.matches.come }}</h2>
            <p class="mt-2 text-sm text-slate-600">{{ t.matches.comeText }}</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="rounded-full bg-brand-orange px-5 py-2.5 text-sm text-white hover:bg-brand-orangeHover">{{ t.common.practical }}</NuxtLink>
            <NuxtLink to="/palmares" class="rounded-full border border-slate-300 px-5 py-2.5 text-sm hover:border-brand-orange">{{ t.common.honours }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
