<template>
  <section id="value" class="py-32 sm:py-40 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Qué te llevás del evento
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            Salís con un <span class="text-primary italic font-light">plan</span>, no con apuntes.
          </h2>
        </div>
        <div class="hidden lg:block max-w-[280px] text-right relative lg:ml-auto">
          <div class="absolute -left-10 top-0 bottom-0 w-px bg-slate-200/60"></div>
          <p class="text-slate-400 text-sm leading-relaxed pr-2">
            "Tres founders en escenario, datos reales y networking con 30 marcas decisoras. Eso es todo."
          </p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, i) in values"
          :key="i"
          class="group relative border border-slate-200 rounded-2xl p-7 sm:p-8 bg-white hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
        >
          <div
            class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary font-bold mb-4"
          >
            {{ item.num }}
          </div>
          <h3
            class="font-heading text-[clamp(1.15rem,1.5vw,1.35rem)] font-extrabold tracking-tight leading-snug text-slate-900 mb-3"
          >
            <span v-html="item.title"></span>
          </h3>
          <p class="text-[0.92rem] text-slate-500 leading-relaxed">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    num: "01 · Vender",
    title: 'Cómo <em class="not-italic font-light italic text-primary">vender</em> en 2026.',
    text: "Alan Tapia (Deenex) explica el playbook para construir tu canal propio sin pagar comisiones a marketplaces.",
  },
  {
    num: "02 · Mover",
    title: 'Cómo <em class="not-italic font-light italic text-primary">mover</em> tu producto.',
    text: "Matías Yoma (Puni) cómo armar logística de última milla sin perder margen ni quedar atado a las apps.",
  },
  {
    num: "03 · Crecer",
    title: 'Cómo <em class="not-italic font-light italic text-primary">crecer</em> en apps.',
    text: "Gabriel Chayle (Pimentón) qué mueve realmente la aguja en Rappi, PedidosYa, Uber Eats y Glovo.",
  },
  {
    num: "04 · Mapa",
    title: 'El <em class="not-italic font-light italic text-primary">mapa</em> del retail 2026.',
    text: "Qué canal está creciendo, cuál se está saturando y cuál apenas arranca. Datos concretos, no proyecciones.",
  },
  {
    num: "05 · Networking",
    title: 'Networking con <em class="not-italic font-light italic text-primary">30 decisores</em>.',
    text: "Dueños y gerentes del retail en una sala curada. Cero proveedores, cero pitch, cero curiosos.",
  },
  {
    num: "06 · Casos reales",
    title: 'Casos reales, <em class="not-italic font-light italic text-primary">no teoría</em>.',
    text: "Datos en vivo de marcas como Coquitos, Jumbo, Lo de Jesús y otras 1.500 que ya trabajan con los tres.",
  },
];
</script>
