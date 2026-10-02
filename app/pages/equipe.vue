<script setup lang="ts">
const { t } = useClubLang()
const selectedPlayer = ref<string | null>(null)
useHead(() => ({
  title: t.value.squad.seoTitle,
  meta: [{ name: "description", content: t.value.squad.seoDescription }]
}))
</script>

<template>
  <div class="bg-white">
    <PageHero :eyebrow="t.squad.eyebrow" :title="t.squad.title" :lead="t.squad.lead" />
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
          <div class="border border-slate-200 rounded-xl p-5"><span class="block text-3xl font-black">22</span><span class="text-[11px] font-bold uppercase text-slate-500">{{ t.squad.players }}</span></div>
          <div class="border border-slate-200 rounded-xl p-5"><span class="block text-3xl font-black">32,6</span><span class="text-[11px] font-bold uppercase text-slate-500">{{ t.squad.average }}</span></div>
          <div class="border border-slate-200 rounded-xl p-5"><span class="block text-3xl font-black text-brand-orange">11</span><span class="text-[11px] font-bold uppercase text-slate-500">{{ t.squad.foreigners }}</span></div>
          <div class="border border-slate-200 rounded-xl p-5"><span class="block text-3xl font-black">0</span><span class="text-[11px] font-bold uppercase text-slate-500">{{ t.squad.internationals }}</span></div>
        </div>
        <h2 class="font-extrabold uppercase text-lg mb-4">{{ t.squad.arrivalsTitle }}</h2>
        <ul class="mb-10 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-slate-50">
          <li v-for="(arrival, index) in arrivals" :key="arrival.name">
            <button type="button" class="w-full px-5 py-3 text-left text-sm hover:bg-white" @click="selectedPlayer = arrival.name">
              <strong>{{ arrival.name }}</strong> · {{ t.squad.arrivalDetails[index] }}
            </button>
          </li>
        </ul>
        <div class="space-y-8">
          <section v-for="group in squad" :key="group.title">
            <h2 class="font-extrabold uppercase text-sm text-brand-orange mb-3">{{ t.groups[group.title] }}</h2>
            <div class="overflow-x-auto border border-slate-200 rounded-xl">
              <table class="w-full text-sm text-left">
                <thead class="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
                  <tr>
                    <th class="px-4 py-3 font-bold">{{ t.squad.photo }}</th>
                    <th class="px-4 py-3 font-bold">{{ t.squad.player }}</th>
                    <th class="px-4 py-3 font-bold">{{ t.squad.birth }}</th>
                    <th class="px-4 py-3 font-bold">{{ t.squad.nationality }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="player in group.rows"
                    :key="player.name"
                    class="cursor-pointer border-t border-slate-100 hover:bg-slate-50"
                    @click="selectedPlayer = player.name"
                  >
                    <td class="px-4 py-3"><PlayerPortrait :name="player.name" /></td>
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
        <p class="mt-8 text-xs text-slate-500">
          <a class="text-brand-orange font-bold" href="https://www.transfermarkt.com/cs-bourscheid/startseite/verein/33339" target="_blank" rel="noopener noreferrer">Transfermarkt — CS Bourscheid</a>. {{ t.squad.source }}
        </p>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <h2 class="font-extrabold uppercase">{{ t.squad.staff }}</h2>
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">{{ t.squad.staffText }}</p>
          </article>
          <article class="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <h2 class="font-extrabold uppercase">{{ t.squad.reserves }}</h2>
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">{{ t.squad.reservesText }}</p>
          </article>
        </div>
      </div>
    </section>
    <PlayerDialog :name="selectedPlayer" @close="selectedPlayer = null" />
  </div>
</template>
