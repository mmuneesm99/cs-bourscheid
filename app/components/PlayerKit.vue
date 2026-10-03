<script setup lang="ts">
defineProps<{
  name: string
  code: string
}>()

const failed = ref(false)
</script>

<template>
  <div class="relative h-full w-full overflow-hidden bg-[#12151c]">
    <img
      v-if="!failed"
      :src="`/images/players/${playerSlug(name)}.jpg`"
      :alt="name"
      class="absolute inset-0 h-full w-full object-cover object-top"
      @error="failed = true"
    >
    <svg v-else viewBox="0 0 200 230" class="mx-auto h-full w-auto" aria-hidden="true">
      <path fill="#1A1A1A" d="M38 48 L72 22 L100 42 L128 22 L162 48 L184 86 L156 98 V214 H44 V98 L16 86 Z" />
      <path fill="#D71920" d="M72 22 Q100 58 128 22 L116 40 Q100 58 84 40 Z" />
      <text x="100" y="150" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="28" font-weight="800">{{ code }}</text>
    </svg>
  </div>
</template>
