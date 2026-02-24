// components/HeroDivision.ts

interface HeroDivisionOptions {
  title: string;
  accentColor: string; 
  titleColor: string;
  description: string;
  image: string;
}

export function HeroDivision(options: HeroDivisionOptions) {
  const { title, accentColor, titleColor, description, image } = options;

  return `
    <div class="relative min-h-screen flex items-center px-6 md:px-20 bg-[url('/images/bg-pattern.png')] bg-cover bg-center">
      
      <!-- overlay -->
      <div class="absolute inset-0 bg-white/70"></div>

      <div class="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <!-- LEFT -->
        <div class="flex flex-col items-center">
          <img src="${image}" class="w-44 md:w-60" />

          <div 
            class="mt-6 px-10 py-3 text-white font-bold text-2xl tracking-widest"
            style="background-color: ${accentColor}"
          >
            ${title.split(" ")[0].toUpperCase()}
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <h1 
            class="text-4xl md:text-6xl font-extrabold"
            style="
              -webkit-text-stroke: 2px ${accentColor};
              color: ${titleColor};
            "
          >
            ${title}
          </h1>

          <div 
            class="mt-6 border-4 p-6 max-w-md bg-white/80"
            style="border-color: ${accentColor}"
          >
            <p class="text-gray-800 text-justify">
              ${description}
            </p>
          </div>
        </div>

      </div>
    </div>
  `;
}