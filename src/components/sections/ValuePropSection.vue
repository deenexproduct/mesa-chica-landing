<template>
  <section id="value" class="py-32 sm:py-40 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Qué te llevás
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            No es una <span class="text-primary italic font-light">charla</span>. Es una mesa.
          </h2>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in values"
          :key="i"
          class="group relative border border-slate-200 rounded-2xl p-7 sm:p-9 bg-white hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary font-bold mb-5"
          >
            {{ item.num }}
          </div>
          <h3
            class="font-heading text-[clamp(1.25rem,2vw,1.6rem)] font-extrabold tracking-tight leading-snug text-slate-900 mb-3"
          >
            <span v-html="item.title"></span>
          </h3>
          <p class="text-[0.95rem] text-slate-500 leading-relaxed">
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
    num: "Valor · 01",
    title: 'Lo que <em class="text-primary not-italic font-light italic">realmente</em> está funcionando.',
    text: "Tres founders mostrando con datos, no con teoría. Qué canal trae más, cuál se está saturando y cuál apenas arranca.",
  },
  {
    num: "Valor · 02",
    title: '30 marcas, <em class="text-primary not-italic font-light italic">curadas</em> a mano.',
    text: "Dueños de cadenas, gerentes comerciales, e-commerce managers, marketing y emprendedores del retail. Todos decisores. Cero proveedores.",
  },
  {
    num: "Valor · 03",
    title: 'Acceso directo, <em class="text-primary not-italic font-light italic">off the record</em>.',
    text: "Sin escenarios corporativos, sin moderador, sin pitch. Hablás de igual a igual con los founders y con el resto de la mesa.",
  },
  {
    num: "Valor · 04",
    title: 'Una <em class="text-primary not-italic font-light italic">foto</em> del retail argentino hoy.',
    text: "Salís con un mapa claro de venta, logística y plataformas. Qué hacer ya, qué probar y qué evitar este 2026.",
  },
];
</script>
