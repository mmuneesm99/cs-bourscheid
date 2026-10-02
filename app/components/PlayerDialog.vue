<script setup lang="ts">
import { playerProfile, playerSlug } from "~/utils/squad"

const props = defineProps<{
  name: string | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useClubLang()
const closeButton = ref<HTMLButtonElement | null>(null)
const player = computed(() => (props.name ? playerProfile(props.name) : null))
const arrival = computed(() => {
  const index = player.value?.arrivalIndex ?? -1
  return index >= 0 ? t.value.squad.arrivalDetails[index] : ""
})

function close() {
  emit("close")
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") close()
}

watch(player, (current) => {
  if (!import.meta.client) return
  document.body.style.overflow = current ? "hidden" : ""
  if (current) nextTick(() => closeButton.value?.focus())
})

onMounted(() => window.addEventListener("keydown", onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown)
  document.body.style.overflow = ""
})
</script>

<template>
  <Teleport to="body">
    <div v-if="player" class="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button type="button" class="absolute inset-0 bg-slate-950/75" :aria-label="t.squad.close" @click="close" />
      <div
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`player-${playerSlug(player.name)}`"
        class="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <PlayerKit :name="player.name" :code="player.code" />
        <button
          ref="closeButton"
          type="button"
          class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-lg leading-none text-white hover:bg-brand-orange"
          @click="close"
        >
          <span class="sr-only">{{ t.squad.close }}</span>
          <span aria-hidden="true">×</span>
        </button>
        <div class="px-6 pb-6 pt-5">
          <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ t.roles[player.role] }}</p>
          <h2 :id="`player-${playerSlug(player.name)}`" class="mt-1 text-2xl font-black uppercase tracking-tight text-slate-950">{{ player.name }}</h2>
          <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">CS Bourscheid · {{ t.squad.eyebrow }}</p>
          <dl class="mt-5 divide-y divide-slate-100 border-y border-slate-100 text-sm">
            <div class="flex items-start justify-between gap-4 py-3">
              <dt class="font-bold uppercase tracking-wider text-[11px] text-slate-400">{{ t.squad.birth }}</dt>
              <dd class="text-right font-semibold text-slate-900">{{ player.born }}</dd>
            </div>
            <div class="flex items-start justify-between gap-4 py-3">
              <dt class="font-bold uppercase tracking-wider text-[11px] text-slate-400">{{ t.squad.nationality }}</dt>
              <dd class="text-right font-semibold text-slate-900">{{ t.nations[player.nationality] }}</dd>
            </div>
            <div v-if="arrival" class="flex items-start justify-between gap-4 py-3">
              <dt class="font-bold uppercase tracking-wider text-[11px] text-slate-400">{{ t.squad.arrivalsTitle }}</dt>
              <dd class="max-w-[16rem] text-right font-semibold text-slate-900">{{ arrival }}</dd>
            </div>
          </dl>
          <p class="mt-4 text-xs text-slate-500">{{ t.squad.numberNote }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>
