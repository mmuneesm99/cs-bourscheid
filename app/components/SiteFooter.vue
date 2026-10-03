<script setup lang="ts">
const { t } = useClubLang()
</script>

<template>
  <footer class="bg-[#12151c] text-slate-300">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <img src="/images/logo.png" alt="" class="h-14 w-14 object-contain" width="56" height="56">
        <p class="display mt-4 text-2xl text-white">CS Buurschent</p>
        <p class="mt-2 text-sm text-slate-400">{{ t.chrome.founded }}</p>
      </div>
      <nav class="flex flex-col gap-2 text-sm">
        <NuxtLink to="/histoire" class="hover:text-white">{{ t.nav.history }}</NuxtLink>
        <NuxtLink to="/matchs" class="hover:text-white">{{ t.nav.matches }}</NuxtLink>
        <NuxtLink to="/equipe" class="hover:text-white">{{ t.nav.squad }}</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-white">{{ t.nav.contact }}</NuxtLink>
        <a href="https://www.facebook.com/CSBourscheid/" class="hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
      </nav>
      <p class="text-sm leading-relaxed text-slate-400">
        {{ t.chrome.rights }}<br>
        Lisseneck 11<br>
        L-9377 Hoscheid
      </p>
    </div>
  </footer>
</template>
