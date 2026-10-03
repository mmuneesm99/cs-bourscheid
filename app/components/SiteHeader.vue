<script setup lang="ts">
const { nav, toggle, indicator, t } = useClubLang()
const route = useRoute()
const open = ref(false)

watch(() => route.path, () => {
  open.value = false
})

function linkClass(page: string, mobile: boolean) {
  const active = route.path === (page === "accueil" ? "/" : `/${page}`)
  if (mobile) {
    return active
      ? "text-3xl uppercase text-brand-orange"
      : "text-3xl uppercase text-white hover:text-brand-orange"
  }
  return active
    ? "text-brand-orange"
    : "text-slate-600 hover:text-brand-orange"
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full max-w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
    <div class="bg-slate-900 text-sm text-slate-300">
      <div class="mx-auto flex w-full min-w-0 max-w-6xl items-center gap-4 px-4 py-2 sm:px-6">
        <span class="hidden shrink-0 font-medium text-brand-orange sm:inline">{{ t.chrome.division }}</span>
        <NuxtLink to="/matchs" class="min-w-0 flex-1 truncate hover:text-white">{{ t.chrome.ticker }}</NuxtLink>
        <span class="hidden shrink-0 sm:inline">{{ t.chrome.ground }}</span>
      </div>
    </div>
    <div class="mx-auto flex w-full min-w-0 max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <NuxtLink to="/" class="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
        <img src="/images/logo.png" :alt="t.chrome.crest" class="h-11 w-11 shrink-0 object-contain" width="44" height="44">
          <span class="hidden min-w-0 sm:block">
            <span class="display block truncate text-lg leading-none text-slate-900">CS Buurschent</span>
            <span class="mt-0.5 hidden truncate text-xs text-slate-500 md:block">Cercle Sportif Bourscheid</span>
          </span>
      </NuxtLink>
      <nav class="ml-auto hidden items-center gap-5 text-sm lg:flex">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="linkClass(item.page, false)">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="ml-auto flex shrink-0 items-center gap-3 lg:ml-4">
        <button type="button" class="text-sm text-slate-600 hover:text-brand-orange" @click="toggle">{{ indicator }}</button>
        <NuxtLink to="/contact" class="hidden rounded-full bg-brand-orange px-4 py-2 text-sm text-white hover:bg-brand-orangeHover sm:inline-flex">{{ t.chrome.join }}</NuxtLink>
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white lg:hidden"
          :aria-label="open ? t.chrome.closeMenu : t.chrome.openMenu"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <AppIcon name="menu" class="h-5 w-5" />
        </button>
      </div>
    </div>
    <div
      v-if="open"
      id="mobile-nav"
      class="fixed inset-0 z-[60] flex flex-col bg-[#12151c] px-6 py-6 text-white lg:hidden"
    >
      <div class="flex items-center justify-between">
        <img src="/images/logo.png" alt="" class="h-12 w-12 object-contain" width="48" height="48">
        <button type="button" class="text-3xl leading-none" :aria-label="t.chrome.closeMenu" @click="open = false">×</button>
      </div>
      <nav class="mt-16 flex flex-col gap-5">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="linkClass(item.page, true)">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <a href="mailto:csb@pt.lu" class="mt-auto text-sm text-white/70">csb@pt.lu</a>
    </div>
  </header>
</template>
