import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function VisualIdentity() {
  return `
    ${Navbar()}

    <div class="p-10 max-md:p-6">

      <div class="flex flex-col md:flex-row justify-center gap-10 md:gap-16 items-center md:items-start lg:items-center">

        <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-md:text-center w-full md:w-auto">
          
          <img src="/images/logo.png" alt="Logo BEM Vokasi" class="w-48 max-md:w-56 md:w-64 lg:w-80 object-contain drop-shadow-md" />

          <div class="max-w-md space-y-2 md:space-y-4">
            <h1 class="font-bold max-md:text-3xl max-md:leading-tight">Tentang Logo</h1>
            <h2 class="max-md:text-xl max-md:leading-snug">“Rajut Harmoni, Kuatkan Kolaborasi”</h2>
          </div>
        </div>

        <div class="p-2 md:p-8 w-full max-w-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            ${CardImg("Kepala Rubah", [
              "Api yang menyatu dengan kepala Voksy melambangkan semangat yang menyala dan tidak padam, mencerminkan integritas dan dedikasi dalam mengabdi.",
              "Bentuk dasar logo menyerupai obor, simbol kepemimpinan dan pencerahan, menjadikan BEM sebagai garda terdepan dalam membawa manfaat dan arah bagi IKM Vokasi UI."
            ])}

            ${CardImg("Api & Obor", [
              "Api yang menyatu dengan kepala Voksy melambangkan semangat yang menyala dan tidak padam, mencerminkan integritas dan dedikasi dalam mengabdi.",
              "Bentuk dasar logo menyerupai obor, simbol kepemimpinan dan pencerahan, menjadikan BEM sebagai garda terdepan dalam membawa manfaat dan arah bagi IKM Vokasi UI."
            ])}

            ${CardColor("#264c9d", "Merepresentasikan Rumpun Administratif", [
              "Mewakili kecermatan, stabilitas, dan profesionalisme.",
              "Melambangkan rumpun Administratif, yang identik dengan tata kelola, manajemen, dan sistem.",
              "Warna biru juga menekankan sikap tenang, analitis, dan bertanggung jawab dalam menjalankan roda organisasi."
            ])}

            ${CardColor("#fe9430", "Merepresentasikan Rumpun Humaniora", [
              "Melambangkan semangat, kreativitas, dan kehangatan.",
              "Merepresentasikan rumpun Humaniora, yang menekankan nilai-nilai sosial, komunikasi, dan seni.",
              "Juga menggambarkan semangat berkarya dan berinteraksi secara inklusif di lingkungan kampus."
            ])}

            <div class="md:col-span-2 flex justify-center max-md:justify-start">
              ${CardColor("#1da548", "Merepresentasikan Rumpun Kesehatan", [
                "Melambangkan kesegaran, pertumbuhan, harmoni, dan keberlanjutan.",
                "Mewakili rumpun Kesehatan, menegaskan pentingnya keseimbangan, kolaborasi, dan kepedulian sosial.",
                "Bentuk melengkung seperti daun menyimbolkan dukungan dan perlindungan—mencerminkan peran BEM sebagai representasi mahasiswa."
              ], true)}
            </div>

          </div>
        </div>

      </div>

    </div>

    <div class="w-full h-10 max-md:h-4 bg-[#9baac7] my-10 md:my-16"></div>

    <div class="mb-20 p-10 max-md:p-6">

      <div class="flex justify-center text-center mb-10 max-md:mb-6">
        <div>
          <h1 class="font-bold max-md:text-4xl max-md:leading-tight">MEET VOKSY!</h1>
          <h2 class="max-md:text-2xl max-md:leading-snug">Our Mascot</h2>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
        <div class="w-full md:flex-1 h-64 md:h-120 bg-[#9baac7] rounded-xl"></div>
        <div class="w-full md:w-200 h-64 md:h-94 bg-[#9baac7] rounded-xl"></div>
      </div>

    </div>

    ${Footer()}
  `;
}

/* ================= CARD IMAGE ================= */
// Tambahan: max-md:items-center & max-md:text-center agar rapi saat dibuka di HP
function CardImg(title: string, items: string[]) {
  return `
    <div class="flex flex-col items-start max-md:items-center max-md:text-center hover:-translate-y-1 transition duration-300">

      <div class="w-16 h-15 flex items-center justify-center">
        <img src="/images/logo.png" class="w-8 md:w-10 object-contain" />
      </div>

      <p class="mt-2 md:mt-4 font-semibold text-left max-md:text-center text-lg">${title}</p>

      <ol class="list-disc text-sm space-y-2 text-left max-h-32 md:max-h-24 overflow-y-auto custom-scroll pr-2 mt-2">
        ${items.map(i => `<li class="ml-4 md:ml-0">${i}</li>`).join("")}
      </ol>

    </div>
  `;
}

/* ================= CARD COLOR ================= */
// Tambahan: max-md:items-center & max-md:text-center agar rapi saat dibuka di HP
function CardColor(color: string, title: string, items: string[], center = false) {
  return `
    <div class="flex flex-col ${center ? "items-center text-center" : "items-start max-md:items-center max-md:text-center"} hover:-translate-y-1 transition duration-300 w-full">

      <div class="w-16 h-12 rounded-lg shadow-sm" style="background:${color}"></div>

      <p class="mt-2 md:mt-4 font-semibold text-lg ${center ? "" : "text-left max-md:text-center"}">${title}</p>

      <ol class="list-disc text-sm space-y-2 text-left max-h-32 md:max-h-24 overflow-y-auto custom-scroll pr-2 mt-2 ${center ? "max-w-xs" : ""}">
        ${items.map(i => `<li class="ml-4 md:ml-0">${i}</li>`).join("")}
      </ol>

    </div>
  `;
}