<script setup lang="ts">
const { t } = useClubLang()
const mapSrc = computed(() => `https://maps.google.com/maps?q=Kierfechtswee,+L-9171+Michelau,+Luxembourg&hl=${t.value.contact.mapLang}&z=16&output=embed`)

useHead(() => ({
  title: t.value.contact.seoTitle,
  meta: [{ name: "description", content: t.value.contact.seoDescription }]
}))
</script>

<template>
  <div>
    <PageHero :eyebrow="t.contact.eyebrow" :title="t.contact.title" :lead="t.contact.lead" />
    <section class="py-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <dl class="space-y-5 text-base">
          <div>
            <dt class="text-sm text-brand-orange">{{ t.contact.ground }}</dt>
            <dd class="mt-1">« In der Ae », Kierfechtswee, {{ t.common.michelau }}</dd>
          </div>
          <div>
            <dt class="text-sm text-brand-orange">{{ t.contact.seat }}</dt>
            <dd class="mt-1">Lisseneck 11, L-9377 Hoscheid</dd>
          </div>
          <div>
            <dt class="text-sm text-brand-orange">{{ t.contact.email }}</dt>
            <dd class="mt-1"><a href="mailto:csb@pt.lu" class="hover:text-brand-orange">csb@pt.lu</a></dd>
          </div>
          <div>
            <dt class="text-sm text-brand-orange">{{ t.contact.phone }}</dt>
            <dd class="mt-1">{{ t.contact.phoneLine }}</dd>
          </div>
          <div>
            <dt class="text-sm text-brand-orange">{{ t.contact.president }}</dt>
            <dd class="mt-1">Steve Heischbourg</dd>
          </div>
        </dl>
        <div class="h-80 min-h-80 overflow-hidden rounded-2xl border border-slate-200 lg:h-full">
          <iframe
            :title="t.contact.mapTitle"
            :src="mapSrc"
            class="h-full w-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </div>
</template>
