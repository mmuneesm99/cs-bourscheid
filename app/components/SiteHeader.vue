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
    return active ? "block px-3 py-3 rounded-md bg-slate-50 text-brand-orange" : "block px-3 py-3 rounded-md hover:bg-slate-50 hover:text-brand-orange"
  }
  return active ? "transition-colors text-brand-orange" : "transition-colors hover:text-brand-orange"
}
</script>

<template>
  <div class="bg-brand-dark text-white text-xs py-2 px-4 overflow-hidden border-b border-slate-800">
    <div class="max-w-7xl mx-auto flex justify-between items-center gap-4 min-w-0">
      <div class="flex min-w-0 flex-1 items-center gap-4 overflow-hidden">
        <span class="flex shrink-0 items-center gap-2 text-brand-orange font-bold uppercase tracking-wider">
          <AppIcon name="trophy" class="w-3.5 h-3.5" />
          <span class="hidden sm:inline">{{ t.chrome.division }}</span>
        </span>
        <NuxtLink to="/matchs" class="truncate text-slate-400 hover:text-white">
          {{ t.chrome.ticker }}
        </NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-4 text-slate-400">
        <button type="button" class="hover:text-white font-semibold" @click="toggle">{{ indicator }}</button>
        <span>•</span>
        <span class="flex items-center gap-1">
          <AppIcon name="map-pin" class="w-3.5 h-3.5" />
          {{ t.chrome.ground }}
        </span>
      </div>
    </div>
  </div>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 min-w-0">
        <img src="/images/logo.png" :alt="t.chrome.crest" class="w-12 h-12 shrink-0 object-contain" width="48" height="48">
        <div class="min-w-0">
          <span class="font-extrabold text-base sm:text-xl tracking-tight block text-slate-900 leading-none">CS BUURSCHENT</span>
          <span class="hidden sm:block text-[10px] text-slate-500 font-medium tracking-widest uppercase truncate">Cercle Sportif Bourscheid</span>
        </div>
      </NuxtLink>
      <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6 text-[11px] font-bold uppercase tracking-wide text-slate-700">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="linkClass(item.page, false)">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="flex shrink-0 items-center space-x-3 sm:space-x-4">
        <button type="button" class="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-brand-orange md:hidden" @click="toggle">{{ indicator }}</button>
        <NuxtLink to="/contact" class="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition-all shadow-md">
          {{ t.chrome.join }}
        </NuxtLink>
        <button
          type="button"
          class="lg:hidden shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-brand-orangeHover transition-colors"
          :aria-label="open ? t.chrome.closeMenu : t.chrome.openMenu"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <AppIcon name="menu" class="w-5 h-5" />
        </button>
      </div>
    </div>
    <nav
      id="mobile-nav"
      class="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1 text-xs font-bold uppercase tracking-wider text-slate-700"
      :class="open ? 'block' : 'hidden'"
    >
      <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" :class="linkClass(item.page, true)">
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
