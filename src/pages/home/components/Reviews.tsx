import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "@/assets/LeftArrow.svg";
import RightArrow from "@/assets/RightArrow.svg";

/* ---- Placeholder data ---- */
const REVIEWS = [
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    name: "Joshua",
    role: "Businessman",
    text: "Mon aventure dans le monde du marketing et de la beauté a commencé il y a 5 ans, alors que je partageais mes premiers contenus en ligne, tout en étant technicienne de cils. Au fil des mois, entre essais, erreurs et nouvelles idées, j’ai découvert une passion profonde pour le branding, la création de contenu et les stratégies marketing.",
  },
  {
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop",
    name: "Amélie",
    role: "Entrepreneuse",
    text: "Grâce à une meilleure structure de contenu et un positionnement clair, j’ai vu mes demandes monter rapidement. Le système m’a aidée à rester régulière sans m’épuiser.",
  },
  {
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop",
    name: "Kenji",
    role: "Fondateur",
    text: "Des cartes simples, un récit cohérent, et des actions hebdomadaires : c’est tout ce dont j’avais besoin pour débloquer la croissance organique.",
  },
];

/* ---- Single review card ---- */
const ReviewCard = ({ data }) => {
  return (
    <div
      className="group relative flex h-[240px] md:h-[260px] w-[560px] md:w-[680px] items-center
                 rounded-2xl border border-white/10
                 bg-[radial-gradient(120%_140%_at_0%_0%,rgba(255,255,255,0.04),rgba(255,255,255,0)_45%),#0C0E10]
                 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)] overflow-hidden"
    >
      {/* Avatar */}
      <div className="pl-5 md:pl-6 pr-4">
        <img
          src={data.img}
          alt={data.name}
          className="h-[140px] w-[140px] md:h-[156px] md:w-[156px] rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="pr-6 md:pr-8">
        <h4 className="text-[18px] md:text-[20px] font-semibold text-white">
          {data.name}
        </h4>
        <p className="text-sm md:text-[15px] text-zinc-300 mb-3">{data.role}</p>
        <p className="max-w-[420px] md:max-w-[480px] text-[13.5px] md:text-[15px] leading-relaxed text-zinc-200">
          {data.text}
        </p>
      </div>
    </div>
  );
};

/* ---- Slider ---- */
const Reviews = () => {
  const swiperRef = useRef(null);

  const handleLeftClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };
  const handleRightClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="py-16 lg:px-10">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 md:px-8">
        <span
          className="inline-block rounded-lg bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/90
                     border border-white/15"
        >
          Réviews
        </span>

        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Slide left"
            onClick={handleLeftClick}
            className="left-arrow flex h-9 w-9 items-center justify-center rounded-full
                       bg-white/10 hover:bg-white/15 border border-white/15 transition"
          >
            <LeftArrow />
          </button>
          <button
            aria-label="Slide right"
            onClick={handleRightClick}
            className="right-arrow flex h-9 w-9 items-center justify-center rounded-full
                       bg-white/10 hover:bg-white/15 border border-white/15 transition"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="pt-6 pl-6 md:pl-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
          loop={false}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 18 },
            640: { slidesPerView: 1.3, spaceBetween: 22 },
            768: { slidesPerView: 1.6, spaceBetween: 26 },
            1024: { slidesPerView: 2.1, spaceBetween: 28 },
            1440: { slidesPerView: 2.6, spaceBetween: 32 },
          }}
          className="mySwiper"
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <ReviewCard data={r} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile arrows */}
      <div className="md:hidden flex items-center gap-4 px-6 pt-4">
        <button
          aria-label="Slide left"
          onClick={handleLeftClick}
          className="left-arrow flex h-9 w-9 items-center justify-center rounded-full
                     bg-white/10 hover:bg-white/15 border border-white/15 transition"
        >
          <LeftArrow />
        </button>
        <button
          aria-label="Slide right"
          onClick={handleRightClick}
          className="right-arrow flex h-9 w-9 items-center justify-center rounded-full
                     bg-white/10 hover:bg-white/15 border border-white/15 transition"
        >
          <RightArrow />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
