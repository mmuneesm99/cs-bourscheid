export function useFixtures() {
  const clock = useState("fixture-clock", () => new Date().toISOString())

  onMounted(() => {
    clock.value = new Date().toISOString()
  })

  const remaining = computed(() => remainingFixtures(new Date(clock.value)))
  const next = computed(() => remaining.value[0] ?? null)
  const following = computed(() => remaining.value.slice(1, 3))
  const later = computed(() => remaining.value.slice(1))

  return { next, following, later }
}
