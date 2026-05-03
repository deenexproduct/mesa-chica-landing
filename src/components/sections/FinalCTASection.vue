<template>
  <section
    id="luma"
    class="relative py-24 sm:py-32 px-6 sm:px-8 overflow-hidden"
  >
    <!-- Soft background glow -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full"
      ></div>
      <div
        class="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-violet-300/15 blur-[120px] rounded-full"
      ></div>
    </div>

    <div class="relative max-w-5xl mx-auto">
      <!-- Card -->
      <div
        class="relative bg-white border border-slate-200 rounded-[2rem] shadow-xl shadow-primary/5 overflow-hidden"
      >
        <!-- Top decorative gradient -->
        <div
          class="h-1 bg-gradient-to-r from-primary via-violet-400 to-primary"
        ></div>

        <div class="p-8 sm:p-12 lg:p-16">
          <!-- Urgency pre-header -->
          <div
            class="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span
              class="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 sm:px-3.5 py-1 sm:py-1.5 text-[0.65rem] sm:text-[0.72rem] font-bold tracking-wide text-rose-600"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              Última llamada
            </span>
            <span
              class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 sm:px-3.5 py-1 sm:py-1.5 text-[0.65rem] sm:text-[0.72rem] font-bold tracking-wide text-slate-600"
            >
              Quedan {{ 30 - occupied }} lugares
            </span>
            <span
              class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 sm:px-3.5 py-1 sm:py-1.5 text-[0.65rem] sm:text-[0.72rem] font-bold tracking-wide text-emerald-700"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              100% Gratis
            </span>
          </div>

          <!-- Headline -->
          <h2
            class="text-center font-heading text-[clamp(3rem,8vw,6rem)] font-light italic leading-[0.95] tracking-tighter text-slate-900 mb-3"
          >
            Quiero <span class="text-primary">ir.</span>
          </h2>
          <p
            class="text-center font-heading text-[clamp(1rem,1.6vw,1.25rem)] text-slate-500 font-light italic mb-12 max-w-xl mx-auto"
          >
            El último click antes del 16 de mayo.
          </p>

          <!-- Progress bar visual -->
          <div class="max-w-2xl mx-auto mb-10">
            <div class="flex items-end justify-between mb-3">
              <div>
                <div
                  class="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1"
                >
                  Marcas inscriptas
                </div>
                <div class="flex items-baseline gap-1.5">
                  <span
                    class="font-heading font-extrabold text-primary text-[2.4rem] leading-none tracking-tighter tabular-nums"
                  >{{ occupied }}</span>
                  <span class="font-heading font-light text-slate-300 text-[1.6rem]">/</span>
                  <span
                    class="font-heading font-bold text-slate-400 text-[1.2rem] tabular-nums"
                  >30</span>
                </div>
              </div>
              <div
                class="font-mono text-[11px] uppercase tracking-[0.18em] text-primary font-bold pb-2"
              >
                {{ Math.round((occupied / 30) * 100) }}% completo
              </div>
            </div>
            <div
              class="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/70"
            >
              <div
                class="h-full bg-gradient-to-r from-primary via-violet-400 to-primary rounded-full transition-all duration-1000"
                :style="{ width: (occupied / 30) * 100 + '%' }"
              ></div>
            </div>
          </div>

          <!-- CTA -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10"
          >
            <a
              :href="signupLink"
              target="_blank"
              rel="noopener noreferrer"
              id="signup-link"
              class="btn-final group inline-flex items-center gap-2.5 bg-primary text-white font-bold rounded-2xl px-8 py-4 text-[1.05rem] transition-all hover:bg-[#5346c7] shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 relative overflow-hidden w-full sm:w-auto justify-center"
            >
              <span class="btn-shimmer-final"></span>
              Anotarme ahora
              <span
                class="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
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
            <p class="text-[0.78rem] text-slate-500 leading-snug max-w-[180px] text-center sm:text-left">
              Tarda menos de un minuto. Aprobación manual por mail.
            </p>
          </div>

          <!-- Info bar -->
          <div
            class="grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-slate-100 max-w-2xl mx-auto"
          >
            <div
              v-for="info in infoItems"
              :key="info.label"
              class="text-center sm:text-left"
            >
              <div
                class="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1.5"
              >
                {{ info.label }}
              </div>
              <div class="font-heading font-bold text-slate-900 text-[0.85rem] sm:text-[0.95rem] leading-tight">
                {{ info.value }}
              </div>
              <div
                v-if="info.sub"
                class="text-[0.7rem] text-slate-500 mt-0.5 leading-snug"
              >
                {{ info.sub }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// WhatsApp Alan Tapia (organizador) — single funnel for signups
const signupLink =
  "https://wa.me/5491154596266?text=" +
  encodeURIComponent(
    "Hola Alan! Quiero anotarme al evento del 16 de mayo en Córdoba. Mi nombre es ____ y mi marca es ____."
  );
// PLACEHOLDER: actualizar manualmente
const occupied = 18;

const infoItems = [
  { label: "Cuándo", value: "Sáb 16.05.2026", sub: "17:00 hs" },
  { label: "Dónde", value: "Centro de Córdoba", sub: "Sede a confirmar" },
  { label: "Acceso", value: "Solo invitación", sub: "Aprobación manual" },
];
</script>

<style scoped>
.btn-final {
  isolation: isolate;
}
.btn-shimmer-final {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.22) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmerFinal 3s ease-in-out infinite;
}
@keyframes shimmerFinal {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
