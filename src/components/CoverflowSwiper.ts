// views/components/CoverflowSwiper.ts

import Swiper from "swiper";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
// just ignore the error if it still persists anyway...

export interface CoverflowItem {
  img: string;
  name: string;
  role: string;
}

interface CoverflowOptions {
  containerClass: string;       // class swiper container
  data: CoverflowItem[];
  onChange?: (item: CoverflowItem, index: number) => void;
}

export function initCoverflowSwiper(options: CoverflowOptions) {
  const { containerClass, data, onChange } = options;

  const container = document.querySelector(containerClass);
  if (!container) return;

  const wrapper = container.querySelector(".swiper-wrapper") as HTMLElement;
  if (!wrapper) return;

  /* ================= RENDER ================= */

  wrapper.innerHTML = data.map(item => `
    <div class="swiper-slide relative rounded-lg overflow-hidden group">

      <img src="${item.img}" 
           class="w-full h-auto object-contain select-none pointer-events-none" />

      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>

      <div class="absolute bottom-3 left-3 text-white">
        <h4 class="text-sm font-semibold leading-tight">${item.name}</h4>
        <p class="text-xs opacity-80">${item.role}</p>
      </div>

    </div>
  `).join("");

  /* ================= INIT ================= */

  const swiper = new Swiper(containerClass, {
    modules: [EffectCoverflow],
    loop: false,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    effect: "coverflow",
    grabCursor: true,

    threshold: 15,
    shortSwipes: false,
    longSwipesRatio: 0.35,

    resistance: true,

    coverflowEffect: {
      rotate: 30,
      depth: 90,
      modifier: 1.1,
      slideShadows: true,
    },

    on: {
      init: (swiper) => {
        const index = swiper.realIndex;
        onChange?.(data[index], index);
      },
      realIndexChange: (swiper) => {
        const index = swiper.realIndex;
        onChange?.(data[index], index);
      }
    }
  });

  return swiper;
}