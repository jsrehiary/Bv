// components/CoverflowSwiper.ts

import Swiper from "swiper";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export interface CoverflowItem {
  img: string;
  name: string;
  role: string;
}

interface PreviewTargets {
  imageId: string;
  nameId: string;
  roleId: string;
}

interface CoverflowOptions {
  containerClass: string;
  data: CoverflowItem[];
  preview?: PreviewTargets;   // 🔥 optional preview binding
}

export function initCoverflowSwiper(options: CoverflowOptions) {
  const { containerClass, data, preview } = options;

  const container = document.querySelector(containerClass);
  if (!container) return;

  const wrapper = container.querySelector(".swiper-wrapper") as HTMLElement;
  if (!wrapper) return;

  /* ================= RENDER ================= */

  wrapper.innerHTML = data.map(item => `
    <div class="swiper-slide relative rounded-lg overflow-hidden group">

      <img src="${item.img}" 
           class="w-full h-[400px] object-contain select-none pointer-events-none" />

      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>

      <div class="absolute bottom-3 left-3 text-white">
        <h4 class="text-sm font-semibold leading-tight">${item.name}</h4>
        <p class="text-xs opacity-80">${item.role}</p>
      </div>

    </div>
  `).join("");

  /* ================= PREVIEW ELEMENTS ================= */

  const previewImage = preview ? document.getElementById(preview.imageId) as HTMLImageElement : null;
  const previewName = preview ? document.getElementById(preview.nameId) : null;
  const previewRole = preview ? document.getElementById(preview.roleId) : null;

  function updatePreview(index: number) {
    if (!preview || !previewImage || !previewName || !previewRole) return;

    const item = data[index];

    previewImage.classList.add("opacity-0");

    setTimeout(() => {
      previewImage.src = item.img;
      previewName.textContent = item.name;
      previewRole.textContent = item.role;
      previewImage.classList.remove("opacity-0");
    }, 150);
  }

  /* ================= INIT SWIPER ================= */

  const swiper = new Swiper(containerClass, {
    modules: [EffectCoverflow],
    loop: false,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    effect: "coverflow",
    grabCursor: true,

    coverflowEffect: {
      rotate: 30,
      depth: 90,
      modifier: 1.1,
      slideShadows: true,
    },

    on: {
      init: (swiper) => updatePreview(swiper.realIndex),
      realIndexChange: (swiper) => updatePreview(swiper.realIndex)
    }
  });

  return swiper;
}