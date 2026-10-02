<script setup lang="ts">
defineProps<{
  name: string
  code: string
}>()

const failed = ref(false)
const loaded = ref(false)
</script>

<template>
  <div class="h-64 relative bg-gradient-to-b from-brand-greenLight to-slate-950 flex items-end justify-center overflow-hidden">
    <img
      v-if="!failed"
      :src="`/images/players/${playerSlug(name)}.jpg`"
      :alt="name"
      class="absolute inset-0 w-full h-full object-cover"
      @load="loaded = true"
      @error="failed = true"
    >
    <div
      v-if="!loaded"
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(215,25,32,0.35),transparent_55%)]"
    />
    <svg v-if="!loaded" viewBox="0 0 200 230" class="relative h-56 w-auto" aria-hidden="true">
      <path fill="#1A1A1A" d="M38 48 L72 22 L100 42 L128 22 L162 48 L184 86 L156 98 V214 H44 V98 L16 86 Z" />
      <path fill="#D71920" d="M72 22 Q100 58 128 22 L116 40 Q100 58 84 40 Z" />
      <path fill="#2A2A2A" d="M44 98 H156 V118 H44 Z" />
      <text x="100" y="160" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="28" font-weight="800">{{ code }}</text>
    </svg>
  </div>
</template>
