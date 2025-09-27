import React, { useMemo, useState } from "react";
import MarketingIcon from "../../../assets/Marketing.svg";
import BulbIcon from "../../../assets/Bulb.svg";
import HumanIcon from "../../../assets/Human.svg";
import CrownIcon from "../../../assets/BrandingIcon.svg";

/** Small pink gradient check bullet */
const CheckBadge = () => (
  <span
    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md
                   bg-[linear-gradient(167.84deg,#FF0093_-76.16%,#3C0023_126.95%)]
                   shadow-[0_0_20px_rgba(239,32,151,0.35)] mr-2 mt-0.5"
  >
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
      <path
        d="M15.833 6.25l-7.5 7.5-3.166-3.167"
        stroke="#F7F7F7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/** Glassy / gradient card */
const Card: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div
    className="rounded-2xl p-5 md:p-6 lg:p-7
                  border border-white/20
                  bg-[radial-gradient(120%_120%_at_0%_0%,rgba(239,32,151,0.18),rgba(255,255,255,0)_45%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%),#0F0F10]
                  shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]
                  backdrop-blur-[2px]"
  >
    <div className="text-[18px] md:text-[20px] font-semibold mb-4 text-[#F7F7F7]">
      {title}
    </div>
    <ul className="space-y-2 grid grid-cols-2 text-[15px] leading-[1.35] text-zinc-200">
      {items.map((t, i) => (
        <li key={i} className="flex">
          <CheckBadge />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

type SectionKey = "mindset" | "branding" | "marketing" | "retention";

const TABS: {
  key: SectionKey;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
  { key: "mindset", label: "État d’esprit", Icon: BulbIcon as any },
  { key: "branding", label: "Branding", Icon: CrownIcon as any },
  { key: "marketing", label: "Marketing", Icon: MarketingIcon as any },
  { key: "retention", label: "Fidélisation", Icon: HumanIcon as any },
];

/** DATA — filled to mirror your screenshots. Feel free to tweak copy. */
const DATA: Record<SectionKey, Array<{ title: string; items: string[] }>> = {
  mindset: [
    {
      title: "Philosophie & trajectoire",
      items: [
        "Long-term vs opportunisme",
        "Levier « superpouvoir »",
        "Jouer en « ligue A »",
      ],
    },
    {
      title: "Identité avant l’offre",
      items: [
        "Positionnement clair",
        "Narratif / mission",
        "Cohérence rituelle",
      ],
    },
    {
      title: "Macro-marché & adaptabilité",
      items: [
        "Boucles de retour marché",
        "Réagir / agir vite",
        "Marque → boussole",
      ],
    },
    {
      title: "Étude de cas A/B",
      items: [
        "Changements de cap",
        "Décisions basées data",
        "Automatisations bénéfiques",
      ],
    },
    {
      title: "Mission & objectifs",
      items: ["Résultats clés", "Long-term compounding", "Cadence / constance"],
    },
    {
      title: "Lifestyle & énergie",
      items: [
        "Systèmes → calme",
        "Énergie stable = croissance",
        "Stop « sprint permanent »",
      ],
    },
    {
      title: "Éthique de travail",
      items: ["Discipline vs procrast", "Playbooks propres", "Devoirs faits"],
    },
    {
      title: "Outils / mindset",
      items: ["Vision-based", "Priorisation 80/20", "Automations quotidiennes"],
    },
    {
      title: "Anti-erreurs",
      items: [
        "Audit post-mortem",
        "Résoudre, pas cacher",
        "Process anti-récidive",
      ],
    },
    {
      title: "KPI Mindset",
      items: ["Score courant", "Lag vs lead metrics", "Stop vanity metrics"],
    },
  ],
  branding: [
    {
      title: "Public cible",
      items: [
        "Comprendre à qui s’adresser",
        "Segmenter par audience",
        "Adapter la communication aux segments",
        "Développer des personas",
        "Anticiper les tendances",
        "Besoins, désirs, attentes",
      ],
    },
    {
      title: "Personnalité de la marque",
      items: [
        "Ton, style, attitude",
        "Archetypes de marque",
        "Voix distinctive",
        "Offre ↔ perception",
        "Style de communication",
      ],
    },
    {
      title: "Identité de marque",
      items: [
        "Cohérence & impact",
        "Palette de couleurs",
        "Iconographie & éléments visuels",
        "Choisir un nom de marque percutant",
        "Guide visuel cohérent",
        "Typographie",
      ],
    },
    {
      title: "Exemples de personnalités réussies",
      items: [
        "Croyances fondamentales",
        "Valeurs & décisions commerciales",
        "Identifier & éditer ses valeurs",
        "Alignement employés / partenaires",
        "Communiquer ses valeurs",
        "Intégrations dans campagnes & produits",
      ],
    },
    {
      title: "Positionnement",
      items: [
        "Différence clé",
        "Proposition de valeur unique",
        "Message clé",
        "Analyse du marché & des concurrents",
        "Adapter par segment",
      ],
    },
    {
      title: "Authenticité",
      items: [
        "Pourquoi l’authenticité ?",
        "Exemples de marques authentiques",
        "Transparence commerciale & marketing",
        "Gérer les crises de réputation",
        "Construire la confiance",
      ],
    },
    {
      title: "Valeurs de la marque",
      items: [
        "Croyances fondamentales",
        "Valeurs & décisions",
        "Exprimer ses valeurs",
        "Alignement employés/partenaires",
        "Intégrer dans campagnes & produits",
      ],
    },
    {
      title: "Cohérence",
      items: [
        "Uniformité du message & du ton",
        "Cohérence inter-canaux",
        "Définir ton & style",
      ],
    },
    {
      title: "Évolution & adaptation",
      items: [
        "Quand & pourquoi repenser son branding",
        "Adapter au marché",
        "Communication par segments",
        "Rebrandings réussis",
        "Conserver son identité",
        "Études de cas",
      ],
    },
  ],
  marketing: [
    {
      title: "Mindset & fondamentaux",
      items: [
        "Psychologie du marketing",
        "Techniques psychologiques",
        "Expériences / effet Zeigarnik",
      ],
    },
    {
      title: "Inspiration & créativité",
      items: [
        "Bibliothèque d’idées",
        "Création régulière",
        "S’influencer positivement",
      ],
    },
    {
      title: "Engagement & communauté",
      items: ["DMs intentionnels", "Lives & contenus", "Loops de rétention"],
    },
    {
      title: "Publicité & conversion",
      items: ["Angles & offres", "Landing assets clairs", "Optimisations CRO"],
    },
    {
      title: "Production & outils",
      items: [
        "Système de prod & cal",
        "Templates / Ops / Canva",
        "Stack de design",
      ],
    },
    {
      title: "Planification & organisation",
      items: [
        "Thématiques récurrentes",
        "Calendrier contenus",
        "Temps, formats & priorités",
      ],
    },
    {
      title: "Croissance & scalabilité",
      items: [
        "Réutiliser contenus",
        "Boucles de recommand.",
        "Réduire frictions",
      ],
    },
    {
      title: "Support / Service",
      items: [
        "Réponses rapides",
        "Parcours client fluide",
        "Sans casser l’authenticité",
      ],
    },
  ],
  retention: [
    {
      title: "Psychologie de la fidélisation",
      items: [
        "État d’esprit centré sur la valeur",
        "Biais cognitifs utiles",
        "Triggers de retour",
        "Réduction des biais négatifs",
      ],
    },
    {
      title: "Fidélisation physique",
      items: [
        "Expériences en-personne",
        "Moments mémorables",
        "Kits & goodies",
        "Rituels de communauté",
      ],
    },
    {
      title: "Fidélisation digitale",
      items: [
        "Newsletters utiles",
        "Onboarding sans friction",
        "Boucles de valeur",
        "Programmes VIP",
      ],
    },
    {
      title: "Analyse & feedback client",
      items: [
        "Collecte & lecture",
        "Systèmes d’alertes",
        "Itérations rapides",
        "Roadmap pilotée feedback",
      ],
    },
  ],
};

const TabsBar: React.FC<{
  active: SectionKey;
  onChange: (k: SectionKey) => void;
}> = ({ active, onChange }) => {
  return (
    <div className="mx-auto mt-8 mb-12 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3">
      {TABS.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={[
              "group flex flex-col w-[170px] h-[100px] items-center gap-2 rounded-xl px-5 py-3 text-sm md:text-base font-semibold transition",
              "border",
              isActive
                ? "border-[#F71B9A] bg-[linear-gradient(167.84deg,#FF0093_-76.16%,#3C0023_126.95%)] text-white shadow-[0_10px_30px_-6px_rgba(239,32,151,0.45)]"
                : "border-white/10 bg-[#141415] hover:bg-[#191a1b] text-zinc-200",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {/* @ts-ignore: svg import */}
            <Icon />
            {label}
          </button>
        );
      })}
    </div>
  );
};

const SectionGrid: React.FC<{ section: SectionKey }> = ({ section }) => {
  const blocks = useMemo(() => DATA[section], [section]);
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
      {blocks.map((b, i) => (
        <Card key={i} title={b.title} items={b.items} />
      ))}
    </div>
  );
};

const Process: React.FC = () => {
  const [active, setActive] = useState<SectionKey>("branding");

  return (
    <section className="py-[120px] md:py-[152px]">
      <h2 className="text-gradient text-center text-[44px] md:text-[56px] lg:text-[70px] font-bold leading-[1.1]">
        Processus
      </h2>

      <TabsBar active={active} onChange={setActive} />

      <SectionGrid section={active} />
    </section>
  );
};

export default Process;
