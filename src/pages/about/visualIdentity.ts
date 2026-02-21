import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function VisualIdentity() {

  return `

    ${Navbar()}
    <div class="p-15 pt-0">
        <div class="flex justify-center gap-20">
        <div class="flex space-x-10">
            <div>
                <img src="/images/logo.png" alt="Logo BEM Vokasi" class="w-64 md:w-86" />
            </div>
            <div class="max-w-md pt-10">
                <h1>Tentang Logo</h1>
                <h2>“Rajut Harmoni, Kuatkan Kolaborasi”</h2>
            </div>
        </div>
            <div>
                <div class="p-8 md:p-16 mt-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-2xl">

                        <div class="flex flex-col items-start">
                        <div class="w-16 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <p class="mt-4 text-gray-700 leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>

                        <div class="flex flex-col items-start">
                        <div class="w-16 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <p class="mt-4 text-gray-700 leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>

                        <div class="flex flex-col items-start">
                        <div class="w-16 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <p class="mt-4 text-gray-700 leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>

                        <div class="flex flex-col items-start">
                        <div class="w-16 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <p class="mt-4 text-gray-700 leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-20">
        <div class="w-full h-10 bg-[#9baac7]"></div>
            <div class="p-15">

                <!-- TITLE -->
                <div class="flex justify-center">
                    <div class="text-center">
                    <h1 class="text-5xl font-bold">MEET VOKSY!</h1>
                    <h2 class="text-3xl">Our Mascot</h2>
                    </div>
                </div>

                <!-- CONTENT -->
                <div class="flex justify-between items-center mt-10">

                    <!-- BOX BESAR -->
                    <div class="w-5xl h-120 bg-[#9baac7]">
                    
                    </div>

                    <!-- BOX KECIL -->
                    <div class="w-2xl h-90 bg-[#9baac7]">

                    </div>

                </div>
            </div>
    </div>

    ${Footer()}
  `;
}