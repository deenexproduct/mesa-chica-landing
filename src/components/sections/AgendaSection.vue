<template>
  <section id="agenda" class="py-24 px-6 sm:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Cómo se va a desarrollar
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            La <span class="text-primary italic font-light">jornada</span>.
          </h2>
        </div>
        <div class="hidden lg:block max-w-[280px] text-right relative lg:ml-auto">
          <div class="absolute -left-10 top-0 bottom-0 w-px bg-slate-200/60"></div>
          <p class="text-slate-400 text-sm leading-relaxed pr-2">
            "Tres horas y media de conversación continua. Sin coffee break formal."
          </p>
        </div>
      </div>

      <div class="border-t border-slate-200">
        <div
          v-for="(block, i) in blocks"
          :key="i"
          class="agenda-row group grid grid-cols-[80px_1fr_auto] sm:grid-cols-[140px_1fr_auto] gap-4 sm:gap-8 py-6 sm:py-7 border-b border-slate-200 transition-all duration-300 hover:bg-primary/[0.03] hover:px-3 cursor-default"
        >
          <div class="font-mono text-[0.85rem] sm:text-[0.95rem] text-primary font-bold tracking-wide pt-1">
            {{ block.time }}
          </div>
          <div>
            <h3
              class="font-heading text-[clamp(1.05rem,1.7vw,1.4rem)] font-extrabold tracking-tight text-slate-900 leading-snug"
            >
              <span v-if="block.bold" class="text-primary italic font-light">{{ block.bold }} </span>{{ block.title }}
            </h3>
            <p class="text-[0.85rem] text-slate-500 mt-1 leading-relaxed">
              {{ block.note }}
            </p>
          </div>
          <div
            class="hidden sm:flex items-start font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-400 pt-2"
          >
            {{ block.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blocks = [
  {
    time: "17:00",
    bold: "",
    title: "Acreditación & bienvenida",
    note: "Llegada, café y primer contacto entre los 30 invitados.",
    duration: "20 min",
  },
  {
    time: "17:20",
    bold: "01 / Vender —",
    title: "Alan Tapia (Deenex)",
    note: "Contexto económico, innovación y canal propio.",
    duration: "30 min",
  },
  {
    time: "17:50",
    bold: "02 / Mover —",
    title: "Matías Yoma (Puni)",
    note: "Logística, última milla y la cadena cordobesa.",
    duration: "30 min",
  },
  {
    time: "18:20",
    bold: "03 / Crecer —",
    title: "Gabriel Chayle (Pimentón)",
    note: "El juego adentro de las apps de delivery.",
    duration: "30 min",
  },
  {
    time: "18:50",
    bold: "",
    title: "Debate abierto entre los tres",
    note: "Se tocan todos los temas. Sin filtros, sin moderador.",
    duration: "45 min",
  },
  {
    time: "19:35",
    bold: "",
    title: "Networking",
    note: "Tragos, charlas y cierre.",
    duration: "hasta cierre",
  },
];
</script>
