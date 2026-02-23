import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function HomePage() {
  return `
    ${Navbar()}
        <div class="p-15 max-md:p-6">
            <div class="flex justify-between text-left items-center max-md:flex-col-reverse max-md:text-center max-md:gap-8">
                <div class="space-y-5 max-w-3xl max-md:w-full">
                    <h1 class="font-semibold max-md:text-2xl max-md:leading-tight">
                    Selamat Datang di BEM VOKASI UI
                    </h1>
                    <h2 class="max-md:text-lg max-md:leading-snug">
                    “Rajut Harmoni, Kuatkan Kolaborasi”
                    </h2>
                    <button class="bg-[#9baac7] rounded-4xl px-8 py-3 max-md:px-6 max-md:py-2">
                    <h3 class="font-semibold max-md:text-base">Learn More</h3>
                    </button>
                </div>
                <div class="max-md:w-56">
                     <img src="../../public/images/Maskot_utama.png" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        <div class="w-full h-10 bg-[#9baac7] max-md:h-4"></div>
        
        <div class="p-15 max-md:p-6">
            <div class="mt-15 max-md:mt-6 flex justify-between gap-10 max-md:flex-col">
                <div class="max-w-3xl space-y-5 max-md:w-full max-md:text-center">
                    <h1 class="font-semibold max-md:text-2xl max-md:leading-tight">
                    Tentang BEMVOK UI
                    </h1>
                    <h4 class="text-justify max-md:text-sm">
                        BEM Vokasi UI adalah penghubung antara permasalahan yang ada di Vokasi, cita-cita individu, dan potensi mahasiswa Vokasi UI. BEM Vokasi UI berusaha menjadi sebuah organisasi yang mampu memprakarsai dan menjadi penggerak awal sebagai jawaban untuk segala bentuk harapan yang dimiliki oleh seluruh konstituen Vokasi UI. BEM Vokasi UI juga akan mengambil peran penting untuk menjadi fasilitator yang memfasilitasi hal-hal yang sekiranya diperlukan oleh konstituen Vokasi UI
                    </h4>
                </div>
                <div class="w-4xl max-md:w-full">
                    <iframe class="w-full h-130 max-md:h-56 rounded-xl" src="https://www.youtube.com/embed/-Lmrj7brqzo" title="YouTube video"
                    frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div> 
        
        <div class="mt-10 mb-20 max-md:mb-10 w-full">
            
            <div class="w-full h-10 bg-[#9baac7] max-md:h-4"></div>
            
            <div class="w-full p-15 max-md:p-6">
                <h1 class="text-center font-bold mb-6 max-md:text-2xl max-md:mb-4">
                What's New?
                </h1>

                <div class="flex h-120 max-md:h-auto max-md:flex-col overflow-hidden max-md:rounded-2xl max-md:shadow-xl">
                    <div class="w-1/2 max-md:w-full max-md:h-56 relative">
                        <img src="https://picsum.photos/800/500" class="w-full h-full object-cover" />
                    </div>

                    <div class="w-1/2 max-md:w-full bg-gray-300 p-6 flex flex-col justify-center max-md:py-8 max-md:px-4 max-md:items-center max-md:text-center">
                        <p class="text-[80px] max-md:text-3xl font-bold mb-2 text-white max-md:leading-tight">
                        Nama Proker
                        </p>
                        <h3 class="mb-4 max-md:text-base max-md:leading-normal">
                        Deskripsi kegiatan, atau update dari kegiatan tersebut
                        </h3>
                        <button class="bg-[#9baac7] rounded-4xl px-8 py-3 w-fit max-md:px-6 max-md:py-2">
                        <h3 class="max-md:text-base font-bold">Learn More</h3>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
  ${Footer()}
  `;
}