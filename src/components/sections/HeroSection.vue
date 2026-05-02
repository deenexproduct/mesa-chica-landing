<template>
  <section
    id="hero"
    :class="{ 'hero-ready': ready }"
    class="hero-section relative flex min-h-[100svh] flex-col overflow-hidden pt-32 pb-20 sm:pt-40"
  >
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0 z-0">
      <div class="hero-dot-grid absolute inset-0 z-0"></div>
      <div class="orb orb-1 absolute rounded-full bg-primary/10 blur-[120px]"></div>
      <div class="orb orb-2 absolute rounded-full bg-violet-400/10 blur-[140px]"></div>
      <div class="orb orb-3 absolute rounded-full bg-indigo-300/8 blur-[100px]"></div>
    </div>

    <div
      class="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col px-6 sm:px-8"
    >
      <!-- FOMO pills -->
      <div
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="mb-7 flex flex-wrap items-center justify-center gap-2.5"
        style="animation-delay: 0.05s"
      >
        <span
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-wide text-slate-600"
        >
          Córdoba · Argentina
        </span>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-wide text-slate-600"
        >
          Sábado 16.05.2026 · 17 hs
        </span>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wide text-primary"
        >
          Solo 30 marcas
        </span>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-[0.72rem] font-bold tracking-wide text-rose-500"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
          Cupos disponibles
        </span>
      </div>

      <!-- Headline -->
      <h1
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="text-center font-heading text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.08] tracking-tighter text-slate-900 max-w-5xl mx-auto"
        style="animation-delay: 0.15s"
      >
        <span class="block font-extrabold">
          Cómo
          <em class="font-light italic text-primary">vender</em>,
          <em class="font-light italic text-primary">mover</em>
        </span>
        <span class="block font-extrabold">
          y hacer <em class="font-light italic text-primary">crecer</em>.
        </span>
        <span
          class="block mt-6 text-[clamp(1rem,1.6vw,1.5rem)] font-medium leading-snug text-slate-500 tracking-tight"
        >
          Tu cadena gastronómica en 2026.
        </span>
      </h1>

      <!-- Sub -->
      <p
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="mx-auto mt-7 max-w-[640px] text-center text-[1.05rem] sm:text-[1.15rem] font-medium leading-[1.6] text-slate-500"
        style="animation-delay: 0.28s"
      >
        Tres founders argentinos del nuevo retail
        <span class="font-semibold text-slate-900">en un mismo escenario</span>.
        Sábado 16 de mayo, centro de Córdoba.
      </p>

      <!-- CTAs -->
      <div
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="mt-9 flex items-center justify-center gap-3 sm:gap-4"
        style="animation-delay: 0.4s"
      >
        <a
          href="#luma"
          class="btn-primary group inline-flex items-center gap-2 bg-primary text-white font-semibold rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-[0.9rem] sm:text-[0.95rem] transition-all hover:bg-[#5346c7] shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 relative overflow-hidden"
        >
          <span class="btn-shimmer"></span>
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

        <a
          href="#speakers"
          class="group inline-flex items-center gap-2 px-3 py-3 sm:px-4 sm:py-3.5 text-[0.9rem] sm:text-[0.95rem] font-semibold text-slate-600 hover:text-primary transition-colors"
        >
          Ver el line-up
          <svg
            width="12"
            height="12"
            viewBox="0 0 13 13"
            fill="none"
            class="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>

      <!-- Scarcity meter -->
      <div
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="mx-auto mt-12 w-full max-w-[460px]"
        style="animation-delay: 0.5s"
      >
        <div
          class="flex items-center justify-between mb-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em]"
        >
          <span class="text-slate-400">Marcas inscriptas</span>
          <span class="text-primary font-bold">{{ occupied }} / 30</span>
        </div>
        <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
          <div class="scarcity-fill h-full bg-gradient-to-r from-primary to-violet-400 rounded-full"></div>
        </div>
      </div>

      <!-- Stats -->
      <div
        :class="{ 'animate-rise': ready, 'opacity-0': !ready }"
        class="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pt-10 border-t border-slate-200/70"
        style="animation-delay: 0.6s"
        ref="statsRef"
      >
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center"
          :class="{ 'stat-active': hasAnimated }"
        >
          <div
            class="font-heading font-black text-primary text-[clamp(2rem,4vw,2.8rem)] leading-none tracking-tighter mb-1.5"
          >
            <span v-if="stat.prefix" class="text-[0.65em] opacity-75">{{ stat.prefix }}</span>
            <span class="tabular-nums">{{ displayValues[i] }}</span>
            <span v-if="stat.suffix" class="text-[0.65em] opacity-75">{{ stat.suffix }}</span>
          </div>
          <div class="text-[0.7rem] uppercase tracking-[0.14em] text-slate-500 font-bold">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

const ready = ref(false);
const statsRef = ref(null);
const hasAnimated = ref(false);
const occupied = ref(18); // PLACEHOLDER: actualizar manualmente

const stats = [
  { prefix: "+", value: 1500, suffix: "", label: "Marcas trabajadas" },
  { prefix: "+", value: 1, suffix: "M", label: "Envíos / mes" },
  { prefix: "", value: 3, suffix: "", label: "CEOs fundadores" },
  { prefix: "", value: 100, suffix: "%", label: "Decisores en la mesa" },
];

const displayValues = reactive(stats.map(() => 0));

function animateCounter(index, target, duration = 1800) {
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const value = Math.round(target * eased);
    displayValues[index] = value >= 1000 ? value.toLocaleString("es-AR") : String(value);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let observer = null;

onMounted(() => {
  setTimeout(() => {
    ready.value = true;
  }, 200);

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        stats.forEach((stat, i) => {
          setTimeout(() => animateCounter(i, stat.value), i * 120);
        });
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (statsRef.value) observer.observe(statsRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.hero-section {
  background: #f8f9fb;
}

.hero-dot-grid {
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%);
}

.orb {
  position: absolute;
}
.orb-1 {
  width: 600px;
  height: 600px;
  left: -8%;
  top: -5%;
  animation: orbDrift 20s ease-in-out infinite alternate;
}
.orb-2 {
  width: 700px;
  height: 700px;
  right: -12%;
  top: 20%;
  animation: orbDrift 25s ease-in-out 3s infinite alternate-reverse;
}
.orb-3 {
  width: 400px;
  height: 400px;
  left: 30%;
  bottom: 10%;
  animation: orbDrift 18s ease-in-out 5s infinite alternate;
}

@keyframes orbDrift {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
.animate-rise {
  animation: rise 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.scarcity-fill {
  width: 0;
  animation: fillBar 2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s forwards;
}
@keyframes fillBar {
  to { width: 60%; }
}

.btn-primary {
  isolation: isolate;
}
.btn-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
