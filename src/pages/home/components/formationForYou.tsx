import React from "react";
import StarTick from "@/assets/StarTick.svg";

/** Small purple badge icon (replace with your own if you like) */
const BadgeIcon = () => (
  <span
    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                   bg-[linear-gradient(167.84deg,#8B5CF6_-76.16%,#3B0764_126.95%)]
                   shadow-[0_0_18px_rgba(139,92,246,0.45)] mr-3 mt-1"
  >
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden>
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

const bullets: Array<React.ReactNode> = [
  <>
    Tu postes déjà mais{" "}
    <span className="font-semibold">
      tes vues stagnent et tu ne sais plus quoi publier
    </span>{" "}
    pour convertir.
  </>,
  <>
    Ta technique est solide, mais{" "}
    <span className="font-semibold">ton branding ne reflète pas</span> la
    qualité de ton travail.
  </>,
  <>
    Tu manques d’idées de contenu et{" "}
    <span className="font-semibold">tu veux une méthode simple</span> pour créer
    sans t’épuiser.
  </>,

  <>
    Tu veux <span className="font-semibold">packager une offre signature</span>{" "}
    avec une promesse irrésistible et une vraie différenciation.
  </>,
  <>
    Tu es prête à devenir{" "}
    <span className="font-semibold">la référence dans ton domaine</span>, pas
    juste “une esthéticienne de plus”.
  </>,
  <>
    Tu veux <span className="font-semibold">un contenu qui convertit</span>{" "}
    (hooks, CTA, preuves sociales) et pas juste des vues.
  </>,

  <>
    Tu attires des clientes, mais{" "}
    <span className="font-semibold">elles ne reviennent jamais</span>{" "}
    régulièrement.
  </>,
  <>
    Tu <span className="font-semibold">sens le burn-out arriver</span> et ta
    rentabilité n’est pas au rendez-vous.
  </>,
  <>
    Tu veux <span className="font-semibold">attirer des clientes</span> au lieu
    de toujours courir après elles.
  </>,
];

const FormationForYou: React.FC = () => {
  return (
    <section className="py-20">
      {/* Title */}
      <h2 className="text-center text-[32px] md:text-[40px] lg:text-[44px] font-extrabold leading-tight text-gradient">
        Cette Formation Est Faite Pour Vous Si…
      </h2>

      {/* Gradient border card */}
      <div
        className="mx-auto mt-8 max-w-6xl rounded-2xl p-[1.5px]
                      bg-[linear-gradient(90deg,#FFB000_0%,#EF2097_35%,#47E0B2_70%,#4DA3FF_100%)]
                      shadow-[0_20px_60px_-20px_rgba(239,32,151,0.45)]"
      >
        <div
          className="rounded-2xl
                        bg-[#0F1012] md:bg-[radial-gradient(120%_140%_at_0%_0%,rgba(239,32,151,0.16),rgba(255,255,255,0)_42%),#0F1012]
                        border border-white/10
                        px-5 py-6 md:px-8 md:py-9"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-x-2 items-start">
                <div>
                  {" "}
                  <StarTick />
                </div>
                <p className="text-[22px] font-db-sans leading-[1.25] text-zinc-100">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationForYou;
