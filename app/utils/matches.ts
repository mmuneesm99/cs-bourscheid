export const sofascoreTeam = "https://www.sofascore.com/football/team/cs-bourscheid/304954"

export const tableAfterFour = {
  place: { FR: "4e", LB: "4." },
  played: 4,
  points: 10,
  around: [
    { place: { FR: "3e", LB: "3." }, team: "Orania Vianden", played: 4, points: 12 },
    { place: { FR: "4e", LB: "4." }, team: "CS Bourscheid", played: 4, points: 10 },
    { place: { FR: "5e", LB: "5." }, team: "Biekerech", played: 4, points: 9 }
  ]
}

export const roundFive = {
  round: { FR: "5e journée", LB: "5. Spilldag" },
  competition: { FR: "2. Division · 1. Bezirk", LB: "2. Divisioun · 1. Bezierk" },
  date: { FR: "Dimanche 4 octobre 2026", LB: "Sonndeg 4. Oktober 2026" },
  time: "16:00",
  home: "SC Ell",
  away: "CS Bourscheid"
}

export function scoreParts(score: string) {
  const [home, away] = score.split("-").map((part) => Number(part.trim()))
  return { home, away }
}

export function clubOutcome(match: { home: string; away: string; score: string }) {
  const { home, away } = scoreParts(match.score)
  const atHome = match.home === "CS Bourscheid"
  const ours = atHome ? home : away
  const theirs = atHome ? away : home
  const mark = ours > theirs ? "W" : ours < theirs ? "L" : "D"
  return { ours, theirs, mark, side: atHome ? "home" as const : "away" as const }
}

export const leagueResults = [
  { date: { FR: "23 août 2026", LB: "23. August 2026" }, home: "Kiischpelt Wilwerwiltz", away: "CS Bourscheid", score: "3 - 5" },
  { date: { FR: "30 août 2026", LB: "30. August 2026" }, home: "FC Pratzerthal/Redange", away: "CS Bourscheid", score: "2 - 2" },
  { date: { FR: "13 septembre 2026", LB: "13. September 2026" }, home: "AS Wincrange", away: "CS Bourscheid", score: "3 - 5" },
  { date: { FR: "27 septembre 2026", LB: "27. September 2026" }, home: "CS Bourscheid", away: "US Reisdorf", score: "2 - 1" }
]
