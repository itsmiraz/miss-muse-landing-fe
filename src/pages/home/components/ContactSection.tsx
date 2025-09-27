import React from "react";
import PhoneIcon from "@/assets/phone.svg";
import MailIcon from "@/assets/Email.svg";
import InstaIcon from "@/assets/InstaFull.svg";
import TiktokIcon from "@/assets/TikTokFUll.svg";
import GlobeIcon from "@/assets/webIcon.svg";
// const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.92.33 1.82.64 2.68a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.4-1.16a2 2 0 0 1 2.11-.45c.86.31 1.76.52 2.68.64A2 2 0 0 1 22 16.92Z"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
//       stroke="currentColor"
//       strokeWidth="1.6"
//     />
//     <path
//       d="m22 6-10 7L2 6"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const InstaIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <rect
//       x="3"
//       y="3"
//       width="18"
//       height="18"
//       rx="5"
//       stroke="currentColor"
//       strokeWidth="1.6"
//     />
//     <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
//     <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
//   </svg>
// );

// const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M14 3v6a5 5 0 0 0 5 5"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//     />
//     <path
//       d="M14 10.5v3.2a4.2 4.2 0 1 1-4.2-4.2c.9 0 1.7.3 2.4.8"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
//     <path
//       d="M3 12h18M12 3c3.5 3.7 3.5 13.3 0 18M12 3c-3.5 3.7-3.5 13.3 0 18"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//     />
//   </svg>
// );

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div
        className="mx-auto w-full max-w-6xl rounded-[22px] border border-white/10
                   bg-[radial-gradient(140%_160%_at_10%_10%,rgba(239,32,151,0.18),rgba(255,255,255,0)_42%),#0E1113]
                   shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] p-4 md:p-6 lg:p-8"
      >
        <div className="flex md:flex-row flex-col gap-6 md:gap-40">
          {/* Left: Form */}
          <div className="rounded-2xl max-w-[508px]">
            <h3 className="text-[22px] md:text-[24px] font-semibold text-zinc-100 mb-5">
              Laisse–nous un message
            </h3>

            <form className="space-y-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">Nom</label>
                  <input
                    type="text"
                    placeholder="Nom"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400
                               border border-white/10 px-3 outline-none focus:border-[#47C7FF]
                               transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">
                    Nom de Famille
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de Famille"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400
                               border border-white/10 px-3 outline-none focus:border-[#47C7FF]
                               transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">Courriel</label>
                  <input
                    type="email"
                    placeholder="Courriel"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400
                               border border-white/10 px-3 outline-none focus:border-[#47C7FF]
                               transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 647 267 7862"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400
                               border border-white/10 px-3 outline-none focus:border-[#47C7FF]
                               transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400
                             border border-white/10 p-3 outline-none focus:border-[#47C7FF]
                             transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center w-full justify-center rounded-full px-6 py-3 font-semibold text-white
                           bg-[linear-gradient(167.84deg,#28B6FF_-76.16%,#015673_126.95%)]
                           shadow-[0_14px_40px_-10px_rgba(40,182,255,0.55)]
                           hover:opacity-95 transition"
              >
                Envoyez un message
              </button>
            </form>
          </div>

          {/* Right: Contact card */}
          <aside
            className="rounded-2xl md:w-[464px] p-[1.2px]
                      contactbg"
          >
            <div
              className="rounded-2xl h-full
                        
                         border border-white/10 px-5 py-6 md:px-6 md:py-7 shadow-[0_20px_60px_-20px_rgba(239,32,151,0.45)]"
            >
              <h4 className="text-[18px] font-semibold text-white mb-4">
                Contactez–nous
              </h4>
              <ul className="space-y-3 text-zinc-100/90">
                <li className="flex items-center gap-3">
                  <PhoneIcon />
                  <span>(514) 378–1226</span>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon />
                  <span>missmuse.lashes@gmail.com</span>
                </li>
              </ul>

              <div className="my-5 h-px w-full bg-white/15" />

              <h4 className="text-[18px] font-semibold text-white mb-3">
                Découvrez–nous
              </h4>
              <ul className="space-y-3 text-zinc-100/90">
                <li className="flex items-center gap-3">
                  <InstaIcon />
                  <span>@missmuselashes</span>
                </li>
                <li className="flex items-center gap-3">
                  <TiktokIcon />
                  <span>@missmuselashes</span>
                </li>
                <li className="flex items-center gap-3">
                  <GlobeIcon />
                  <span>missmuse.ca</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
