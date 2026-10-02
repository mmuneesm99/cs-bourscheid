<script setup lang="ts">
const { t } = useClubLang()
const mapSrc = computed(() => `https://maps.google.com/maps?q=Kierfechtswee,+L-9171+Michelau,+Luxembourg&hl=${t.value.contact.mapLang}&z=16&output=embed`)

useHead(() => ({
  title: t.value.contact.seoTitle,
  meta: [{ name: "description", content: t.value.contact.seoDescription }]
}))
</script>

<template>
  <div class="bg-slate-900 text-white">
    <section class="border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p class="text-xs font-bold uppercase tracking-widest text-brand-orange">{{ t.contact.eyebrow }}</p>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold uppercase">{{ t.contact.title }}</h1>
        <p class="mt-4 max-w-2xl text-slate-300">{{ t.contact.lead }}</p>
      </div>
    </section>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-4 text-sm">
          <p><strong class="block uppercase text-xs text-brand-orange">{{ t.contact.ground }}</strong> « In der Ae », Kierfechtswee, {{ t.common.michelau }}</p>
          <p><strong class="block uppercase text-xs text-brand-orange">{{ t.contact.seat }}</strong> Lisseneck 11, L-9377 Hoscheid</p>
          <p><strong class="block uppercase text-xs text-brand-orange">{{ t.contact.email }}</strong> <a href="mailto:csb@pt.lu" class="hover:text-brand-orange">csb@pt.lu</a></p>
          <p><strong class="block uppercase text-xs text-brand-orange">{{ t.contact.phone }}</strong> {{ t.contact.phoneLine }}</p>
          <p><strong class="block uppercase text-xs text-brand-orange">{{ t.contact.president }}</strong> Steve Heischbourg</p>
        </div>
        <div class="rounded-xl overflow-hidden border border-slate-700 h-80 lg:h-full min-h-80">
          <iframe
            :title="t.contact.mapTitle"
            :src="mapSrc"
            class="w-full h-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </div>
</template>
