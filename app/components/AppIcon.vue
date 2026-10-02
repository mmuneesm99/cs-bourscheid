<script setup lang="ts">
import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Shirt,
  Trophy,
  Users,
  Zap
} from "@lucide/vue"

const icons = {
  "arrow-right": ArrowRight,
  "chevron-right": ChevronRight,
  "check-circle-2": CircleCheck,
  "heart-handshake": HeartHandshake,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  phone: Phone,
  shield: Shield,
  shirt: Shirt,
  trophy: Trophy,
  users: Users,
  zap: Zap
}

const props = defineProps<{
  name: keyof typeof icons
}>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <component :is="icon" />
</template>
