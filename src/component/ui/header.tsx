import { useEffect, useRef, useState } from "react";
import SmallLogo from "@/assets/LogoSmall.svg";
const Header = () => {
  const navlinks = [
    { label: "Processus", link: "/" },
    { label: "Reviews", link: "/" },
    { label: "Admissibilité", link: "/" },
    { label: "MMMM", link: "/" },
    { label: "À Propos", link: "/" },
    { label: "FAQ", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Small utility for shared link styles
  const linkCls =
    "px-2 py-1 text-[#F7F7F7] hover:text-pink-500 text-lg md:text-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 rounded-md";

  return (
    <>
      {/* Desktop / Tablet */}
      <nav
        aria-label="Primary"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 max-w-[718px] mx-auto px-10 py-5 rounded-full border border-white/10 items-center gap-x-6 bg-white/5 backdrop-blur-md z-40"
      >
        {navlinks.map((item, i) => (
          <a key={i} href={item.link} className={linkCls}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile: compact pill with hamburger */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-4 py-2">
          <div>
            <SmallLogo />
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70"
          >
            {/* Hamburger / Close icon (pure SVG) */}
            {open ? (
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {/* Slide-down panel */}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-2">
            {navlinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={`${linkCls} text-base py-3 px-3`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
