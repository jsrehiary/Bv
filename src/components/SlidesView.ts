import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export interface SlideItem {
  img: string;
}

interface SlidesViewOptions {
  containerClass: string;
  division: string;
  slidesPerView?: number;
}

/* ================= LOAD IMAGES ================= */

function loadDivisionStaff(division: string): SlideItem[] {
  const modules = import.meta.glob(
    "/src/assets/images/*/staff/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  return Object.entries(modules)
    .filter(([path]) => path.includes(`/images/${division}/staff/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]: any) => ({
      img: mod.default
    }));
}

/* ================= RENDER ================= */

export function renderSlidesView(options: SlidesViewOptions) {
  const { containerClass, division } = options;

  const data = loadDivisionStaff(division);

  return `
    <div class="swiper ${containerClass}">
      <div class="swiper-wrapper">

        ${data.map(item => `
          <div class="swiper-slide flex items-center justify-center">
            <img src="${item.img}" 
                 class="w-full h-[400px] object-contain select-none pointer-events-none transition-transform duration-300 hover:scale-105" />
          </div>
        `).join("")}

      </div>

      <div class="swiper-pagination"></div>
    </div>
  `;
}

/* ================= INIT ================= */

export function initSlidesView(options: SlidesViewOptions) {
  const { containerClass, slidesPerView = 3 } = options;

  new Swiper(`.${containerClass}`, {
    modules: [Pagination],
    slidesPerView,
    spaceBetween: 30,

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView }
    },

    pagination: {
      el: `.${containerClass} .swiper-pagination`,
      clickable: true,
    },

    grabCursor: true,
  });
}