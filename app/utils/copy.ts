export type Lang = "FR" | "LB"

export type Copy = {
  nav: { home: string; club: string; history: string; matches: string; squad: string; honours: string; contact: string }
  chrome: {
    division: string
    ticker: string
    ground: string
    join: string
    founded: string
    rights: string
    openMenu: string
    closeMenu: string
    crest: string
  }
  common: {
    seat: string
    ground: string
    president: string
    phone: string
    groundPhone: string
    committee: string
    firstTeam: string
    reserves: string
    volunteers: string
    seeSquad: string
    homeMatches: string
    practical: string
    honours: string
    contactUs: string
    born: string
    michelau: string
  }
  nations: Record<string, string>
  roles: Record<string, string>
  groups: Record<string, string>
  home: {
    seoTitle: string
    seoDescription: string
    heroBadge: string
    heroLead: string
    heroMatches: string
    heroHistory: string
    bannerTitle: string
    bannerText: string
    aboutKicker: string
    aboutTitle: string
    aboutP1: string
    aboutP2: string
    aboutCta: string
    pitchAlt: string
    mainGround: string
    groundLine: string
    foundedLabel: string
    closedSeason: string
    closedText: string
    seeHonours: string
    statsLabel: string
    seniors: string
    goals: string
    champion: string
    rank: string
    historyKicker: string
    historyTitle: string
    historyLead: string
    service: string
    glory: string
    gloryText: string
    seeSquad: string
    competition: string
    legacyTitle: string
    matchAlt: string
    squadBadge: string
    squadTitle: string
    squadText: string
    seeRoster: string
    trainAlt: string
    market: string
    arrivalsTitle: string
    arrivalsText: string
    seeArrivals: string
    saveAlt: string
    roundBadge: string
    roundText: string
    matchInfo: string
    season: string
    playersStaff: string
    rosterLead: string
    firstTeam: string
    honoursKicker: string
    excellence: string
    excellenceText: string
    titleD3: string
    titleSeries: string
    duelAlt: string
    spirit: string
    historic: string
    lifeKicker: string
    lifeTitle: string
    lifeLead: string
    firstText: string
    reserveText: string
    volunteerText: string
    location: string
    motivation: string
    locationText: string
    mainStadium: string
    stadiumLine: string
    officialEmail: string
    federation: string
    federationName: string
    mapTitle: string
  }
  club: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    names: string
    p1: string
    p2: string
    seeSquad: string
    write: string
    pitchAlt: string
    groundLine: string
    join: string
    firstText: string
    reserveText: string
    volunteerText: string
  }
  history: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    more: string
    events: { year: string; title: string; text: string }[]
  }
  homeEvents: { year: string; title: string; text: string }[]
  matches: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    standing: string
    played: string
    points: string
    sofascore: string
    ellSheet: string
    seasonLabel: string
    results: string
    source: string
    come: string
    comeText: string
    next: string
    kickoff: string
    homeBadge: string
    awayBadge: string
    awayNote: string
    upcoming: string
    upcomingLead: string
    form: string
    table: string
    wins: string
    draws: string
    losses: string
    goalsFor: string
    goalsAgainst: string
    goals: string
    placeLabel: string
    markWin: string
    markDraw: string
    markLoss: string
  }
  squad: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    players: string
    average: string
    foreigners: string
    internationals: string
    arrivalsTitle: string
    arrivalDetails: string[]
    photo: string
    player: string
    birth: string
    nationality: string
    source: string
    staff: string
    staffText: string
    reserves: string
    reservesText: string
    close: string
    numberNote: string
  }
  honours: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    series: string
    wins: string
    goals: string
    conceded: string
    seriesText: string
    champion: string
    matches: string
    points: string
    championText: string
    read: string
  }
  contact: {
    seoTitle: string
    seoDescription: string
    eyebrow: string
    title: string
    lead: string
    ground: string
    seat: string
    email: string
    phone: string
    phoneLine: string
    president: string
    mapTitle: string
    mapLang: string
  }
}

