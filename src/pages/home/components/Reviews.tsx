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
    <div className="rounded-2xl border border-white/30 w-fit ">
      <div
        className="group relative  z-50 flex gap-[45px] h-[240px] md:h-[430px] w-[560px] md:w-[1082px] items-center
                 rounded-2xl border bg-black/90 border-white/10
                 overflow-hidden"
      >
        {/* Avatar */}
        <div className="pl-5 md:pl-6 pr-4">
          <img
            src={data.img}
            alt={data.name}
            className="h-[140px] w-[140px] md:h-[358px] md:w-[302px] rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="pr-6 md:pr-8">
          <h4 className="text-[18px] md:text-[28px] mb-[12px] font-semibold text-white">
            {data.name}
          </h4>
          <p className="text-sm md:text-[20px] text-zinc-300  mb-3">
            {data.role}
          </p>
          <p className="max-w-[420px] mt-[20px] md:max-w-[480px] text-[13.5px] md:text-[16px] leading-relaxed text-zinc-200">
            {data.text}
          </p>
        </div>
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
    <section className="py-16  max-w-[2000px] mx-auto lg:px-10">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 md:px-8">
        <span
          className="inline-block rounded-lg reviewsBTNBG px-6 py-2 text-[15px] md:text-[26px] font-semibold text-white/90
                     border border-white/15"
        >
          Réviews
        </span>

        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Slide left"
            onClick={handleLeftClick}
            className="left-arrow flex h-9 w-9 items-center justify-center rounded-full
                    transition"
          >
            <LeftArrow />
          </button>
          <button
            aria-label="Slide right"
            onClick={handleRightClick}
            className="right-arrow flex h-9 w-9 items-center justify-center rounded-full transition"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="pt-10 md:pt-20  pl-6 md:pl-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView="auto"
          centeredSlides={false}
          watchOverflow={true}
          loop={false}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },

            1600: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={i} className="w-[1082px]">
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
