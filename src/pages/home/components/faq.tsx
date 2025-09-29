import React, { useId, useRef, useState, useEffect } from "react";
import PinkGlow from "../../../assets/glows/pinkGlow.svg";
import BlueGlow from "../../../assets/glows/BlueGlow.svg";

type FAQ = { q: string; a: React.ReactNode };

const faqs: FAQ[] = [
  {
    q: "Est-ce que cette formation est faite pour moi si je suis débutante ? Et si je suis déjà expérimentée ?",
    a: (
      <p className="text-zinc-300 text-[15px] md:text-[16px] leading-relaxed">
        À l’issue de la formation, vous serez capable de :{" "}
        <span className="opacity-90">définir un positionnement de marque</span>,
        <span className="opacity-90"> concevoir une identité cohérente</span>,{" "}
        <span className="opacity-90">
          élaborer un plan marketing multicanal
        </span>
        , et{" "}
        <span className="opacity-90">mesurer la performance des campagnes</span>
        .
      </p>
    ),
  },
  {
    q: "Quand puis-je commencer et combien de temps ça dure ?",
    a: "Vous démarrez dès l’inscription. Le programme est pensé pour être suivi à votre rythme.",
  },
  {
    q: "L’accès est-il à vie ou pendant un temps limité ?",
    a: "Accès à vie aux vidéos et mises à jour majeures du programme.",
  },
  {
    q: "Y a-t-il un plan de paiement ?",
    a: "Oui, paiement en plusieurs fois possible. Contactez-nous pour les modalités.",
  },
  {
    q: "En combien de temps je vois des résultats ?",
    a: "La plupart des élèves constatent des améliorations en 2 à 4 semaines avec application régulière.",
  },
  {
    q: "Est-ce que j’aurai l’assistance personnelle de Miss Muse ?",
    a: "Support DM pendant le programme + sessions de Q&A régulières.",
  },
  {
    q: "Qu’est-ce que le cours inclut ?",
    a: "Vidéos, templates, checklists, études de cas et accompagnement pas-à-pas.",
  },
];

/* Single accordion item with smooth height animation */
const FAQItem: React.FC<FAQ> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const toggleOpen = () => {
    if (contentRef.current) {
      setHeight(open ? 0 : contentRef.current.scrollHeight);
    }
    setOpen(!open);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[radial-gradient(120%_140%_at_0%_0%,rgba(239,32,151,0.18),rgba(255,255,255,0)_45%),#0F1012] backdrop-blur-md overflow-hidden">
      <button
        onClick={toggleOpen}
        aria-expanded={open}
        className="w-full px-5 py-4 md:px-7 md:py-5 text-left flex items-center justify-between gap-4"
      >
        <span className="text-[18px] md:text-[20px] font-semibold text-zinc-100">
          {q}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-zinc-300 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-out"
      >
        <div
          ref={contentRef}
          className="px-5 mx-3 pt-2 border-t border-[#FFFFFF]/20 pb-5 md:px-7 md:pb-6 text-zinc-200"
        >
          {typeof a === "string" ? (
            <p className="text-[15px] md:text-[16px] leading-relaxed">{a}</p>
          ) : (
            a
          )}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <h2 className="text-gradient text-center text-[36px] md:text-[44px] font-extrabold leading-tight mb-6">
        FAQ
      </h2>

      <div className="absolute left-0 -top-96">
        <PinkGlow />
      </div>

      <div className="absolute right-0 -bottom-[1000px]">
        <BlueGlow />
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <FAQItem key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
