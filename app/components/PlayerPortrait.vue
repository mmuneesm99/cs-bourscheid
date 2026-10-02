<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const failed = ref(false)
const initials = computed(() => playerInitials(props.name))
</script>

<template>
  <span class="relative inline-flex w-10 h-10 rounded-full overflow-hidden bg-slate-900 text-white text-[10px] font-bold items-center justify-center">
    <span>{{ initials }}</span>
    <img
      v-if="!failed"
      :src="`/images/players/${playerSlug(name)}.jpg`"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
      @error="failed = true"
    >
  </span>
</template>
