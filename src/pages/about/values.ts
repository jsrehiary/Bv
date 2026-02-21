import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function ValuesPage() {
  return `
    ${Navbar()}
    <div class=" p-15 md:px-16 overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">

        <div class="flex flex-col h-full">
          <h2 class="text-4xl font-bold text-center mb-10 text-black">Visi</h2>

          <div class="relative flex items-center grow">
            
            <div class="absolute  right-120 top-50 z-10 w-40 h-60 -translate-y-1/2  md:w-40 bg-gray-800 flex items-center justify-center shadow-lg">
              <svg class="w-20 h-20 text-black opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>

            <div class="bg-gray-400 py-8 pr-8 pl-40 md:pl-48 text-black shadow-sm w-full h-72 flex flex-col justify-center">
              <ol class="list-decimal list-outside leading-relaxed text-lg space-y-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Integer fringilla libero a turpis viverra vehicula.</li>
                <li>Sed ac pellentesque ligula, ac pharetra justo.</li>
              </ol>
            </div>

          </div>
        </div>


        <div class="flex flex-col h-full">
          <h2 class="text-4xl font-bold text-center mb-10 text-black">Misi</h2>

          <div class="relative flex items-center grow">
            
            <div class="absolute left-120 top-50 z-10 w-40 h-60 -translate-y-1/2  md:w-40  bg-gray-800 flex items-center justify-center shadow-lg">
              <svg class="w-20 h-20 text-black opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>

            <div class="bg-gray-400 py-8 pl-8 pr-40 md:pr-48 text-black shadow-sm w-full h-72 flex flex-col justify-center text-right">
              <div class="inline-block text-right">
                <ol class="list-decimal list-inside leading-relaxed text-lg space-y-3">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Fusce ullamcorper at arcu ut placerat. nulla facilisi.</li>
                </ol>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div>
        <div class="w-full h-10 bg-[#9baac7] my-15"></div>
        <div>
            <div class="flex justify-center mb-6">
                <h1>
                    NILAI-NILAI ORGANISASI
                </h1>
            </div>

            <div class=" p-8 w-full max-w-425 mx-auto flex flex-col gap-6 mb-20">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full"></div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-medium tracking-widest text-sm md:text-base">KEHARMONIAN</span>
                    </div>
                    
                    <div class="hidden md:block md:col-span-1"></div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="hidden md:block md:col-span-1"></div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-medium tracking-widest text-sm md:text-base">KEBERSAMAAN</span>
                    </div>
                    
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full"></div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full"></div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-medium tracking-widest text-sm md:text-base">KEHARMONIAN</span>
                    </div>
                    
                    <div class="hidden md:block md:col-span-1"></div>
                </div>
            </div>
        </div>
    </div>
    ${Footer()}
  `;
}