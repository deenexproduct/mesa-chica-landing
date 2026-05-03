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
            <button
              type="button"
              @click="openModal(company)"
              class="founder-attr group/attr w-full pt-5 border-t border-slate-100 flex items-center justify-between gap-3 -mx-1 px-1 cursor-pointer text-left"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-gradient-to-br from-primary to-violet-500 shadow-sm shadow-primary/10 flex items-center justify-center shrink-0"
                >
                  <img
                    v-if="company.photo"
                    :src="company.photo"
                    :alt="company.founder"
                    class="w-full h-full object-cover"
                  />
                  <span
                    v-else
                    class="font-heading font-extrabold text-white text-sm"
                  >{{ company.founder.charAt(0) }}</span>
                </div>
                <div>
                  <div
                    class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-400 font-bold mb-0.5"
                  >
                    En escenario
                  </div>
                  <div
                    class="font-heading font-extrabold text-slate-900 text-[1rem] tracking-tight group-hover/attr:text-primary transition-colors leading-tight"
                  >
                    {{ company.founder }}
                  </div>
                </div>
              </div>
              <span
                class="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 text-slate-400 group-hover/attr:bg-primary group-hover/attr:border-primary group-hover/attr:text-white transition-all shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Speaker Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedCompany"
          class="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            @click="closeModal"
          ></div>

          <!-- Dialog -->
          <div
            class="modal-card relative bg-white rounded-3xl shadow-2xl shadow-primary/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <!-- Close button -->
            <button
              type="button"
              @click="closeModal"
              class="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/95 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all"
              aria-label="Cerrar"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3l8 8M11 3l-8 8"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <!-- Top: photo + name -->
            <div
              class="relative p-7 sm:p-9 pb-6 bg-gradient-to-br from-primary/[0.05] via-white to-violet-50/40 border-b border-slate-100"
            >
              <div class="flex flex-col sm:flex-row items-start gap-5">
                <div
                  class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-100 bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/20 shrink-0"
                >
                  <img
                    v-if="selectedCompany.photo"
                    :src="selectedCompany.photo"
                    :alt="selectedCompany.founder"
                    class="w-full h-full object-cover"
                  />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center font-heading font-extrabold text-white text-4xl"
                  >
                    {{ selectedCompany.founder.charAt(0) }}
                  </div>
                </div>

                <div class="flex-1 min-w-0">
                  <div
                    class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.16em] mb-3"
                  >
                    {{ selectedCompany.canal }} · 0{{
                      selectedCompany.idx + 1
                    }} en escenario
                  </div>
                  <h3
                    class="font-heading font-extrabold text-slate-900 text-[1.6rem] sm:text-[1.85rem] leading-tight tracking-tight mb-1"
                  >
                    {{ selectedCompany.founder }}
                  </h3>
                  <p class="text-[0.92rem] text-slate-500 font-medium mb-4">
                    {{ selectedCompany.role }} ·
                    <a
                      :href="selectedCompany.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary hover:underline font-semibold"
                    >{{ selectedCompany.name }}</a>
                  </p>
                  <a
                    :href="selectedCompany.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0958a8] text-white text-[0.82rem] font-bold px-3.5 py-2 rounded-xl transition-all"
                  >
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      />
                    </svg>
                    Ver LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <!-- Body: startup info -->
            <div class="p-7 sm:p-9 space-y-6">
              <div>
                <div
                  class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 font-bold mb-2"
                >
                  Sobre {{ selectedCompany.name }}
                </div>
                <p class="text-slate-700 text-[0.95rem] leading-relaxed">
                  {{ selectedCompany.startupBio }}
                </p>
              </div>

              <!-- Stats grid -->
              <div class="grid grid-cols-3 gap-3">
                <div
                  v-for="(s, i) in selectedCompany.miniStats"
                  :key="i"
                  class="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div
                    class="font-heading font-extrabold text-primary text-[1.3rem] leading-none tracking-tight"
                  >
                    {{ s.value }}
                  </div>
                  <div
                    class="text-[0.65rem] uppercase tracking-[0.12em] text-slate-500 font-bold mt-1.5 leading-tight"
                  >
                    {{ s.label }}
                  </div>
                </div>
              </div>

              <!-- Talk on stage -->
              <div
                class="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.04] to-violet-100/30 p-5"
              >
                <div
                  class="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary font-bold mb-2 flex items-center gap-2"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Su charla en el evento · {{ selectedCompany.talkTime }}
                </div>
                <p
                  class="font-heading italic text-[1.05rem] text-slate-800 leading-snug"
                >
                  "{{ selectedCompany.talkTitle }}"
                </p>
              </div>

              <!-- Footer -->
              <div class="pt-2 flex items-center justify-between">
                <a
                  :href="selectedCompany.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-[0.82rem] text-slate-500 hover:text-primary font-semibold transition-colors"
                >
                  {{ selectedCompany.websiteLabel }}
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M3 10L10 3M10 3H4M10 3V9"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  @click="closeModal"
                  class="text-[0.82rem] text-slate-400 hover:text-slate-700 font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Modal state
