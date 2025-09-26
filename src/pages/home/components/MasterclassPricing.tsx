import React from "react";
import BlueTick from "@/assets/BlueTick.svg";

const left = [
  "Audit Instagram personnalisé avec plan d’action pour bien démarrer",
  "Appel de démarrage avec l’équipe Miss Muse pour un brainstorming stratégique",
  "Documents téléchargeables : modèles, scripts, checklists",
  "Contacts exclusifs (fournisseurs, partenaires, outils recommandés)",
];

const right = [
  "Assistance personnalisée par message privé (DM) pendant le programme",
  "1 appel individuel toutes les 2 semaines pour un suivi détaillé",
  "Devoirs guidés + feedback pour passer à l’action étape par étape",
  "Accès 24/7 à la plateforme vidéo pour revoir les leçons à ton rythme",
];

const MasterclassPricing: React.FC = () => {
  return (
    <section className="py-20">
      {/* Gold pill */}
      <div className="mx-auto mb-4 flex justify-center">
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #896C1C 0%, #513D05 100%)",
            border: " 0.5px solid rgba(255, 193, 22, 1)",
          }}
          className="rounded-[12px]  px-6 py-1 text-[23px] font-semibold text-white "
        >
          MMMM
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-[36px] md:text-[44px] font-extrabold leading-tight text-gradient">
        Miss Muse Marketing Masterclass
      </h2>

      {/* Card with neon border + glow */}
      <div
        style={{
          border: "2px solid transparent", // transparent is key
          borderImageSource:
            "conic-gradient(from 270deg at 50% 50%, #89F220 0deg, #FFD151 84.2deg, #89F220 180.76deg, #ED7523 234.33deg, #3CFFFF 269.68deg, #89F220 360deg)",
          borderImageSlice: 1,
        }}
        className="mx-auto masterClassBg mt-8 max-w-[965px] p-[1.6px] rounded-[22px]"
      >
        <div
          className="rounded-[22px] border border-white/10
                        px-6 py-7 md:px-9 md:py-9 relative"
        >
          {/* Top price row */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-zinc-300/70 line-through tracking-wide font-semibold">
              CAD 2100$
            </span>
            <span
              className="rounded-full px-3 py-1 text-[12px] font-bold text-black
                             bg-[linear-gradient(180deg,#FFE6F4_0%,#FFCFEA_100%)]
                             shadow-[0_6px_18px_rgba(239,32,151,0.35)]"
            >
              300$ OFF
            </span>
          </div>

          {/* Main price */}
          <div className="mt-1 text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#F7F7F7]">
            CAD 1800$
          </div>

          {/* Access bar */}
          <div className="mt-5 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-center text-sm md:text-[15px] text-zinc-200">
            Accès Au Programme Complet: Branding, Marketing, Et Fidélisation
            Clients.
          </div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-white/10" />

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {left.map((t, i) => (
              <div
                key={`l-${i}`}
                className="flex items-start gap-x-2 text-[16px] md:text-[17px] leading-[1.35] text-zinc-100"
              >
                <div>
                  <BlueTick />
                </div>
                <span>{t}</span>
              </div>
            ))}
            {right.map((t, i) => (
              <div
                key={`r-${i}`}
                className="flex items-start gap-x-2 text-[16px] md:text-[17px] leading-[1.35] text-zinc-100"
              >
                <div>
                  <BlueTick />
                </div>
                <span>{t}</span>
              </div>
            ))}
          </div>

          {/* CTA Bar */}
          <button
            className="mt-7 w-full rounded-lg border border-white/15
                       bg-[linear-gradient(167.84deg,#FF0093_-76.16%,#3C0023_126.95%)]
                       px-5 py-4 text-center text-[16px] md:text-[18px] font-bold text-white
                       shadow-[0_14px_40px_-10px_rgba(239,32,151,0.55)] hover:opacity-95 transition"
          >
            Commencez Maintenant →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MasterclassPricing;
