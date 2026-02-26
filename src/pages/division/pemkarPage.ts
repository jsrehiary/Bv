// Essentials
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

// Components
import { HeroDivision } from "../../components/HeroDivision";
import { initCoverflowSwiper } from "../../components/CoverflowSwiper";
import { renderSlidesView, initSlidesView } from "../../components/SlidesView";

export function PemkarPage() {

  const coverflowData = [
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-KEPALA-1.jpg", name: "Keisha Alia", role: "Kepala Biro" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-1-1.jpg", name: "Maria Jessica", role: "Wakil Kepala 2" },
    { img: "src/assets/images/bph/FRAME-BG-BPH-PREVIEW-WK-2-1.jpg", name: "Fathia Asy", role: "Wakil Kepala 1" },
  ];

  const html = `
    ${Navbar()}

    ${HeroDivision({
      title: "Departemen Pengembangan Karir",
      accentColor: "#F64994",
      titleColor: "#4b4a92",
      description: "Berperan sebagai wadah pengembangan keterampilan dan membantu membuka kesempatan untuk mahasiswa Vokasi UI dalam mempersiapkan kariernya. Pemkar juga membantu mahasiswa menentukan arah karier ke depannya agar lebih terarah dan siap menghadapi tantangan di dunia kerja nanti.",
      image: "/images/dkv-logo.png"
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

      <div class="swiper pemkarSwiper w-full md:w-[60%]">
        <div class="swiper-wrapper"></div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-10">
        STAFF
      </h2>

      ${renderSlidesView({
        containerClass: "pemkarSlides",
        division: "pemkar",
        slidesPerView: 4
      })}
    </div>

    ${Footer()}
  `;

  queueMicrotask(() => {
    initCoverflowSwiper({
      containerClass: ".pemkarSwiper",
      data: coverflowData,
      preview: {
        imageId: "mainPreview",
        nameId: "mainName",
        roleId: "mainRole"
      }
    });

    initSlidesView({
      containerClass: "pemkarSlides",
      division: "pemkar",
      slidesPerView: 4
    });
  });

  return html;
}