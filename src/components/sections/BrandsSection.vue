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

      <!-- 3 founder stories -->
      <div class="grid lg:grid-cols-3 gap-5">
        <article
          v-for="(company, idx) in companies"
          :key="company.name"
          class="founder-card group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Subtle gradient bg -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/[0.04] pointer-events-none"
          ></div>

          <!-- Decorative number watermark -->
          <div
            class="absolute -top-4 -right-3 font-heading font-black text-[10rem] leading-[0.85] text-primary/[0.06] tracking-tighter pointer-events-none select-none transition-transform duration-700 group-hover:-translate-y-1 group-hover:text-primary/10"
          >
            0{{ idx + 1 }}
          </div>

          <!-- Top accent line on hover -->
          <div class="founder-accent"></div>

          <div class="relative p-7 sm:p-8 flex flex-col h-full">
            <!-- Canal tag -->
            <div
              class="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.16em] mb-5"
            >
              <span>0{{ idx + 1 }}</span>
              <span class="text-primary/40">·</span>
              <span>{{ company.canal }}</span>
            </div>

            <!-- Brand name + tagline -->
            <h3
              class="font-heading text-[2.4rem] sm:text-[2.6rem] font-extrabold tracking-tighter text-slate-900 leading-[0.95] mb-1.5"
            >
              {{ company.name }}
            </h3>
            <p class="text-[0.92rem] text-slate-500 mb-6 leading-snug">
              {{ company.tagline }}
            </p>

            <!-- Big stat block -->
            <div
              class="mb-6 px-5 py-4 rounded-2xl bg-gradient-to-br from-primary/[0.07] to-primary/[0.02] border border-primary/10"
            >
              <div class="flex items-baseline gap-1.5">
                <span
                  class="font-heading font-extrabold text-primary text-[2.6rem] sm:text-[2.8rem] leading-none tracking-tighter"
                >
                  {{ company.stat }}
                </span>
                <span
                  v-if="company.statSuffix"
                  class="font-heading font-bold text-primary/70 text-[1rem]"
                >
                  {{ company.statSuffix }}
                </span>
              </div>
              <div
                class="text-[0.72rem] uppercase tracking-[0.14em] text-slate-500 font-bold mt-2"
              >
                {{ company.statLabel }}
              </div>
            </div>

            <!-- Real logos -->
            <div class="flex-1 mb-6">
              <div
                class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400 font-bold mb-3"
              >
                Marcas que confían
              </div>
              <div class="flex flex-wrap gap-2 items-center">
                <div
                  v-for="logo in company.logos"
                  :key="logo.alt"
                  class="logo-chip h-10 px-2.5 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="max-h-[24px] w-auto object-contain max-w-[80px] grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Founder attribution -->
            <a
              :href="company.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="founder-attr group/attr pt-5 border-t border-slate-100 flex items-center justify-between gap-3 -mx-1 px-1"
            >
              <div>
                <div
                  class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-400 font-bold mb-1"
                >
                  En escenario
                </div>
                <div
                  class="font-heading font-extrabold text-slate-900 text-[1.05rem] tracking-tight group-hover/attr:text-primary transition-colors"
                >
                  {{ company.founder }}
                </div>
              </div>
              <span
                class="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-slate-400 group-hover/attr:bg-primary group-hover/attr:border-primary group-hover/attr:text-white transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Marquee logos — combinados de Deenex, Puni y Pimentón
