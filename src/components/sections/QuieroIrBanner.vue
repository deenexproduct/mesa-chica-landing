<template>
  <section
    id="quiero-ir-banner"
    class="relative py-20 sm:py-24 px-6 sm:px-12 overflow-hidden"
  >
    <!-- Glow accents -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full"
      ></div>
      <div
        class="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-violet-300/10 blur-[100px] rounded-full"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto">
      <div
        class="relative bg-primary text-white rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center md:items-stretch gap-7 md:gap-10"
      >
        <!-- Inner glow -->
        <div
          class="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-white/15 to-transparent blur-2xl opacity-40"
        ></div>
        <div
          class="pointer-events-none absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-t from-white/10 to-transparent blur-2xl opacity-30"
        ></div>

        <!-- Texto -->
        <div class="flex-1 text-center md:text-left relative">
          <div
            class="inline-flex items-center gap-2 mb-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/70 font-bold"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse"></span>
            Sábado 16.05.2026 · 17 hs
          </div>
          <h2
            class="font-heading text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            ¿Te lo vas a perder, en serio?
          </h2>
          <p class="mt-2 text-white/80 text-[0.95rem] sm:text-[1rem] leading-snug">
            Quedan {{ 30 - occupied }} lugares.
            <span class="font-bold text-white">Es gratis</span>, pero la
            inscripción pasa por aprobación manual.
          </p>
        </div>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row items-center gap-4 relative">
          <a
            :href="signupLink"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 bg-white text-primary font-bold rounded-xl px-7 py-4 text-[0.95rem] transition-all hover:bg-slate-50 hover:-translate-y-0.5 shadow-xl shadow-black/10"
          >
            Quiero ir
            <span
              class="inline-flex items-center justify-center w-5 h-5 rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
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

          <div class="text-center sm:text-left">
            <div class="font-heading font-extrabold text-white text-[1.4rem] leading-none tracking-tight">
              <span class="tabular-nums">{{ occupied }}</span>
              <span class="text-white/40 mx-1">/</span>
              <span class="tabular-nums text-white/70">30</span>
            </div>
            <div class="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/60 mt-1">
              marcas inscriptas
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// PLACEHOLDER: link real del formulario de inscripción
const signupLink = "#";
// PLACEHOLDER: actualizar manualmente
const occupied = 18;
</script>
