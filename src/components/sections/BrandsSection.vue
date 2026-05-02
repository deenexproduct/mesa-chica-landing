<template>
  <section id="brands" class="py-32 sm:py-40 px-6 sm:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-14 max-w-[820px] mx-auto">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Marcas que ya confían en los tres
        </div>
        <h2
          class="font-heading text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold tracking-tighter leading-tight text-slate-900"
        >
          Más de
          <span class="text-primary italic font-light">1.500 marcas</span> ya
          eligen a los founders que vas a ver en escenario.
        </h2>
      </div>

      <!-- Marquee de logos -->
      <div class="marquee-mask relative mb-16">
        <div class="marquee-track flex items-center gap-16 sm:gap-20">
          <img
            v-for="(logo, i) in marqueeLogos"
            :key="i"
            :src="logo.src"
            :alt="logo.alt"
            class="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
          <!-- Duplicado para loop continuo -->
          <img
            v-for="(logo, i) in marqueeLogos"
            :key="'dup-' + i"
            :src="logo.src"
            :alt="logo.alt"
            class="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- 3 columnas con detalle -->
      <div class="grid lg:grid-cols-3 gap-5">
        <div
          v-for="company in companies"
          :key="company.name"
          class="group relative bg-white border border-slate-200 rounded-3xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <!-- Logo grande de la empresa -->
          <div
            class="h-14 mb-5 flex items-center justify-start"
          >
            <span
              class="font-heading font-extrabold text-slate-900 text-[1.6rem] tracking-tight"
            >
              {{ company.name }}
            </span>
          </div>

          <!-- Tag categoría -->
          <div
            class="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-5"
          >
            {{ company.role }}
          </div>

          <!-- Stat principal -->
          <div class="mb-5 pb-5 border-b border-slate-100">
            <div
              class="font-heading font-extrabold text-primary text-[2.4rem] leading-none tracking-tighter"
            >
              {{ company.count }}
            </div>
            <div
              class="text-[0.7rem] uppercase tracking-[0.14em] text-slate-400 font-bold mt-1.5"
            >
              {{ company.countLabel }}
            </div>
          </div>

          <!-- Marcas destacadas -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="brand in company.brands"
              :key="brand"
              class="font-heading text-[0.85rem] text-slate-600 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
            >
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Marquee logos (los disponibles del repo Deenex)
const marqueeLogos = [
  { src: new URL("../../assets/images/brands/coquitos.webp", import.meta.url).href, alt: "Coquitos" },
  { src: new URL("../../assets/images/brands/la-fabrica.webp", import.meta.url).href, alt: "La Fábrica" },
  { src: new URL("../../assets/images/brands/palta.webp", import.meta.url).href, alt: "Somos Palta" },
  { src: new URL("../../assets/images/brands/hatsu.webp", import.meta.url).href, alt: "Hatsu" },
  { src: new URL("../../assets/images/brands/glorias.webp", import.meta.url).href, alt: "Glorias" },
  { src: new URL("../../assets/images/brands/monti.webp", import.meta.url).href, alt: "Monti" },
  { src: new URL("../../assets/images/brands/quem.webp", import.meta.url).href, alt: "Quem" },
  { src: new URL("../../assets/images/brands/emplatame.webp", import.meta.url).href, alt: "Emplátame" },
  { src: new URL("../../assets/images/brands/konex.webp", import.meta.url).href, alt: "Konex" },
  { src: new URL("../../assets/images/brands/sportclub.png", import.meta.url).href, alt: "SportClub" },
  { src: new URL("../../assets/images/brands/ayres.webp", import.meta.url).href, alt: "Ayres" },
  { src: new URL("../../assets/images/brands/Maxirest.webp", import.meta.url).href, alt: "Maxirest" },
  { src: new URL("../../assets/images/brands/Odoo.webp", import.meta.url).href, alt: "Odoo" },
  { src: new URL("../../assets/images/brands/mp.png", import.meta.url).href, alt: "Mercado Pago" },
];

const companies = [
  {
    name: "Deenex",
    role: "Vender · Canal propio",
    count: "+500",
    countLabel: "Sucursales activas",
    brands: ["Coquitos", "La Fábrica", "Somos Palta", "Hatsu", "Konex"],
  },
  {
    name: "Puni",
    role: "Mover · Logística",
    count: "+500",
    countLabel: "Clientes / +50K envíos mes",
    brands: ["Jumbo", "Disco", "Vea", "Mercado Libre", "Tienda Nube"],
  },
  {
    name: "Pimentón",
    role: "Crecer · Apps delivery",
    count: "+500",
    countLabel: "Marcas en LATAM + Europa",
    brands: ["Lo de Jesús", "Rappi", "PedidosYa", "Uber Eats", "Glovo"],
  },
];
</script>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 80px,
    black calc(100% - 80px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    black 80px,
    black calc(100% - 80px),
    transparent 100%
  );
  overflow: hidden;
}
.marquee-track {
  animation: marqueeScroll 40s linear infinite;
  width: max-content;
}
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-mask:hover .marquee-track {
  animation-play-state: paused;
}
</style>
