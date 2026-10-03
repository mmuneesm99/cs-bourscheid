<script setup lang="ts">
const { lang } = useClubLang()

onMounted(() => {
  const saved = localStorage.getItem("csb-lang")
  if (saved === "FR" || saved === "LB") lang.value = saved
})

watch(lang, (value) => {
  if (import.meta.client) localStorage.setItem("csb-lang", value)
})

useHead(() => ({
  htmlAttrs: { lang: lang.value === "FR" ? "fr" : "lb" }
}))
</script>

<template>
  <div class="min-h-screen w-full max-w-[100vw] overflow-x-clip bg-[#eef1f6] text-[#1c2128] antialiased selection:bg-brand-orange selection:text-white">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>
