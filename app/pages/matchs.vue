<script setup lang="ts">
import { fill } from "~/utils/copy"
import { clubOutcome } from "~/utils/matches"

const { t, lang } = useClubLang()

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
  if (mark === "W") return "bg-emerald-600 text-white"
  if (mark === "D") return "bg-slate-500 text-white"
  return "bg-brand-orange text-white"
}

useHead(() => ({
  title: t.value.matches.seoTitle,
  meta: [{ name: "description", content: t.value.matches.seoDescription }]
}))
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <img src="/images/pitch.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/88 to-slate-950" />
      <div class="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div class="text-center">
          <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.matches.next }}</p>
          <p class="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-300">{{ roundFive.competition[lang] }} · {{ roundFive.round[lang] }}</p>
        </div>

        <div class="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <div class="text-center md:text-right">
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl font-black md:ml-auto md:mr-0">
              SE
            </div>
            <h2 class="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">{{ roundFive.home }}</h2>
            <p class="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">{{ t.matches.homeBadge }}</p>
          </div>

          <div class="text-center">
            <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.matches.kickoff }}</p>
            <p class="mt-1 text-6xl font-black tabular-nums tracking-tight">{{ roundFive.time }}</p>
            <p class="mt-3 text-sm text-slate-300">{{ roundFive.date[lang] }}</p>
          </div>

          <div class="text-center md:text-left">
            <img src="/images/logo.png" alt="" class="mx-auto h-20 w-20 object-contain md:mx-0" width="80" height="80">
            <h2 class="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">{{ roundFive.away }}</h2>
            <p class="mt-1 text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.matches.awayBadge }}</p>
          </div>
        </div>

        <p class="mx-auto mt-8 max-w-xl px-2 text-center text-sm leading-relaxed text-slate-300">{{ t.matches.awayNote }}</p>
        <div class="mt-6 flex justify-center">
          <a :href="sofascoreTeam" class="inline-flex bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-orangeHover" target="_blank" rel="noopener noreferrer">{{ t.matches.sofascore }}</a>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white" :aria-label="t.matches.seasonLabel">
      <div class="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <div class="border-b border-r border-slate-100 px-4 py-5 text-center lg:border-b-0">
          <span class="block text-3xl font-black text-brand-orange">{{ tableAfterFour.place[lang] }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.placeLabel }}</span>
        </div>
        <div class="border-b border-slate-100 px-4 py-5 text-center sm:border-r lg:border-b-0">
          <span class="block text-3xl font-black">{{ tableAfterFour.points }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.points }}</span>
        </div>
        <div class="border-b border-r border-slate-100 px-4 py-5 text-center lg:border-b-0">
          <span class="block text-3xl font-black">{{ season.wins }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.wins }}</span>
        </div>
        <div class="border-b border-slate-100 px-4 py-5 text-center sm:border-r lg:border-b-0">
          <span class="block text-3xl font-black">{{ season.draws }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.draws }}</span>
        </div>
        <div class="border-r border-slate-100 px-4 py-5 text-center">
          <span class="block text-3xl font-black">{{ season.losses }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.losses }}</span>
        </div>
        <div class="px-4 py-5 text-center">
          <span class="block text-3xl font-black tabular-nums">{{ season.goalsFor }}<span class="text-slate-400">:</span>{{ season.goalsAgainst }}</span>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">{{ t.matches.goals }}</span>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-3">
          <div class="flex items-end justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.matches.seasonLabel }}</p>
              <h2 class="mt-1 text-2xl font-black uppercase">{{ t.matches.results }}</h2>
            </div>
            <div class="flex gap-1.5" :aria-label="t.matches.form">
              <span
                v-for="match in results"
                :key="match.date.FR"
                class="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black"
                :class="markClass(match.mark)"
              >{{ markLabel(match.mark) }}</span>
            </div>
          </div>
          <ul>
            <li v-for="match in results" :key="match.date.FR" class="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
              <div class="flex items-center justify-between sm:w-36 sm:shrink-0">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">{{ match.date[lang] }}</span>
                <span class="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black sm:hidden" :class="markClass(match.mark)">{{ markLabel(match.mark) }}</span>
              </div>
              <div class="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-3">
                <p class="min-w-0 break-words text-right text-sm font-bold leading-tight" :class="match.home === 'CS Bourscheid' ? 'text-slate-950' : 'font-semibold text-slate-600'">{{ match.home }}</p>
                <p class="bg-slate-950 px-2 py-1.5 text-center text-sm font-black tabular-nums tracking-wide text-white">{{ match.score }}</p>
                <p class="min-w-0 break-words text-sm font-bold leading-tight" :class="match.away === 'CS Bourscheid' ? 'text-slate-950' : 'font-semibold text-slate-600'">{{ match.away }}</p>
              </div>
              <span class="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black sm:flex" :class="markClass(match.mark)">{{ markLabel(match.mark) }}</span>
            </li>
          </ul>
          <p class="border-t border-slate-100 px-5 py-4 text-xs leading-relaxed text-slate-500 sm:px-6">{{ t.matches.source }}</p>
        </article>

        <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
          <div class="border-b border-slate-100 px-5 py-5 sm:px-6">
            <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.matches.seasonLabel }}</p>
            <h2 class="mt-1 text-2xl font-black uppercase">{{ t.matches.table }}</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ standing }}</p>
          </div>
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
              <tr>
                <th class="px-5 py-3 font-bold">#</th>
                <th class="px-2 py-3 font-bold">{{ t.nav.club }}</th>
                <th class="px-2 py-3 text-center font-bold">{{ t.matches.played }}</th>
                <th class="px-5 py-3 text-right font-bold">{{ t.matches.points }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in tableAfterFour.around"
                :key="row.place.FR"
                class="border-t border-slate-100"
                :class="row.team === 'CS Bourscheid' ? 'bg-brand-orange/10 font-bold text-slate-950' : 'text-slate-600'"
              >
                <td class="px-5 py-3.5 tabular-nums" :class="row.team === 'CS Bourscheid' ? 'text-brand-orange' : ''">{{ row.place[lang] }}</td>
                <td class="px-2 py-3.5">{{ row.team }}</td>
                <td class="px-2 py-3.5 text-center tabular-nums">{{ row.played }}</td>
                <td class="px-5 py-3.5 text-right text-base font-black tabular-nums">{{ row.points }}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-start justify-between gap-5 rounded-2xl bg-slate-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 class="font-black uppercase tracking-tight">{{ t.matches.come }}</h2>
            <p class="mt-1 text-sm text-slate-300">{{ t.matches.comeText }}</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="bg-brand-orange px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-orangeHover">{{ t.common.practical }}</NuxtLink>
            <NuxtLink to="/palmares" class="border border-white/20 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider hover:border-brand-orange">{{ t.common.honours }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
