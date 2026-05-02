<template>
  <section id="speakers" class="py-24 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
      >
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Line-up
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            Tres founders.<br />
            <span class="text-primary italic font-light">Tres miradas.</span>
          </h2>
        </div>
        <div class="hidden lg:block max-w-[280px] text-right relative lg:ml-auto">
          <div class="absolute -left-10 top-0 bottom-0 w-px bg-slate-200/60"></div>
          <p class="text-slate-400 text-sm leading-relaxed pr-2">
            "Cada uno representa una de las tres canchas donde se juega hoy el retail
            argentino."
          </p>
        </div>
      </div>

      <!-- Speaker cards -->
      <div class="grid md:grid-cols-3 gap-5">
        <article
          v-for="speaker in speakers"
          :key="speaker.name"
          class="speaker-card group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
        >
          <!-- Top accent line -->
          <div class="speaker-accent"></div>

          <div
            class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary font-bold mb-5"
          >
            {{ speaker.num }}
          </div>

          <!-- Photo placeholder -->
          <div
            class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center mb-5 overflow-hidden border border-slate-100 shadow-sm shadow-primary/20"
          >
            <span
              v-if="!speaker.photo"
              class="font-heading font-extrabold text-white text-3xl"
            >{{ speaker.initial }}</span>
            <img
              v-else
              :src="speaker.photo"
              :alt="speaker.name"
              class="w-full h-full object-cover"
            />
          </div>

          <h3 class="font-heading text-[1.5rem] font-extrabold text-slate-900 leading-tight tracking-tight mb-1">
            {{ speaker.name }}
          </h3>
          <div class="text-[0.75rem] uppercase tracking-[0.12em] font-bold text-primary mb-4">
            {{ speaker.role }}
          </div>

          <p
            class="font-heading italic text-[1rem] text-slate-600 leading-snug mb-4 pb-4 border-b border-slate-100"
          >
            "{{ speaker.talk }}"
          </p>
          <p class="text-[0.875rem] text-slate-500 leading-relaxed mb-5 flex-1">
            {{ speaker.bio }}
          </p>

          <div class="flex flex-wrap gap-x-5 gap-y-3 pt-2 border-t border-slate-100">
            <div v-for="(stat, i) in speaker.stats" :key="i" class="flex flex-col">
              <span class="font-heading font-extrabold text-primary text-[0.95rem] leading-none">{{ stat.value }}</span>
              <span class="text-[0.65rem] uppercase tracking-wider text-slate-400 mt-0.5 font-mono">{{ stat.label }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// PLACEHOLDER fotos: agregar URL en speaker.photo cuando estén disponibles
const speakers = [
  {
    num: "01 / Vender",
    name: "Alan Tapia",
    initial: "A",
    photo: null,
    role: "Founder & CEO · Deenex",
    talk:
      "Contexto, innovación y canal propio: por qué las cadenas tienen que dejar de pagar peaje.",
    bio:
      "Founder de Deenex, plataforma omnicanal para cadenas de foodservice y gastronomía. Ayuda a marcas a lanzar su canal propio (PWA, pedidos por WhatsApp, fidelización con CRM y marketing con IA), sin comisiones de marketplaces ni intermediarios.",
    stats: [
      { value: "+350", label: "clientes" },
      { value: "3 años", label: "en mercado" },
      { value: "Foodservice", label: "+ retail" },
    ],
  },
  {
    num: "02 / Mover",
    name: "Matías Yoma",
    initial: "M",
    photo: null,
    role: "Founder & CEO · Puni",
    talk:
      "Última milla: cómo se mueve hoy el retail argentino — y por qué las cadenas están repensando todo.",
    bio:
      "Founder de Puni, la red de logística on-demand cordobesa. Conecta comercios con repartidores locales en cuatro provincias bajo un modelo de logística justa, sin las comisiones abusivas de las apps tradicionales.",
    stats: [
      { value: "+500", label: "clientes" },
      { value: "+50K", label: "envíos / mes" },
      { value: "+250", label: "repartidores" },
    ],
  },
  {
    num: "03 / Crecer",
    name: "Gabriel Chayle",
    initial: "G",
    photo: null,
    role: "Country Manager AR · Pimentón",
    talk:
      "Crecer adentro de las apps: el juego real dentro de Rappi, PedidosYa, Uber Eats y Glovo.",
    bio:
      "Lidera la operación argentina de Pimentón, growth partner especializado en apps de delivery. Optimizan visibilidad, ticket promedio, conversión y recompra para marcas que venden en plataformas.",
    stats: [
      { value: "+500", label: "marcas" },
      { value: "+10", label: "plataformas" },
      { value: "LATAM", label: "+ Europa" },
    ],
  },
];
</script>

<style scoped>
.speaker-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 2px 2px 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.speaker-card:hover .speaker-accent {
  transform: scaleX(1);
}
</style>
