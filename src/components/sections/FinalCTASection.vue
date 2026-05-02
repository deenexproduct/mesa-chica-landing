<template>
  <section
    id="luma"
    class="relative py-32 sm:py-40 px-6 sm:px-12 text-center overflow-hidden"
  >
    <!-- Glow background -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent"
    ></div>

    <div class="max-w-4xl mx-auto">
      <h2
        class="font-heading text-[clamp(3rem,8vw,7rem)] font-light italic leading-[0.95] tracking-tighter text-slate-900 mb-7"
      >
        Sumá tu <span class="text-primary">marca.</span>
      </h2>

      <div
        class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-10"
      >
        <span>30 marcas</span>
        <span class="text-primary">·</span>
        <span>Solo por invitación</span>
        <span class="text-primary">·</span>
        <span>Sujeto a aprobación</span>
      </div>

      <!-- CTA + counter -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
        <a
          :href="signupLink"
          target="_blank"
          rel="noopener noreferrer"
          id="signup-link"
          class="btn-final group inline-flex items-center gap-2 bg-primary text-white font-semibold rounded-xl px-7 py-4 text-[1rem] transition-all hover:bg-[#5346c7] shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 relative overflow-hidden"
        >
          <span class="btn-shimmer-final"></span>
          Anotarme
          <span
            class="inline-flex items-center justify-center w-5 h-5 rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
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

        <!-- Counter -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div class="font-heading font-extrabold text-primary text-[1.6rem] leading-none tracking-tight">
            <span class="tabular-nums">{{ occupied }}</span>
            <span class="text-slate-300 mx-1">/</span>
            <span class="tabular-nums text-slate-400">30</span>
          </div>
          <div class="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-400 mt-1.5">
            marcas inscriptas
          </div>
        </div>
      </div>

      <p class="mt-8 text-[0.78rem] font-mono tracking-wider text-slate-400">
        Inscripción sujeta a aprobación de los organizadores.
      </p>
    </div>
  </section>
</template>

<script setup>
// PLACEHOLDER: reemplazar con URL real del formulario cuando esté listo
const signupLink = "#";
// PLACEHOLDER: actualizar manualmente cuando cambien inscripciones
const occupied = 18;
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
