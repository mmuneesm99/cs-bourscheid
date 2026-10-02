import { copy, type Lang } from "~/utils/copy"

export function useClubLang() {
  const lang = useState<Lang>("club-lang", () => "FR")
  const t = computed(() => copy[lang.value])

  const nav = computed(() => {
    const labels = t.value.nav
    return [
      { to: "/", page: "accueil", label: labels.home },
      { to: "/club", page: "club", label: labels.club },
      { to: "/histoire", page: "histoire", label: labels.history },
      { to: "/matchs", page: "matchs", label: labels.matches },
      { to: "/equipe", page: "equipe", label: labels.squad },
      { to: "/palmares", page: "palmares", label: labels.honours },
      { to: "/contact", page: "contact", label: labels.contact }
    ]
  })

  function toggle() {
    lang.value = lang.value === "FR" ? "LB" : "FR"
  }

  const indicator = computed(() => (lang.value === "FR" ? "FR / LB" : "LB / FR"))

  return { lang, t, nav, toggle, indicator }
}
