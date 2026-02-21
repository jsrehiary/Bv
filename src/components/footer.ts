export function Footer(){
    return `
        <footer class="bg-[#2e2d2d] text-white py-6 px-10">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div class="flex justify-center md:justify-end md:pr-10">
            <img 
                src="/images/logo.png" 
                alt="Logo BEM Vokasi"
                class="w-36 md:w-40 object-contain"
            />
        </div>

        <div>
            <p class="text-xl font-bold mb-4 border-b-2 border-[#cca044] inline-block pb-1">
                BEM VOKASI UI
            </p>
            <p class="text-gray-200 leading-relaxed text-sm md:text-base">
                Jl. Akses Vokasi UI,<br>
                Kukusan, Kecamatan Beji,<br>
                Kota Depok, Jawa Barat<br>
                16424
            </p>
            <p class="mt-6 text-gray-200 text-sm md:text-base">
                E-mail:<br>
                bemvokasiui@gmail.com
            </p>
        </div>

        <div>
            <p class="text-xl font-bold mb-4 border-b-2 border-[#cca044] inline-block pb-1">
                OUR SOCIALS
            </p>
            <div class="mt-2 space-y-5">
                
                <div class="flex items-center gap-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" class="w-8 h-8 brightness-0 invert opacity-90">
                    <span class="text-gray-200 text-sm md:text-base">@bemvokasiui</span>
                </div>

                <div class="flex items-center gap-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" class="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                    <span class="text-gray-200 text-sm md:text-base">BEM Vokasi UI</span>
                </div>

                <div class="flex items-center gap-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" class="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                    <span class="text-gray-200 text-sm md:text-base">BEM Vokasi UI</span>
                </div>

            </div>
        </div>

    </div>
</footer>
    `;
}