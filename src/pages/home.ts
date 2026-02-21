import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function HomePage() {
    return `
    ${Navbar()}
        <div class="p-15">
            <div class="flex justify-between text-left">
                <div class="space-y-5 max-w-3xl">
                    <h1 class="text-xl font-semibold">
                    Selamat Datang di BEM VOKASI UI
                    </h1>
                    <h2 class="">
                    “Rajut Harmoni, Kuatkan Kolaborasi”
                    </h2>
                    <button class="bg-[#9baac7] rounded-4xl px-8 py-3">
                    <h3 class="font-semibold">Learn More</h3>
                    </button>
                </div>
                <div>
                
                </div>
            </div>

            <div class="mt-40 flex justify-between">
                <div class="max-w-3xl space-y-5">
                    <h1 class="font-semibold">
                    Tentang BEMVOK UI
                    </h1>
                    <h3 class="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula.
                    Sed ac pellentesque ligula, ac pharetra justo. interdum venenatis quam. Fusce ullamcorper at arcu ut placerat.
                    Nulla facilisi.
                    </h3>
                </div>
                <div class="w-5xl">
                    <iframe class="w-full h-130 rounded-xl" src="https://www.youtube.com/embed/hK82hfN_ymQ" title="YouTube video"
                    frameborder="0" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div> <div class="mt-20 mb-40 w-full">
            
            <div class="w-full h-10 bg-[#9baac7]"></div>
            
            <div class="w-full p-15">
                <h1 class="text-center text-2xl font-bold mb-6">
                What's New?
                </h1>

                <div class="flex h-120 overflow-hidden">
                    <div class="w-1/2 relative">
                        <img src="https://picsum.photos/800/500" class="w-full h-full object-cover" />
                    </div>

                    <div class="w-1/2 bg-gray-300 p-6 flex flex-col justify-center">
                        <p class="text-[80px] font-bold mb-2 text-white">
                        Nama Proker
                        </p>
                        <h3 class="mb-4">
                        Deskripsi kegiatan, atau update dari kegiatan tersebut
                        </h3>
                        <button class="bg-[#9baac7] rounded-4xl px-8 py-3 w-fit">
                        <h3>Learn More</h3>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
  ${Footer()}
  `;
}