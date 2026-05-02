<template>
  <section id="location" class="py-24 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="mb-14">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Dónde
        </div>
        <h2
          class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
        >
          En el <span class="text-primary italic font-light">centro</span> de Córdoba.
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p
            class="font-heading text-[clamp(1.2rem,2vw,1.6rem)] font-light leading-snug text-slate-600 mb-6"
          >
            Un espacio íntimo, en el corazón de la ciudad. La dirección exacta se confirma
            por mail una vez que tu registro queda
            <span class="text-primary italic font-medium">aprobado</span>.
          </p>
          <p class="text-[0.95rem] text-slate-500 leading-relaxed">
            La sede está pensada para una conversación de mesa, no de auditorio. Cabemos
            30 personas exactas, cara a cara, sin tarima ni pantallas gigantes.
          </p>
        </div>

        <div
          class="border border-slate-200 rounded-2xl p-8 sm:p-10 bg-white shadow-sm hover:border-primary/20 transition-colors"
        >
          <div class="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-2">
            Coordenadas
          </div>
          <h3
            class="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-slate-900 tracking-tight mb-2"
          >
            <span class="text-primary italic font-light">Centro</span> · Córdoba Capital
          </h3>
          <p class="text-slate-500 mb-7">Sede confirmada a invitados aprobados.</p>

          <div class="border-t border-slate-100 pt-5 space-y-4">
            <div
              v-for="(row, i) in details"
              :key="i"
              class="flex items-center justify-between gap-4 text-[0.9rem]"
            >
              <span class="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-slate-400">
                {{ row.label }}
              </span>
              <span class="font-medium text-slate-700 text-right">{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// PLACEHOLDER: actualizar "Sede" cuando se confirme dirección
const details = [
  { label: "Fecha", value: "Sábado 16 de mayo de 2026" },
  { label: "Hora", value: "17:00 hs" },
  { label: "Capacidad", value: "30 personas" },
  { label: "Acceso", value: "Solo por invitación" },
  { label: "Costo", value: "Gratis" },
];
</script>
