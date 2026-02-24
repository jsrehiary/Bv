// Essentials
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

// Components
import { HeroDivision } from "../../components/HeroDivision";
import { initCoverflowSwiper } from "../../components/CoverflowSwiper";
import { renderSlidesView, initSlidesView } from "../../components/SlidesView";

export function SenbudPage() {

  const coverflowData = [
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-KEPALA.png", name: "Naura Izati", role: "Kepala Biro" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-1.png", name: "Arnoldi Hernandes", role: "Wakil Kepala 1" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-2.png", name: "Bening Andara", role: "Wakil Kepala 2" },
  ];

  const html = `
    ${Navbar()}

    ${HeroDivision({
    title: "Departemen Seni dan Budaya",
    accentColor: "#4b4a92",
    titleColor: "#F77C39",
    description: "Berperan sebagai wadah IKM Vokasi UI menyalurkan dan mengembangkan minat serta bakat di bidang seni dan budaya. Mereka hadir bukan hanya sebagai wadah ekspresi, tetapi juga ruang tumbuh yang merayakan keberagaman dan kekayaan budaya di lingkungan Vokasi UI.",
    image: "/images/senbud-logo.png"
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

      <div class="swiper theSwiper w-full md:w-[60%]">
        <div class="swiper-wrapper"></div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-10">
        STAFF
      </h2>

      ${renderSlidesView({
    containerClass: "theSlides",
    division: "senbud",
    slidesPerView: 4
  })}
    </div>

    ${Footer()}
  `;

  queueMicrotask(() => {
    initCoverflowSwiper({
      containerClass: ".theSwiper",
      data: coverflowData,
      preview: {
        imageId: "mainPreview",
        nameId: "mainName",
        roleId: "mainRole"
      }
    });

    initSlidesView({
      containerClass: "theSlides",
      division: "senbud",
      slidesPerView: 4
    });
  });

  return html;
}