const marqueeLogos = [
  // Deenex
  { src: new URL("../../assets/images/brands/coquitos.webp", import.meta.url).href, alt: "Coquitos" },
  { src: new URL("../../assets/images/brands/la-fabrica.webp", import.meta.url).href, alt: "La Fábrica" },
  { src: new URL("../../assets/images/brands/palta.webp", import.meta.url).href, alt: "Somos Palta" },
  { src: new URL("../../assets/images/brands/hatsu.webp", import.meta.url).href, alt: "Hatsu" },
  { src: new URL("../../assets/images/brands/glorias.webp", import.meta.url).href, alt: "Glorias" },
  { src: new URL("../../assets/images/brands/monti.webp", import.meta.url).href, alt: "Monti" },
  // Puni
  { src: new URL("../../assets/images/brands/puni_jumbo.png", import.meta.url).href, alt: "Jumbo" },
  { src: new URL("../../assets/images/brands/puni_disco.png", import.meta.url).href, alt: "Disco" },
  { src: new URL("../../assets/images/brands/puni_vea.png", import.meta.url).href, alt: "Vea" },
  { src: new URL("../../assets/images/brands/puni_ml.png", import.meta.url).href, alt: "Mercado Libre" },
  { src: new URL("../../assets/images/brands/puni_tn.png", import.meta.url).href, alt: "Tienda Nube" },
  // Pimentón
  { src: new URL("../../assets/images/brands/pimenton_rappi.png", import.meta.url).href, alt: "Rappi" },
  { src: new URL("../../assets/images/brands/pimenton_pedidosya.png", import.meta.url).href, alt: "PedidosYa" },
  { src: new URL("../../assets/images/brands/pimenton_ubereats.png", import.meta.url).href, alt: "Uber Eats" },
  { src: new URL("../../assets/images/brands/pimenton_glovo.png", import.meta.url).href, alt: "Glovo" },
  { src: new URL("../../assets/images/brands/pimenton_ifood.png", import.meta.url).href, alt: "iFood" },
  // Más Deenex
  { src: new URL("../../assets/images/brands/quem.webp", import.meta.url).href, alt: "Quem" },
  { src: new URL("../../assets/images/brands/emplatame.webp", import.meta.url).href, alt: "Emplátame" },
  { src: new URL("../../assets/images/brands/konex.webp", import.meta.url).href, alt: "Konex" },
  { src: new URL("../../assets/images/brands/sportclub.png", import.meta.url).href, alt: "SportClub" },
  { src: new URL("../../assets/images/brands/ayres.webp", import.meta.url).href, alt: "Ayres" },
  // Más Puni
  { src: new URL("../../assets/images/brands/puni_fgp.png", import.meta.url).href, alt: "FGP" },
  { src: new URL("../../assets/images/brands/puni_pedir.png", import.meta.url).href, alt: "Pedir" },
  // Más Pimentón
  { src: new URL("../../assets/images/brands/pimenton_didi.png", import.meta.url).href, alt: "DiDi Food" },
  { src: new URL("../../assets/images/brands/pimenton_justeat.png", import.meta.url).href, alt: "Just Eat" },
  { src: new URL("../../assets/images/brands/pimenton_deliveroo.png", import.meta.url).href, alt: "Deliveroo" },
  { src: new URL("../../assets/images/brands/pimenton_deliveryhero.png", import.meta.url).href, alt: "Delivery Hero" },
  { src: new URL("../../assets/images/brands/pimenton_otter.png", import.meta.url).href, alt: "Otter" },
  { src: new URL("../../assets/images/brands/pimenton_deliverect.png", import.meta.url).href, alt: "Deliverect" },
  // Partners (POS, pagos)
  { src: new URL("../../assets/images/brands/Maxirest.webp", import.meta.url).href, alt: "Maxirest" },
  { src: new URL("../../assets/images/brands/Odoo.webp", import.meta.url).href, alt: "Odoo" },
  { src: new URL("../../assets/images/brands/mp.png", import.meta.url).href, alt: "Mercado Pago" },
];

const companies = [
  {
    name: "Deenex",
    canal: "Vender",
    tagline: "Canal propio sin comisiones de marketplaces.",
    stat: "+500",
    statSuffix: "",
    statLabel: "Sucursales activas",
    logos: [
      { src: new URL("../../assets/images/brands/coquitos.webp", import.meta.url).href, alt: "Coquitos" },
      { src: new URL("../../assets/images/brands/la-fabrica.webp", import.meta.url).href, alt: "La Fábrica" },
      { src: new URL("../../assets/images/brands/palta.webp", import.meta.url).href, alt: "Somos Palta" },
      { src: new URL("../../assets/images/brands/hatsu.webp", import.meta.url).href, alt: "Hatsu" },
      { src: new URL("../../assets/images/brands/konex.webp", import.meta.url).href, alt: "Konex" },
    ],
    moreCount: 345,
    founder: "Alan Tapia",
    linkedin: "https://www.linkedin.com/in/alantapia/",
  },
  {
    name: "Puni",
    canal: "Mover",
    tagline: "Última milla justa, sin abusos de las apps.",
    stat: "+50K",
    statSuffix: "/ mes",
    statLabel: "Envíos en 4 provincias",
    logos: [
      { src: new URL("../../assets/images/brands/puni_jumbo.png", import.meta.url).href, alt: "Jumbo" },
      { src: new URL("../../assets/images/brands/puni_disco.png", import.meta.url).href, alt: "Disco" },
      { src: new URL("../../assets/images/brands/puni_vea.png", import.meta.url).href, alt: "Vea" },
      { src: new URL("../../assets/images/brands/puni_ml.png", import.meta.url).href, alt: "Mercado Libre" },
      { src: new URL("../../assets/images/brands/puni_tn.png", import.meta.url).href, alt: "Tienda Nube" },
    ],
    moreCount: 495,
    founder: "Matías Yoma",
    linkedin: "https://www.linkedin.com/in/matias-millicay-yoma-245860b9/",
  },
  {
    name: "Pimentón",
    canal: "Crecer",
    tagline: "Performance dentro de Rappi, PedidosYa, Uber Eats y Glovo.",
    stat: "+500",
    statSuffix: "marcas",
    statLabel: "Operación en LATAM + Europa",
    logos: [
      { src: new URL("../../assets/images/brands/pimenton_rappi.png", import.meta.url).href, alt: "Rappi" },
      { src: new URL("../../assets/images/brands/pimenton_pedidosya.png", import.meta.url).href, alt: "PedidosYa" },
      { src: new URL("../../assets/images/brands/pimenton_ubereats.png", import.meta.url).href, alt: "Uber Eats" },
      { src: new URL("../../assets/images/brands/pimenton_glovo.png", import.meta.url).href, alt: "Glovo" },
      { src: new URL("../../assets/images/brands/pimenton_ifood.png", import.meta.url).href, alt: "iFood" },
    ],
    moreCount: 495,
    founder: "Gabriel Chayle",
    linkedin: "https://www.linkedin.com/in/gabriel-francisco-chayle/",
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

.founder-card {
  position: relative;
}
.founder-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), #a78bfa);
  border-radius: 3px 3px 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}
.founder-card:hover .founder-accent {
  transform: scaleX(1);
}
.logo-chip {
  flex-shrink: 0;
}
</style>
