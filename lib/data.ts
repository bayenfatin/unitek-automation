export const NAV_LINKS = [
  { label: "MAINTENANCE CNC", href: "/maintenance-cnc", id: "S-01" },
  { label: "RÉTROFIT", href: "/retrofit-ingenierie", id: "S-02" },
  { label: "SUPERVISION DATA", href: "/supervision-data", id: "S-03" },
  { label: "CONTACT", href: "/contact", id: "S-04" },
];

export const STATS = [
  { value: "30+", unit: "ANS", label: "Expertise terrain", id: "STAT-001" },
  { value: "<4H", unit: "DÉLAI", label: "Intervention Lyon", id: "STAT-002" },
  { value: "6+", unit: "MARQUES", label: "CNC certifiées", id: "STAT-003" },
  { value: "100%", unit: "TERRAIN", label: "Techniciens experts", id: "STAT-004" },
];

export const SERVICES = [
  {
    id: "SVC-01",
    index: "01",
    title: "MAINTENANCE &\nDÉPANNAGE CNC",
    subtitle: "Curatif haute expertise",
    description:
      "Intervention sur site sous 4h pour toute panne électronique, mécanique ou logicielle. Expertise multimarque sur tours, fraiseuses, centres d'usinage et lignes complexes. Rapports numériques instantanés.",
    capabilities: [
      "Variateurs & servomoteurs",
      "Commandes d'axes & broches",
      "Réparation de cartes électroniques",
      "Paramétrage & mise en route",
    ],
    href: "/maintenance-cnc",
    accent: true,
  },
  {
    id: "SVC-02",
    index: "02",
    title: "RÉTROFIT &\nINGÉNIERIE",
    subtitle: "Modernisation des parcs",
    description:
      "Remplacement des pupitres et commandes numériques obsolètes par des systèmes modernes. Fiabilisation mécanique et électrique. Analyse AMDEC des causes racines pour éradiquer les pannes chroniques.",
    capabilities: [
      "Remplacement pupitres CNC",
      "Modernisation variateurs",
      "Analyse AMDEC & 5 Pourquoi",
      "Fiabilisation mécanique",
    ],
    href: "/retrofit-ingenierie",
    accent: false,
  },
  {
    id: "SVC-03",
    index: "03",
    title: "SUPERVISION &\nPILOTAGE DATA",
    subtitle: "Maintenance 4.0",
    description:
      "Connexion de vos SCADA, GMAO et automates. Tableaux de bord Power BI pour piloter MTTR, TRS et arrêts critiques. Digitalisation des interventions via application mobile pour vos techniciens.",
    capabilities: [
      "Dashboards Power BI",
      "Connectivité SCADA / GMAO",
      "KPIs : TRS, MTTR, MTTF",
      "Formulaires numériques mobile",
    ],
    href: "/supervision-data",
    accent: false,
  },
  {
    id: "SVC-04",
    index: "04",
    title: "ÉLECTRO-\nTECHNIQUE",
    subtitle: "Puissance & automatisme",
    description:
      "Dépannage et câblage d'armoires électriques industrielles. Maîtrise des automates programmables et systèmes de puissance. Mise en conformité et audit électrique de vos installations.",
    capabilities: [
      "Armoires électriques",
      "Automates Siemens / Schneider",
      "Électronique de puissance",
      "Audit & mise en conformité",
    ],
    href: "/maintenance-cnc",
    accent: false,
  },
];

export const CNC_BRANDS = [
  "SIEMENS SINUMERIK",
  "FANUC",
  "NUM",
  "HEIDENHAIN",
  "SCHNEIDER ELECTRIC",
  "BOSCH REXROTH",
  "MITSUBISHI",
  "INDRAMAT",
  "SELCA",
  "FIDIA",
];

export const COMPANY_INFO = {
  name: "UNITEK AUTOMATION",
  legacy: "MS2I",
  city: "SAINT-FONS",
  department: "RHÔNE (69)",
  region: "RÉGION LYONNAISE",
  coords: "45.711°N — 4.847°E",
  phone: "+33 (0)4 XX XX XX XX",
  email: "contact@unitek-automation.fr",
  since: "1994",
  rev: "REV 4.0",
  unit: "UA-001",
};