const fr: Copy = {
  nav: { home: "Accueil", club: "Le Club", history: "Histoire", matches: "Matchs", squad: "Équipe", honours: "Palmarès", contact: "Contact" },
  chrome: {
    division: "FLF 2. Division (1. Bezirk)",
    ticker: "5e journée : SC Ell – CS Bourscheid · Terrain Um Essig · 4 oct. 2026, 16:00",
    ground: "Terrain \"In der Ae\"",
    join: "Rejoindre le Club",
    founded: "Fondé en 1969 • CS Buurschent",
    rights: "© 2026 CS Bourscheid. Tous droits réservés.",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    crest: "Écusson CS Bourscheid"
  },
  common: {
    seat: "Siège",
    ground: "Terrain",
    president: "Président",
    phone: "Téléphone",
    groundPhone: "Terrain : +352 26 95 95 41",
    committee: "Comité du club",
    firstTeam: "Équipe première",
    reserves: "Réserves",
    volunteers: "Bénévoles & partenaires",
    seeSquad: "Voir l'effectif",
    homeMatches: "Matchs à domicile",
    practical: "Infos pratiques",
    honours: "Palmarès",
    contactUs: "Nous contacter",
    born: "né le",
    michelau: "L-9171 Michelau"
  },
  nations: {
    Luxembourg: "Luxembourg",
    "Cap-Vert": "Cap-Vert",
    "Cap-Vert / Portugal": "Cap-Vert / Portugal",
    Brésil: "Brésil",
    Serbie: "Serbie",
    Portugal: "Portugal",
    France: "France",
    "Portugal / Guinée-Bissau": "Portugal / Guinée-Bissau",
    "Portugal / Cap-Vert": "Portugal / Cap-Vert",
    "Luxembourg / Portugal": "Luxembourg / Portugal",
    "Luxembourg / Cap-Vert": "Luxembourg / Cap-Vert"
  },
  roles: { Gardien: "Gardien", Défenseur: "Défenseur", Milieu: "Milieu", Attaquant: "Attaquant" },
  groups: { Gardiens: "Gardiens", Défenseurs: "Défenseurs", Milieux: "Milieux", Attaquants: "Attaquants" },
  home: {
    seoTitle: "CS Buurschent | Cercle Sportif Bourscheid",
    seoDescription: "Cercle Sportif Bourscheid — club de football de la FLF 2. Division. Matchs, effectif et contact au terrain In der Ae à Michelau.",
    heroBadge: "Fondé en 1969 • Luxembourg",
    heroLead: "L'esprit du football au cœur du canton de Diekirch. Passion, engagement et tradition sur le terrain \"In der Ae\".",
    heroMatches: "Matchs à domicile",
    heroHistory: "Découvrir l'Histoire",
    bannerTitle: "Libérez votre passion pour le jeu",
    bannerText: "Saison 2026/2027 · Entraînements et compétitions seniors et réserves.",
    aboutKicker: "Entraînement & Excellence",
    aboutTitle: "Rejoignez notre équipe et élevez vos compétences",
    aboutP1: "Le CS Bourscheid (CS Buurschent) est bien plus qu'un simple club de football. Depuis plus de 50 ans, nous rassemblons les passionnés de ballon rond dans la commune de Bourscheid. Notre engagement est fondé sur la camaraderie, le fair-play et le dépassement de soi.",
    aboutP2: "Basé au complexe récréatif de Michelau (Terrain \"In der Ae\"), le club accueille des joueurs expérimentés comme des jeunes talents sous les couleurs rouge et noir. En luxembourgeois le village se nomme Buurschent, en allemand Burscheid : trois noms, un même maillot.",
    aboutCta: "Découvrir le club",
    pitchAlt: "Entraînement sur le terrain",
    mainGround: "Terrain Principal",
    groundLine: "Terrain \"In der Ae\" • Michelau",
    foundedLabel: "Année de fondation",
    closedSeason: "Saison terminée",
    closedText: "Champion de Division 3 en 2024/25 : 24 matchs, 59 points, 93 buts à 27, puis montée en 2e division.",
    seeHonours: "Voir le palmarès",
    statsLabel: "Chiffres du club",
    seniors: "Équipes seniors FLF",
    goals: "Buts en Division 3, 2024/25",
    champion: "Champion, puis montée",
    rank: "1er",
    historyKicker: "Depuis 1969",
    historyTitle: "L'histoire du CS Buurschent",
    historyLead: "Le Cercle Sportif Bourscheid est un club de village du canton de Diekirch. Il porte le football local sur le terrain municipal de Michelau, d'abord dans les divisions inférieures, puis jusqu'à la 2e division de la FLF.",
    service: "Service & Engagement",
    glory: "Votre voyage vers la gloire commence ici",
    gloryText: "Au cœur de notre philosophie se trouve un engagement profond envers l'excellence sportive et l'esprit d'équipe. Nous fournissons à nos joueurs le meilleur encadrement pour exceller dans la FLF 2. Division.",
    seeSquad: "Découvrir l'Effectif",
    competition: "Compétition FLF",
    legacyTitle: "Bâtir un héritage sur le terrain",
    matchAlt: "Action de match sur le terrain",
    squadBadge: "Effectif 26/27",
    squadTitle: "22 joueurs, âge moyen 32,6 ans",
    squadText: "11 joueurs étrangers (50 %). Stade : Terrain in der Ae. Source : Transfermarkt, saison 2026/27.",
    seeRoster: "Voir l'effectif",
    trainAlt: "Joueur à l'entraînement",
    market: "Mercato",
    arrivalsTitle: "Cinq arrivées à l'été 2026",
    arrivalsText: "Pantoja, Mendes, Santos, Dinis Rego et da Graca. Tous en transfert libre, le 1er juillet 2026.",
    seeArrivals: "Voir les arrivées",
    saveAlt: "Arrêt du gardien devant le but",
    roundBadge: "5e journée",
    roundText: "Dimanche 4 octobre 2026 · 16:00. 2. Division, 1. Bezirk. Après 4 journées : 4e, 10 points.",
    matchInfo: "Infos matchs",
    season: "Saison 2026/2027",
    playersStaff: "Joueurs & Staff",
    rosterLead: "Effectif Transfermarkt 2026/27 : 22 joueurs, âge moyen 32,6 ans. Les numéros de maillot ne sont pas publiés. Quatre joueurs de l'équipe première ci-dessous.",
    firstTeam: "Équipe Première",
    honoursKicker: "Palmarès & Distinction",
    excellence: "L'excellence dans chaque match",
    excellenceText: "Notre club met un point d'honneur à promouvoir les valeurs fondamentales du sport luxembourgeois : fair-play, développement de la jeunesse et esprit d'équipe.",
    titleD3: "Champion de Division 3 — 2024/25",
    titleSeries: "Titre de série — 1976/77",
    duelAlt: "Duel au milieu de terrain",
    spirit: "Esprit de Club",
    historic: "Saison Historique FLF",
    lifeKicker: "Vie du club",
    lifeTitle: "Jouer, soutenir, s'engager",
    lifeLead: "Le CS Buurschent vit grâce à ses joueurs, à ses bénévoles et aux familles de la commune. Les entraînements et les matchs à domicile ont lieu à Michelau.",
    firstText: "Seniors engagés en 2. Division, 1. Bezirk. Championnat et Coupe FLF, avec les matchs à domicile au terrain « In der Ae ».",
    reserveText: "La réserve dispute la Réserve Klasse 4, Bezirk 1. Elle permet aux joueurs de rester dans le club et de préparer l'équipe fanion.",
    volunteerText: "Buette, tenue du terrain, déplacements : le club cherche des coups de main et des partenaires locaux. Écrivez à csb@pt.lu.",
    location: "Localisation",
    motivation: "Trouvez la motivation dans nos victoires",
    locationText: "Nos matchs à domicile et nos séances d'entraînement se déroulent sur le terrain municipal \"In der Ae\" à Michelau / Bourscheid.",
    mainStadium: "Stade Principal",
    stadiumLine: "Terrain \"In der Ae\", Kierfechtswee, L-9171 Michelau",
    officialEmail: "Email Officiel",
    federation: "Fédération",
    federationName: "Fédération Luxembourgeoise de Football (FLF)",
    mapTitle: "Terrain In der Ae, Michelau"
  },
  club: {
    seoTitle: "Le Club | CS Buurschent",
    seoDescription: "Le Cercle Sportif Bourscheid, club de football fondé en 1969 à Michelau. Équipes, terrain In der Ae et contacts.",
    eyebrow: "Cercle Sportif Bourscheid",
    title: "Le Club",
    lead: "Un club de village du canton de Diekirch, en rouge et noir depuis 1969, au terrain « In der Ae » à Michelau.",
    names: "Trois noms, un même maillot",
    p1: "Le CS Bourscheid rassemble les passionnés de football de la commune. En français le village s'appelle Bourscheid, en allemand Burscheid, en luxembourgeois Buurschent. Le sigle CS signifie Cercle Sportif.",
    p2: "L'équipe première évolue en FLF 2. Division, 1. Bezirk. Les réserves disputent la Réserve Klasse 4, Bezirk 1. Les matchs à domicile et les entraînements se déroulent au complexe de Michelau.",
    seeSquad: "Voir l'effectif",
    write: "Nous écrire",
    pitchAlt: "Terrain d'entraînement",
    groundLine: "Terrain « In der Ae » · Michelau",
    join: "S'engager au club",
    firstText: "Seniors en championnat et en Coupe FLF. Les matchs à domicile se jouent à Michelau.",
    reserveText: "La réserve joue en Klasse 4 et garde des joueurs dans le club, prêts à renforcer l'équipe fanion.",
    volunteerText: "Buette, terrain, déplacements : le club cherche des coups de main et des partenaires locaux."
  },
  history: {
    seoTitle: "Histoire | CS Buurschent",
    seoDescription: "Histoire du CS Bourscheid, fondé en 1969 : titres de 1976/77 et de Division 3 en 2024/25, puis montée en 2e division.",
    eyebrow: "Depuis 1969",
    title: "Histoire",
    lead: "Du club de village aux divisions de la FLF : le CS Buurschent joue à Michelau et porte les couleurs de Bourscheid.",
    more: "Le détail des titres est repris sur la page",
    events: [
      { year: "1969", title: "Fondation", text: "Le CS Bourscheid est créé. CS signifie Cercle Sportif. Le nom luxembourgeois Buurschent figure aujourd'hui sur l'écusson, avec la mention « Since 1969 »." },
      { year: "1976/77", title: "Premier titre de série", text: "Après l'intégration des équipes réserves dans le championnat, le club termine premier : 22 matchs, 20 victoires, 2 défaites, 82 buts marqués pour 20 encaissés." },
      { year: "2024/25", title: "Champion de Division 3", text: "24 matchs, 19 victoires, 2 nuls, 3 défaites, 59 points, 93 buts à 27. Ce titre ouvre la montée en 2e division." },
      { year: "2026/27", title: "Deux équipes en FLF", text: "L'équipe première joue en 2. Division, 1. Bezirk. Les réserves disputent la Réserve Klasse 4, Bezirk 1, toujours au terrain « In der Ae »." }
    ]
  },
  homeEvents: [
    { year: "1969", title: "Fondation du club", text: "Le CS Bourscheid voit le jour. Le sigle CS signifie Cercle Sportif. Le club s'identifie aussi sous le nom luxembourgeois Buurschent, repris aujourd'hui sur le maillot et l'écusson." },
    { year: "1976/77", title: "Titre de division", text: "Après l'intégration des équipes réserves dans le championnat, le club termine premier de sa série : 20 victoires, 2 défaites, 82 buts marqués pour 20 encaissés." },
    { year: "2024/25", title: "Champion de Division 3", text: "Saison référence : 24 matchs, 19 victoires, 2 nuls, 3 défaites, 59 points et un goal-average de 93 à 27. Ce titre ouvre la montée en 2e division." },
    { year: "2026/27", title: "Deux équipes en championnat", text: "L'équipe première évolue en FLF 2. Division, 1. Bezirk. Les réserves disputent la Réserve Klasse 4, Bezirk 1. Les matchs à domicile se jouent au terrain « In der Ae »." }
  ],
  matches: {
    seoTitle: "Matchs | CS Buurschent",
    seoDescription: "Matchs du CS Buurschent en 2. Division, 1. Bezirk : résultats Sofascore de la saison 2026/27 et 5e journée à Ell.",
    eyebrow: "FLF 2. Division · 1. Bezirk",
    title: "Matchs",
    lead: "Scores et classement repris de Sofascore pour la saison 2026/27. Les matchs à domicile se jouent au Terrain in der Ae, à Michelau.",
    standing: "Après 4 journées, Sofascore place le CS Bourscheid {place}, avec {points} points.",
    played: "matchs",
    points: "pts",
    sofascore: "Voir sur Sofascore",
    ellSheet: "Fiche du match chez SC Ell",
    seasonLabel: "Saison 2026/27 · 4 journées",
    results: "Résultats",
    source: "Scores publiés par Sofascore. Les dates sont celles du calendrier de la 2. Division, 1. Bezirk.",
    come: "Venir au stade",
    comeText: "Terrain « In der Ae », Kierfechtswee, L-9171 Michelau. Renseignements : +352 26 95 95 41.",
    next: "Prochain match",
    kickoff: "Coup d'envoi",
    homeBadge: "Domicile",
    awayBadge: "Extérieur",
    awayNote: "Match à l'extérieur au Terrain Um Essig, à Ell. Les rencontres à domicile se jouent au Terrain « In der Ae ».",
    upcoming: "Matchs suivants",
    upcomingLead: "Calendrier publié de la Division 2, de la 6e journée au 23 mai 2027. L'heure n'est indiquée que lorsqu'elle est publiée.",
    form: "Forme",
    table: "Classement",
    wins: "Victoires",
    draws: "Nuls",
    losses: "Défaites",
    goalsFor: "Buts pour",
    goalsAgainst: "Buts contre",
    goals: "Buts",
    placeLabel: "Place",
    markWin: "V",
    markDraw: "N",
    markLoss: "D"
  },
  squad: {
    seoTitle: "Équipe | CS Buurschent",
    seoDescription: "Effectif et staff du CS Buurschent pour la saison 2026/2027. Équipe première et réserves.",
    eyebrow: "Saison 2026/2027",
    title: "Équipe",
    lead: "22 joueurs, âge moyen 32,6 ans, dont 11 étrangers. Chiffres et noms : Transfermarkt, saison 2026/27. Les numéros de maillot n'y sont pas indiqués.",
    players: "Joueurs",
    average: "Âge moyen",
    foreigners: "Étrangers (50 %)",
    internationals: "Internationaux",
    arrivalsTitle: "Arrivées du 1er juillet 2026",
    arrivalDetails: [
      "Milieu · en provenance de l'AS Wincrange · libre",
      "Ailier droit · en provenance de l'AS Wincrange · libre",
      "Milieu · en provenance de l'AS Colmar-Berg · libre",
      "Attaquant · en provenance du FCM Young Boys Diekirch · libre",
      "Attaquant · en provenance des Red Boys Aspelt · libre"
    ],
    photo: "Photo",
    player: "Joueur",
    birth: "Naissance",
    nationality: "Nationalité",
    source: "Aucun départ n'est enregistré pour cette fenêtre.",
    staff: "Staff",
    staffText: "Président : Steve Heischbourg. Le comité siège à Lisseneck 11, L-9377 Hoscheid. Pour rejoindre l'effectif, écrivez à csb@pt.lu ou appelez le +352 691 792 489.",
    reserves: "Réserves",
    reservesText: "La réserve dispute la Réserve Klasse 4, Bezirk 1. Elle permet aux joueurs de rester au club et de préparer l'équipe fanion. Les matchs à domicile ont lieu au même terrain, « In der Ae ».",
    close: "Fermer",
    numberNote: "Numéro de maillot non publié."
  },
  honours: {
    seoTitle: "Palmarès | CS Buurschent",
    seoDescription: "Palmarès du CS Bourscheid : titre de série 1976/77 et championnat de Division 3 en 2024/25.",
    eyebrow: "Titres et saisons",
    title: "Palmarès",
    lead: "Deux saisons de référence pour le club : le titre de série de 1976/77 et le championnat de Division 3 en 2024/25.",
    series: "Titre de série",
    wins: "Victoires",
    goals: "Buts",
    conceded: "Encaissés",
    seriesText: "Premier de sa série sur 22 matchs, avec seulement deux défaites, au moment où les équipes réserves entraient dans le championnat des équipes premières.",
    champion: "Champion de Division 3",
    matches: "Matchs",
    points: "Points",
    championText: "2 nuls, 3 défaites, 27 buts encaissés. La saison se conclut par la montée en 2e division, où le club évolue aujourd'hui.",
    read: "Lire l'histoire du club"
  },
  contact: {
    seoTitle: "Contact | CS Buurschent",
    seoDescription: "Contacter le CS Bourscheid : csb@pt.lu, terrain In der Ae à Michelau, siège à Hoscheid.",
    eyebrow: "Rejoindre le club",
    title: "Contact",
    lead: "Inscription, partenariat ou renseignements sur un match : écrivez à csb@pt.lu ou appelez le club.",
    ground: "Terrain",
    seat: "Siège",
    email: "Email",
    phone: "Téléphone",
    phoneLine: "Club +352 691 792 489 · Terrain +352 26 95 95 41",
    president: "Président",
    mapTitle: "Terrain In der Ae, Michelau",
    mapLang: "fr"
  }
}

