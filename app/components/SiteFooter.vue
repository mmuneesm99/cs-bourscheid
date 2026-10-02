<script setup lang="ts">
const { t } = useClubLang()
</script>

<template>
  <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/images/logo.png" alt="" class="w-10 h-10 shrink-0 object-contain" width="40" height="40">
        <div>
          <p class="font-bold text-white uppercase">Cercle Sportif Bourscheid</p>
          <p class="text-[10px] text-slate-500">{{ t.chrome.founded }}</p>
        </div>
      </NuxtLink>
      <div class="flex flex-wrap justify-center gap-x-5 gap-y-2 uppercase tracking-wider font-bold">
        <NuxtLink to="/histoire" class="hover:text-white">{{ t.nav.history }}</NuxtLink>
        <NuxtLink to="/matchs" class="hover:text-white">{{ t.nav.matches }}</NuxtLink>
        <NuxtLink to="/equipe" class="hover:text-white">{{ t.nav.squad }}</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-white">{{ t.nav.contact }}</NuxtLink>
        <a href="https://www.facebook.com/CSBourscheid/" class="hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      <p class="text-center sm:text-right">{{ t.chrome.rights }}<br>Lisseneck 11, L-9377 Hoscheid</p>
    </div>
  </footer>
</template>
