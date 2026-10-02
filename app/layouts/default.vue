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
  <div class="bg-brand-grayBg text-slate-800 antialiased selection:bg-brand-orange selection:text-white overflow-x-hidden min-h-screen">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>