const lb: Copy = {
  nav: { home: "Heem", club: "De Club", history: "Geschicht", matches: "Matcher", squad: "Ekipp", honours: "Erfolleger", contact: "Kontakt" },
  chrome: {
    division: "FLF 2. Divisioun (1. Bezierk)",
    ticker: "5. Spilldag: SC Ell – CS Bourscheid · Terrain Um Essig · 4. Okt. 2026, 16:00",
    ground: "Terrain \"In der Ae\"",
    join: "Mam Club matmaachen",
    founded: "Gegrënnt 1969 • CS Buurschent",
    rights: "© 2026 CS Bourscheid. All Rechter virbehalen.",
    openMenu: "Menü opmaachen",
    closeMenu: "Menü zoumaachen",
    crest: "Wopen CS Bourscheid"
  },
  common: {
    seat: "Sëtz",
    ground: "Terrain",
    president: "President",
    phone: "Telefon",
    groundPhone: "Terrain: +352 26 95 95 41",
    committee: "Comité vum Club",
    firstTeam: "Éischt Ekipp",
    reserves: "Reserv",
    volunteers: "Fräiwëlleger & Partner",
    seeSquad: "D'Ekipp kucken",
    homeMatches: "Heemmatcher",
    practical: "Praktesch Informatiounen",
    honours: "Erfolleger",
    contactUs: "Kontaktéiert eis",
    born: "gebuer den",
    michelau: "L-9171 Méchela"
  },
  nations: {
    Luxembourg: "Lëtzebuerg",
    "Cap-Vert": "Kap Verde",
    "Cap-Vert / Portugal": "Kap Verde / Portugal",
    Brésil: "Brasilien",
    Serbie: "Serbien",
    Portugal: "Portugal",
    France: "Frankräich",
    "Portugal / Guinée-Bissau": "Portugal / Guinea-Bissau",
    "Portugal / Cap-Vert": "Portugal / Kap Verde",
    "Luxembourg / Portugal": "Lëtzebuerg / Portugal",
    "Luxembourg / Cap-Vert": "Lëtzebuerg / Kap Verde"
  },
  roles: { Gardien: "Golkeeper", Défenseur: "Verdeedeger", Milieu: "Mëttelfeld", Attaquant: "Stiermer" },
  groups: { Gardiens: "Golkeeperen", Défenseurs: "Verdeedeger", Milieux: "Mëttelfeld", Attaquants: "Stiermer" },
  home: {
    seoTitle: "CS Buurschent | Cercle Sportif Bourscheid",
    seoDescription: "Cercle Sportif Bourscheid — Fussballclub an der FLF 2. Divisioun. Matcher, Ekipp a Kontakt um Terrain In der Ae zu Méchela.",
    heroBadge: "Gegrënnt 1969 • Lëtzebuerg",
    heroLead: "De Geescht vum Fussball am Kanton Dikrech. Leidenschaft, Asaz an Traditioun um Terrain \"In der Ae\".",
    heroMatches: "Heemmatcher",
    heroHistory: "D'Geschicht entdecken",
    bannerTitle: "Loosst Är Leidenschaft fir d'Spill fräi",
    bannerText: "Saison 2026/2027 · Training a Matcher fir Senioren a Reserven.",
    aboutKicker: "Training & Exzellenz",
    aboutTitle: "Kommt an eis Ekipp a verbessert Äert Spill",
    aboutP1: "De CS Bourscheid (CS Buurschent) ass méi wéi just e Fussballclub. Zanter méi wéi 50 Joer brénge mir d'Fussballleit aus der Gemeng Buurschent zesummen. Eisen Asaz baut op Kameradschaft, Fairplay an de Wëllen, iwwer sech erauszegoen.",
    aboutP2: "Um Fräizäitkomplex vu Méchela (Terrain \"In der Ae\") hëlt de Club erfueren Spiller a jonk Talenter op, a rout a schwaarz. Op Lëtzebuergesch heescht d'Duerf Buurschent, op Däitsch Burscheid: dräi Nimm, dat selwecht Trikot.",
    aboutCta: "De Club entdecken",
    pitchAlt: "Training um Terrain",
    mainGround: "Haaptterrain",
    groundLine: "Terrain \"In der Ae\" • Méchela",
    foundedLabel: "Grënnungsjoer",
    closedSeason: "Ofgeschloss Saison",
    closedText: "Champion vun der 3. Divisioun 2024/25: 24 Matcher, 59 Punkten, 93 Goler géint 27, duerno Opstig an d'2. Divisioun.",
    seeHonours: "D'Erfolleger kucken",
    statsLabel: "Zuelen vum Club",
    seniors: "Senioren-Ekippe FLF",
    goals: "Goler an der 3. Divisioun, 2024/25",
    champion: "Champion, duerno Opstig",
    rank: "1.",
    historyKicker: "Zanter 1969",
    historyTitle: "D'Geschicht vum CS Buurschent",
    historyLead: "De Cercle Sportif Bourscheid ass e Duerfclub aus dem Kanton Dikrech. E spillt de lokale Fussball um Gemengenterrain vu Méchela, fir d'éischt an den ënneschten Divisiounen, duerno bis an d'2. Divisioun vun der FLF.",
    service: "Asaz & Engagement",
    glory: "Är Rees op d'Gloire fänkt hei un",
    gloryText: "Am Häerz vun eiser Philosophie steet den Asaz fir sportlech Exzellenz an Ekippgeescht. Mir ginn eise Spiller de beschten Encadrement fir an der FLF 2. Divisioun ze excelléieren.",
    seeSquad: "D'Ekipp entdecken",
    competition: "FLF-Competitioun",
    legacyTitle: "En Ierwen um Terrain opbauen",
    matchAlt: "Aktioun um Terrain",
    squadBadge: "Ekipp 26/27",
    squadTitle: "22 Spiller, Duerchschnëttsalter 32,6 Joer",
    squadText: "11 auslännesch Spiller (50 %). Stadion: Terrain in der Ae. Quell: Transfermarkt, Saison 2026/27.",
    seeRoster: "D'Ekipp kucken",
    trainAlt: "Spiller am Training",
    market: "Transferten",
    arrivalsTitle: "Fënnef Arrivéeën am Summer 2026",
    arrivalsText: "Pantoja, Mendes, Santos, Dinis Rego an da Graca. All fräi geplënnert, den 1. Juli 2026.",
    seeArrivals: "D'Arrivéeë kucken",
    saveAlt: "Parad vum Golkeeper",
    roundBadge: "5. Spilldag",
    roundText: "Sonndeg 4. Oktober 2026 · 16:00. 2. Divisioun, 1. Bezierk. No 4 Spilldeeg: 4., 10 Punkten.",
    matchInfo: "Matcher-Infoen",
    season: "Saison 2026/2027",
    playersStaff: "Spiller & Staff",
    rosterLead: "Transfermarkt-Ekipp 2026/27: 22 Spiller, Duerchschnëttsalter 32,6 Joer. D'Trikotnummeren sinn net publizéiert. Véier Spiller vun der éischter Ekipp hei drënner.",
    firstTeam: "Éischt Ekipp",
    honoursKicker: "Erfolleger",
    excellence: "Exzellenz an all Match",
    excellenceText: "Eise Club setzt sech an fir d'Grondwäerter vum lëtzebuergesche Sport: Fairplay, Jugend an Ekippgeescht.",
    titleD3: "Champion vun der 3. Divisioun — 2024/25",
    titleSeries: "Serientitel — 1976/77",
    duelAlt: "Duell um Mëttelfeld",
    spirit: "Clubgeescht",
    historic: "Historesch FLF-Saison",
    lifeKicker: "Clubliewen",
    lifeTitle: "Spillen, ënnerstëtzen, matmaachen",
    lifeLead: "De CS Buurschent lieft duerch seng Spiller, seng Fräiwëlleger an d'Familljen aus der Gemeng. Training an Heemmatcher sinn zu Méchela.",
    firstText: "Senioren an der 2. Divisioun, 1. Bezierk. Championnat a Coupe FLF, mat den Heemmatcher um Terrain « In der Ae ».",
    reserveText: "D'Reserv spillt an der Reserv Klasse 4, Bezierk 1. Si hält d'Spiller am Club a preparéiert d'éischten Ekipp.",
    volunteerText: "Buett, Terrain, Deplacementer: de Club sicht Hëllef a lokal Partner. Schreift op csb@pt.lu.",
    location: "Lag",
    motivation: "Fannt d'Motivatioun an eise Victoiren",
    locationText: "Eis Heemmatcher an eis Traininge sinn um Gemengenterrain \"In der Ae\" zu Méchela / Buurschent.",
    mainStadium: "Haaptstadion",
    stadiumLine: "Terrain \"In der Ae\", Kierfechtswee, L-9171 Méchela",
    officialEmail: "Offiziell E-Mail",
    federation: "Federatioun",
    federationName: "Lëtzebuerger Fussballfederatioun (FLF)",
    mapTitle: "Terrain In der Ae, Méchela"
  },
  club: {
    seoTitle: "De Club | CS Buurschent",
    seoDescription: "De Cercle Sportif Bourscheid, Fussballclub gegrënnt 1969 zu Méchela. Ekippen, Terrain In der Ae a Kontakt.",
    eyebrow: "Cercle Sportif Bourscheid",
    title: "De Club",
    lead: "En Duerfclub aus dem Kanton Dikrech, a rout a schwaarz zanter 1969, um Terrain « In der Ae » zu Méchela.",
    names: "Dräi Nimm, dat selwecht Trikot",
    p1: "De CS Bourscheid bréngt d'Fussballleit aus der Gemeng zesummen. Op Franséisch heescht d'Duerf Bourscheid, op Däitsch Burscheid, op Lëtzebuergesch Buurschent. CS heescht Cercle Sportif.",
    p2: "Déi éischt Ekipp spillt an der FLF 2. Divisioun, 1. Bezierk. D'Reserve spillt an der Reserv Klasse 4, Bezierk 1. Heemmatcher an Training sinn um Komplex vu Méchela.",
    seeSquad: "D'Ekipp kucken",
    write: "Eis schreiwen",
    pitchAlt: "Trainingsterrain",
    groundLine: "Terrain « In der Ae » · Méchela",
    join: "Mam Club matmaachen",
    firstText: "Senioren am Championnat an an der Coupe FLF. D'Heemmatcher sinn zu Méchela.",
    reserveText: "D'Reserv spillt an der Klasse 4 an hält d'Spiller am Club, prett fir d'éischten Ekipp ze verstäerken.",
    volunteerText: "Buett, Terrain, Deplacementer: de Club sicht Hëllef a lokal Partner."
  },
  history: {
    seoTitle: "Geschicht | CS Buurschent",
    seoDescription: "Geschicht vum CS Bourscheid, gegrënnt 1969: Titelen 1976/77 an 3. Divisioun 2024/25, duerno Opstig an d'2. Divisioun.",
    eyebrow: "Zanter 1969",
    title: "Geschicht",
    lead: "Vum Duerfclub bis an d'Divisioune vun der FLF: de CS Buurschent spillt zu Méchela an dréit d'Faarwe vu Buurschent.",
    more: "D'Detailer vun den Titelen stinn op der Säit",
    events: [
      { year: "1969", title: "Grënnung", text: "De CS Bourscheid gëtt gegrënnt. CS heescht Cercle Sportif. Den lëtzebuergeschen Numm Buurschent steet haut um Wopen, mam Vermierk « Since 1969 »." },
      { year: "1976/77", title: "Éischte Serientitel", text: "Nodeems d'Reserven an de Championnat integréiert goufen, gëtt de Club Éischten: 22 Matcher, 20 Victoiren, 2 Néierlagen, 82 Goler geschoss a 20 kritt." },
      { year: "2024/25", title: "Champion vun der 3. Divisioun", text: "24 Matcher, 19 Victoiren, 2 Onentschieden, 3 Néierlagen, 59 Punkten, 93 Goler géint 27. Dësen Titel mécht den Opstig an d'2. Divisioun op." },
      { year: "2026/27", title: "Zwee Ekippen an der FLF", text: "Déi éischt Ekipp spillt an der 2. Divisioun, 1. Bezierk. D'Reserve spillt an der Reserv Klasse 4, Bezierk 1, weider um Terrain « In der Ae »." }
    ]
  },
  homeEvents: [
    { year: "1969", title: "Grënnung vum Club", text: "De CS Bourscheid entsteet. CS heescht Cercle Sportif. De Club kennt sech och ënner dem lëtzebuergeschen Numm Buurschent, deen haut um Trikot an um Wopen steet." },
    { year: "1976/77", title: "Divisiounstitel", text: "Nodeems d'Reserven an de Championnat integréiert goufen, gëtt de Club Éischte vu senger Serie: 20 Victoiren, 2 Néierlagen, 82 Goler geschoss a 20 kritt." },
    { year: "2024/25", title: "Champion vun der 3. Divisioun", text: "Referenzsaison: 24 Matcher, 19 Victoiren, 2 Onentschieden, 3 Néierlagen, 59 Punkten an e Goal-Average vu 93 géint 27. Dësen Titel mécht den Opstig an d'2. Divisioun op." },
    { year: "2026/27", title: "Zwee Ekippen am Championnat", text: "Déi éischt Ekipp spillt an der FLF 2. Divisioun, 1. Bezierk. D'Reserve spillt an der Reserv Klasse 4, Bezierk 1. D'Heemmatcher sinn um Terrain « In der Ae »." }
  ],
  matches: {
    seoTitle: "Matcher | CS Buurschent",
    seoDescription: "Matcher vum CS Buurschent an der 2. Divisioun, 1. Bezierk: Sofascore-Resultater vun der Saison 2026/27 an 5. Spilldag zu Ell.",
    eyebrow: "FLF 2. Divisioun · 1. Bezierk",
    title: "Matcher",
    lead: "Resultater a Klassement vun Sofascore fir d'Saison 2026/27. D'Heemmatcher sinn um Terrain in der Ae, zu Méchela.",
    standing: "No 4 Spilldeeg steet de CS Bourscheid bei Sofascore op der {place} Plaz, mat {points} Punkten.",
    played: "Matcher",
    points: "Pts",
    sofascore: "Op Sofascore kucken",
    ellSheet: "Matchblat beim SC Ell",
    seasonLabel: "Saison 2026/27 · 4 Spilldeeg",
    results: "Resultater",
    source: "Resultater publizéiert vu Sofascore. D'Datume sinn déi vum Kalenner vun der 2. Divisioun, 1. Bezierk.",
    come: "Op de Stadion kommen",
    comeText: "Terrain « In der Ae », Kierfechtswee, L-9171 Méchela. Auskënft: +352 26 95 95 41.",
    next: "Nächste Match",
    kickoff: "Uspill",
    homeBadge: "Doheem",
    awayBadge: "Auswäerts",
    awayNote: "Auswäertsmatch um Terrain Um Essig zu Ell. D'Heemmatcher sinn um Terrain « In der Ae ».",
    upcoming: "Nächst Matcher",
    upcomingLead: "Publizéierte Kalenner vun der Divisioun 2, vum 6. Spilldag bis den 23. Mee 2027. D'Auer steet nëmmen dobäi, wann se publizéiert ass.",
    form: "Form",
    table: "Klassement",
    wins: "Victoiren",
    draws: "Onentschieden",
    losses: "Néierlagen",
    goalsFor: "Goler fir",
    goalsAgainst: "Goler dogéint",
    goals: "Goler",
    placeLabel: "Plaz",
    markWin: "S",
    markDraw: "O",
    markLoss: "N"
  },
  squad: {
    seoTitle: "Ekipp | CS Buurschent",
    seoDescription: "Ekipp a Staff vum CS Buurschent fir d'Saison 2026/2027. Éischt Ekipp a Reserv.",
    eyebrow: "Saison 2026/2027",
    title: "Ekipp",
    lead: "22 Spiller, Duerchschnëttsalter 32,6 Joer, dovun 11 Auslänner. Zuelen an Nimm: Transfermarkt, Saison 2026/27. D'Trikotnummeren sinn net uginn.",
    players: "Spiller",
    average: "Duerchschnëttsalter",
    foreigners: "Auslänner (50 %)",
    internationals: "Internationaler",
    arrivalsTitle: "Arrivéeën vum 1. Juli 2026",
    arrivalDetails: [
      "Mëttelfeld · vun der AS Wincrange · fräi",
      "Riets Baussen · vun der AS Wincrange · fräi",
      "Mëttelfeld · vun der AS Colmar-Berg · fräi",
      "Stiermer · vum FCM Young Boys Dikrech · fräi",
      "Stiermer · vun de Red Boys Aspelt · fräi"
    ],
    photo: "Foto",
    player: "Spiller",
    birth: "Gebuert",
    nationality: "Nationalitéit",
    source: "Fir dës Fënster ass keen Depart enregistréiert.",
    staff: "Staff",
    staffText: "President: Steve Heischbourg. De Comité sëtzt op Lisseneck 11, L-9377 Hoscheid. Fir an d'Ekipp ze kommen, schreift op csb@pt.lu oder rufft un: +352 691 792 489.",
    reserves: "Reserv",
    reservesText: "D'Reserv spillt an der Reserv Klasse 4, Bezierk 1. Si hält d'Spiller am Club a preparéiert d'éischten Ekipp. D'Heemmatcher sinn um selwechten Terrain, « In der Ae ».",
    close: "Zoumaachen",
    numberNote: "Trikotnummer net publizéiert."
  },
  honours: {
    seoTitle: "Erfolleger | CS Buurschent",
    seoDescription: "Erfolleger vum CS Bourscheid: Serientitel 1976/77 a Championnat vun der 3. Divisioun 2024/25.",
    eyebrow: "Titelen a Saisonen",
    title: "Erfolleger",
    lead: "Zwee Referenzsaisone fir de Club: de Serientitel 1976/77 an de Championnat vun der 3. Divisioun 2024/25.",
    series: "Serientitel",
    wins: "Victoiren",
    goals: "Goler",
    conceded: "Kritt",
    seriesText: "Éischte vu senger Serie iwwer 22 Matcher, mat just zwou Néierlagen, zu deem Moment wou d'Reserven an de Championnat vun den éischten Ekippe koumen.",
    champion: "Champion vun der 3. Divisioun",
    matches: "Matcher",
    points: "Punkten",
    championText: "2 Onentschieden, 3 Néierlagen, 27 Goler kritt. D'Saison schléisst mam Opstig an d'2. Divisioun of, wou de Club haut spillt.",
    read: "D'Geschicht vum Club liesen"
  },
  contact: {
    seoTitle: "Kontakt | CS Buurschent",
    seoDescription: "De CS Bourscheid kontaktéieren: csb@pt.lu, Terrain In der Ae zu Méchela, Sëtz zu Hoscheid.",
    eyebrow: "Mam Club matmaachen",
    title: "Kontakt",
    lead: "Aschreiwung, Partnerschaft oder Auskënft iwwer e Match: schreift op csb@pt.lu oder rufft de Club un.",
    ground: "Terrain",
    seat: "Sëtz",
    email: "E-Mail",
    phone: "Telefon",
    phoneLine: "Veräin +352 691 792 489 · Terrain +352 26 95 95 41",
    president: "President",
    mapTitle: "Terrain In der Ae, Méchela",
    mapLang: "lb"
  }
}

export const copy: Record<Lang, Copy> = { FR: fr, LB: lb }

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""))
}
