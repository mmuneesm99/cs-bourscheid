<script setup lang="ts">
const { t } = useClubLang()
const selectedPlayer = ref<string | null>(null)
useHead(() => ({
  title: t.value.squad.seoTitle,
  meta: [{ name: "description", content: t.value.squad.seoDescription }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t.squad.eyebrow" :title="t.squad.title" :lead="t.squad.lead" />
    <section class="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <img src="/images/team.jpg" :alt="t.common.firstTeam" class="w-full rounded-2xl object-cover">
    </section>
    <section class="py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="mb-10 grid grid-cols-2 overflow-hidden rounded-2xl bg-white text-center shadow-sm lg:grid-cols-4">
          <div class="border-r border-slate-100 p-5"><span class="display block text-3xl text-slate-900">22</span><span class="text-xs text-slate-500">{{ t.squad.players }}</span></div>
          <div class="p-5 lg:border-r lg:border-slate-100"><span class="display block text-3xl text-slate-900">32,6</span><span class="text-xs text-slate-500">{{ t.squad.average }}</span></div>
          <div class="border-r border-t border-slate-100 p-5 lg:border-t-0"><span class="display block text-3xl text-brand-orange">11</span><span class="text-xs text-slate-500">{{ t.squad.foreigners }}</span></div>
          <div class="border-t border-slate-100 p-5 lg:border-t-0"><span class="display block text-3xl text-slate-900">0</span><span class="text-xs text-slate-500">{{ t.squad.internationals }}</span></div>
        </div>
        <h2 class="mb-4 text-2xl text-slate-900">{{ t.squad.arrivalsTitle }}</h2>
        <ul class="mb-10 divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white shadow-sm">
          <li v-for="(arrival, index) in arrivals" :key="arrival.name">
            <button type="button" class="w-full px-4 py-3 text-left text-sm hover:text-brand-orange" @click="selectedPlayer = arrival.name">
              <strong class="font-semibold">{{ arrival.name }}</strong> · {{ t.squad.arrivalDetails[index] }}
            </button>
          </li>
        </ul>
        <div class="space-y-10">
          <section v-for="group in squad" :key="group.title">
            <h2 class="mb-3 text-xl text-slate-900">{{ t.groups[group.title] }}</h2>
            <div class="overflow-x-auto rounded-2xl bg-white shadow-sm">
              <table class="w-full text-left text-sm">
                <thead class="text-xs text-slate-500">
                  <tr>
                    <th class="px-2 py-3 font-normal">{{ t.squad.photo }}</th>
                    <th class="px-4 py-3 font-normal">{{ t.squad.player }}</th>
                    <th class="px-4 py-3 font-normal">{{ t.squad.birth }}</th>
                    <th class="px-4 py-3 font-normal">{{ t.squad.nationality }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="player in group.rows"
                    :key="player.name"
                    class="cursor-pointer border-t border-slate-100 hover:bg-slate-50"
                    @click="selectedPlayer = player.name"
                  >
                    <td class="px-2 py-3"><PlayerPortrait :name="player.name" /></td>
                    <td class="px-4 py-3 font-semibold">
                      <button type="button" class="text-left hover:text-brand-orange" @click.stop="selectedPlayer = player.name">{{ player.name }}</button>
                    </td>
                    <td class="px-4 py-3 text-slate-500">{{ player.born }}</td>
                    <td class="px-4 py-3 text-slate-500">{{ t.nations[player.nationality] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <p class="mt-8 text-sm text-slate-500">
          <a class="text-brand-orange" href="https://www.transfermarkt.com/cs-bourscheid/startseite/verein/33339" target="_blank" rel="noopener noreferrer">Transfermarkt — CS Bourscheid</a>. {{ t.squad.source }}
        </p>
        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article class="rounded-2xl bg-white p-6 shadow-sm">
            <h2 class="text-2xl text-slate-900">{{ t.squad.staff }}</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ t.squad.staffText }}</p>
          </article>
          <article class="rounded-2xl bg-white p-6 shadow-sm">
            <h2 class="text-2xl text-slate-900">{{ t.squad.reserves }}</h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ t.squad.reservesText }}</p>
          </article>
        </div>
      </div>
    </section>
    <PlayerDialog :name="selectedPlayer" @close="selectedPlayer = null" />
  </div>
</template>
