<template>
  <section id="brands" class="py-24 px-6 sm:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14 max-w-[760px] mx-auto">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Marcas que ya confían en los tres
        </div>
        <h2
          class="font-heading text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold tracking-tighter leading-tight text-slate-900"
        >
          Más de
          <span class="text-primary italic font-light">1.350 marcas combinadas</span> ya
          trabajan con los founders que vas a conocer.
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-5">
        <div
          v-for="company in companies"
          :key="company.name"
          class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-primary/30 transition-colors"
        >
          <div class="flex items-baseline justify-between mb-5 pb-4 border-b border-slate-100">
            <h3 class="font-heading text-[1.4rem] font-extrabold text-slate-900 tracking-tight">
              {{ company.name }}
            </h3>
            <span class="font-mono text-[0.7rem] text-primary font-bold tracking-wider">
              {{ company.count }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="brand in company.brands"
              :key="brand"
              class="font-heading text-[0.95rem] text-slate-600 px-3.5 py-1.5 border border-slate-200 rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {{ brand }}
            </span>
            <span
              class="font-heading italic text-[0.9rem] text-slate-400 px-3.5 py-1.5 border border-dashed border-slate-200 rounded-full"
            >
              {{ company.more }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  {
    name: "Deenex",
    count: "+350 clientes",
    brands: ["Coquitos", "LaFabrica", "Somos Palta"],
    more: "+ 347 más",
  },
  {
    name: "Puni",
    count: "+500 clientes",
    brands: ["Jumbo", "Disco", "Vea", "Mercado Libre", "Tienda Nube"],
    more: "+ 495 más",
  },
  {
    name: "Pimentón",
    count: "+500 marcas",
    brands: ["Lo de Jesús", "Rappi", "PedidosYa", "Uber Eats", "Glovo"],
    more: "+ 495 más",
  },
];
</script>
