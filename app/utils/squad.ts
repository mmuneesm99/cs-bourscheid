export type Player = {
  name: string
  born: string
  nationality: string
}

export type SquadGroup = {
  title: string
  rows: Player[]
}

export function playerSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function playerInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

export const squad: SquadGroup[] = [
  {
    title: "Gardiens",
    rows: [
      { name: "Jeff Bierchen", born: "23/05/1995", nationality: "Luxembourg" },
      { name: "Dirk Devillet", born: "10/05/1992", nationality: "Luxembourg" }
    ]
  },
  {
    title: "Défenseurs",
    rows: [
      { name: "Michel Delgado Morais", born: "17/04/1995", nationality: "Cap-Vert" },
      { name: "Jeremy de Brito Ferreira", born: "03/11/1999", nationality: "Luxembourg" },
      { name: "Carlos Carvalho", born: "21/04/1979", nationality: "Cap-Vert / Portugal" }
    ]
  },
  {
    title: "Milieux",
    rows: [
      { name: "Ediclei da Silva Pantoja", born: "31/08/1985", nationality: "Brésil" },
      { name: "Kenan Destanovic", born: "21/06/1996", nationality: "Serbie" },
      { name: "Helder Santos", born: "23/11/1994", nationality: "Cap-Vert" },
      { name: "Jamie Schank", born: "03/07/2000", nationality: "Luxembourg" },
      { name: "Luis Carlos Teixeira Rodrigues", born: "20/07/1994", nationality: "Luxembourg" },
      { name: "Christophe Tavares", born: "06/12/1997", nationality: "Luxembourg" },
      { name: "Danny Heischbourg", born: "29/12/1999", nationality: "Luxembourg" },
      { name: "Sam Schepers", born: "24/11/1998", nationality: "Luxembourg" },
      { name: "Filipe Muendo", born: "17/03/1988", nationality: "Portugal" },
      { name: "Rabah Bendaoud", born: "13/11/1995", nationality: "France" },
      { name: "Gonçalo Rodrigues Silvano", born: "16/06/2001", nationality: "Portugal" }
    ]
  },
  {
    title: "Attaquants",
    rows: [
      { name: "Nivaldo Mendes", born: "14/03/1988", nationality: "Portugal / Guinée-Bissau" },
      { name: "Elcelino Medina", born: "30/03/1983", nationality: "Portugal" },
      { name: "Hugo Fernandes", born: "01/01/1991", nationality: "Portugal / Cap-Vert" },
      { name: "Sam Moreira", born: "17/01/1991", nationality: "Luxembourg" },
      { name: "Dany Dinis Rego", born: "20/04/2000", nationality: "Luxembourg / Portugal" },
      { name: "Lewin da Graca", born: "14/06/2000", nationality: "Luxembourg / Cap-Vert" }
    ]
  }
]

export const positionByGroup: Record<string, { role: string; code: string }> = {
  Gardiens: { role: "Gardien", code: "GB" },
  Défenseurs: { role: "Défenseur", code: "DEF" },
  Milieux: { role: "Milieu", code: "MIL" },
  Attaquants: { role: "Attaquant", code: "ATT" }
}

export function playerProfile(name: string) {
  for (const group of squad) {
    const row = group.rows.find((player) => player.name === name)
    if (!row) continue
    const position = positionByGroup[group.title]
    return {
      ...row,
      role: position.role,
      code: position.code,
      arrivalIndex: arrivals.findIndex((item) => item.name === name)
    }
  }
  return null
}

export const arrivals = [
  { name: "Ediclei da Silva Pantoja", detail: "Milieu · en provenance de l'AS Wincrange · libre" },
  { name: "Nivaldo Mendes", detail: "Ailier droit · en provenance de l'AS Wincrange · libre" },
  { name: "Helder Santos", detail: "Milieu · en provenance de l'AS Colmar-Berg · libre" },
  { name: "Dany Dinis Rego", detail: "Attaquant · en provenance du FCM Young Boys Diekirch · libre" },
  { name: "Lewin da Graca", detail: "Attaquant · en provenance des Red Boys Aspelt · libre" }
]

export const highlights = [
  { name: "Jeff Bierchen", role: "Gardien", code: "GB", born: "23/05/1995", nation: "Luxembourg" },
  { name: "Jeremy de Brito Ferreira", role: "Défenseur", code: "DEF", born: "03/11/1999", nation: "Luxembourg" },
  { name: "Jamie Schank", role: "Milieu", code: "MIL", born: "03/07/2000", nation: "Luxembourg" },
  { name: "Sam Moreira", role: "Attaquant", code: "ATT", born: "17/01/1991", nation: "Luxembourg" }
]