const selectedIdx = ref(null);
const selectedCompany = computed(() =>
  selectedIdx.value !== null
    ? { ...companies[selectedIdx.value], idx: selectedIdx.value }
    : null
);

function openModal(company) {
  selectedIdx.value = companies.findIndex((c) => c.name === company.name);
  document.body.style.overflow = "hidden";
}
function closeModal() {
  selectedIdx.value = null;
  document.body.style.overflow = "";
}
function onEsc(e) {
  if (e.key === "Escape") closeModal();
}
onMounted(() => window.addEventListener("keydown", onEsc));
onUnmounted(() => {
  window.removeEventListener("keydown", onEsc);
  document.body.style.overflow = "";
});

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
    role: "Founder & CEO",
    photo: new URL("../../assets/images/speakers/alan-tapia.jpg", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/alantapia/",
    website: "https://deenex.tech/",
    websiteLabel: "deenex.tech",
    startupBio:
      "Plataforma omnicanal para cadenas de foodservice y gastronomía. Permite a marcas lanzar su canal propio de venta — PWA, pedidos por WhatsApp, fidelización con CRM y marketing con IA — sin pagar comisiones a marketplaces ni intermediarios.",
    miniStats: [
      { value: "+500", label: "Sucursales" },
      { value: "0%", label: "Comisión" },
      { value: "3 años", label: "En mercado" },
    ],
    talkTitle:
      "Contexto, innovación y canal propio: por qué las cadenas tienen que dejar de pagar peaje.",
    talkTime: "17:20 hs",
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
    role: "Founder & CEO",
    photo: new URL("../../assets/images/speakers/matias-yoma.jpg", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/matias-millicay-yoma-245860b9/",
    website: "https://www.puni.ar/",
    websiteLabel: "puni.ar",
    startupBio:
      "Red de logística on-demand cordobesa. Conecta comercios con repartidores locales en cuatro provincias bajo un modelo de logística justa, sin las comisiones abusivas de las apps tradicionales. Trabajan con cadenas como Jumbo, Disco, Vea, Mercado Libre y Tienda Nube.",
    miniStats: [
      { value: "+50K", label: "Envíos / mes" },
      { value: "+250", label: "Repartidores" },
      { value: "4", label: "Provincias" },
    ],
    talkTitle:
      "Última milla: cómo se mueve hoy el retail argentino — y por qué las cadenas están repensando todo.",
    talkTime: "17:50 hs",
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
    role: "Country Manager AR",
    photo: new URL("../../assets/images/speakers/gabriel-chayle.jpg", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/gabriel-francisco-chayle/",
    website: "https://www.pimenton.io/",
    websiteLabel: "pimenton.io",
    startupBio:
      "Growth partner especializado en apps de delivery. Optimiza visibilidad, ticket promedio, conversión y recompra para marcas que venden en plataformas como Rappi, PedidosYa, Uber Eats, Glovo, iFood y otras. Operación en LATAM y Europa.",
    miniStats: [
      { value: "+500", label: "Marcas" },
      { value: "+10", label: "Plataformas" },
      { value: "LATAM", label: "+ Europa" },
    ],
    talkTitle:
      "Crecer adentro de las apps: el juego real dentro de Rappi, PedidosYa, Uber Eats y Glovo.",
    talkTime: "18:20 hs",
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

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: translateY(20px) scale(0.97);
  opacity: 0;
}
</style>
