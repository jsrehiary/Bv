// Essentials
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

// Components
import { HeroDivision } from "../../components/HeroDivision";
import { initCoverflowSwiper } from "../../components/CoverflowSwiper";
import { renderSlidesView, initSlidesView } from "../../components/SlidesView";

export function LitbangPage() {

  const coverflowData = [
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-KEPALA-2.png", name: "Sabrina Indah", role: "Kepala Biro" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-1-2.png", name: "Nadia Syifa", role: "Wakil Kepala 1" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-2-2.png", name: "Rasyad Amrullah", role: "Wakil Kepala 2" },
  ];

  const html = `
    ${Navbar()}

    ${HeroDivision({
    title: "Biro Penelitian dan Pengembangan",
    accentColor: "#4b4a92",
    titleColor: "#F77C39",
    description: "Mempunyai peran penting dalam memastikan setiap proses program kerja berjalan dengan transparan, penuh inovasi, dan tetap netral. Litbang juga terus bertransformasi menjadi pusat data yang terpercaya. Mereka menyajikan informasi yang akurat sekaligus membuka ruang kolaborasi progresif untuk seluruh IKM Vokasi UI. Bersama Litbang, setiap langkah BEM Vokasi UI 2025 jadi lebih terukur, terarah, dan siap membawa dampak nyata!",
    image: "/images/litbang-logo.png"
  })}

    <div class="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-10">

      <div class="w-full md:w-[40%] max-w-[500px]">
        <div class="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          <img id="mainPreview"
              class="h-[600px] max-w-full object-contain transition-opacity duration-300" />
        </div>

        <div class="mt-4 text-center md:text-left">
          <h3 id="mainName" class="text-xl font-bold"></h3>
          <p id="mainRole" class="text-gray-600"></p>
        </div>
      </div>

      <div class="swiper litbangSwiper w-full md:w-[60%]">
        <div class="swiper-wrapper"></div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-10">
        STAFF
      </h2>

      ${renderSlidesView({
    containerClass: "litbangSlides",
    division: "litbang",
    slidesPerView: 4
  })}
    </div>

    ${Footer()}
  `;

  queueMicrotask(() => {
    initCoverflowSwiper({
      containerClass: ".litbangSwiper",
      data: coverflowData,
      preview: {
        imageId: "mainPreview",
        nameId: "mainName",
        roleId: "mainRole"
      }
    });

    initSlidesView({
      containerClass: "litbangSlides",
      division: "litbang",
      slidesPerView: 4
    });
  });

  return html;
}