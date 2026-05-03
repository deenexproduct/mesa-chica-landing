<template>
  <section
    id="location"
    class="py-32 sm:py-40 px-6 sm:px-12 bg-white overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
      >
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Dónde será
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            En el corazón de
            <span class="text-primary italic font-light">Córdoba Capital</span>.
          </h2>
        </div>
        <p
          class="font-heading text-[clamp(1.05rem,1.6vw,1.35rem)] font-light leading-snug text-slate-600 lg:max-w-md lg:text-right"
        >
          Una sede curada con escenario, sonido y producción.
          <span class="text-primary italic font-medium">Dirección por mail</span>
          al aprobar tu inscripción.
        </p>
      </div>

      <!-- MAP CARD (the disruptive element) -->
      <div
        class="map-card relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-primary/10 bg-slate-100"
      >
        <!-- Map iframe with violet tint -->
        <div class="map-tint relative h-[480px] sm:h-[560px]">
          <iframe
            class="map-iframe absolute inset-0 w-full h-full border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-64.2050%2C-31.4350%2C-64.1750%2C-31.4050&amp;layer=mapnik"
            loading="lazy"
            title="Mapa del centro de Córdoba Capital"
            aria-hidden="true"
          ></iframe>
        </div>

        <!-- Top decorative gradient -->
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent"
        ></div>

        <!-- Bottom decorative gradient -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/85 to-transparent"
        ></div>

        <!-- Top-left: city tag (hidden on small phones to avoid date badge overlap) -->
        <div
          class="hidden sm:inline-flex absolute top-5 left-5 sm:top-6 sm:left-6 items-center gap-2 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-lg shadow-black/5"
        >
          <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 font-bold">
            Córdoba Capital · Argentina
          </span>
        </div>

        <!-- Top-right: date badge -->
        <div
          class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary text-white rounded-2xl p-2.5 sm:p-4 shadow-xl shadow-primary/30"
        >
          <div class="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70 font-bold mb-0.5">
            Sábado
          </div>
          <div class="font-heading font-extrabold text-[1.4rem] sm:text-[1.9rem] leading-none tracking-tighter">
            16.05
          </div>
          <div class="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70 font-bold mt-1.5">
            2026 · 17 hs
          </div>
        </div>

        <!-- CENTER: pulsing pin -->
        <div
          class="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
        >
          <!-- Floating "Sede a confirmar" tag -->
          <div
            class="bg-white border border-primary/30 rounded-2xl px-3.5 py-2 shadow-xl shadow-primary/20 mb-3 whitespace-nowrap"
          >
            <div class="font-mono text-[9px] uppercase tracking-[0.18em] text-primary font-bold mb-0.5">
              Sede
            </div>
            <div class="font-heading font-extrabold text-slate-900 text-[0.92rem] tracking-tight">
              Por confirmar
            </div>
          </div>

          <!-- Pin -->
          <div class="relative">
            <!-- Pulse rings -->
            <span class="pin-pulse absolute -inset-3 rounded-full bg-primary/30"></span>
            <span class="pin-pulse pin-pulse-2 absolute -inset-3 rounded-full bg-primary/20"></span>
            <!-- Pin body -->
            <div
              class="relative w-10 h-10 rounded-full bg-primary border-4 border-white shadow-xl shadow-primary/40 flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- BOTTOM: floating info bar -->
        <div
          class="absolute inset-x-5 sm:inset-x-6 bottom-5 sm:bottom-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl shadow-black/5 p-4 sm:p-5"
        >
          <div class="grid grid-cols-3 gap-3 sm:gap-6">
            <div
              v-for="info in details"
              :key="info.label"
              class="text-center sm:text-left"
            >
              <div
                class="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 font-bold mb-1"
              >
                {{ info.label }}
              </div>
              <div
                class="font-heading font-extrabold text-slate-900 text-[0.95rem] sm:text-[1.05rem] leading-tight tracking-tight"
                :class="info.accent && 'text-primary'"
              >
                {{ info.value }}
              </div>
              <div
                v-if="info.sub"
                class="text-[0.7rem] text-slate-500 leading-snug mt-0.5"
              >
                {{ info.sub }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Body text below map -->
      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-8 mt-10 items-start">
        <p class="font-heading text-[clamp(1.05rem,1.5vw,1.35rem)] font-light leading-snug text-slate-700">
          La sala está pensada para que el escenario funcione y el networking
          del cierre sea
          <span class="text-primary italic font-medium">cara a cara</span>. 30
          marcas decisoras, los 3 founders y nada más.
        </p>
        <div
          class="text-[0.85rem] text-slate-500 leading-relaxed border-l-2 border-primary/20 pl-5"
        >
          La dirección exacta y los detalles de acceso se confirman por mail
          unos días antes del evento, una vez aprobada tu inscripción.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const details = [
  {
    label: "Capacidad",
    value: "30 marcas",
    sub: "Solo invitación",
    accent: true,
  },
  { label: "Hora", value: "17:00 hs", sub: "Networking al cierre" },
  {
    label: "Costo",
    value: "Gratis",
    sub: "Sujeto a aprobación",
    accent: true,
  },
];
</script>

<style scoped>
/* Tint the map violet/dark editorial */
.map-iframe {
  filter: grayscale(0.4) hue-rotate(220deg) saturate(0.65) contrast(1.05)
    brightness(0.97);
}
.map-tint::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 50% 42%,
      rgba(105, 94, 222, 0) 0%,
      rgba(105, 94, 222, 0.06) 40%,
      rgba(105, 94, 222, 0.18) 100%
    );
  pointer-events: none;
}

/* Pulse rings on the pin */
.pin-pulse {
  animation: pinPulse 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  transform-origin: center;
}
.pin-pulse-2 {
  animation-delay: 1.3s;
}
@keyframes pinPulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  80% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}

.map-card:hover .map-iframe {
  filter: grayscale(0.25) hue-rotate(220deg) saturate(0.8) contrast(1.05)
    brightness(1);
  transition: filter 0.5s ease;
}
</style>
