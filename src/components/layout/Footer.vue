<template>
  <footer class="relative mt-20 border-t border-white/10 bg-primary text-white overflow-hidden">
    <!-- ambient glow -->
    <div
      class="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-white/10 to-transparent blur-2xl opacity-30"
    ></div>

    <div class="max-w-6xl mx-auto px-6 py-14">
      <!-- Organizadores -->
      <div class="text-center mb-10">
        <p class="text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold mb-6">
          Un encuentro organizado por
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          <a
            v-for="org in organizers"
            :key="org.name"
            :href="org.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center gap-1 transition-transform hover:-translate-y-1"
          >
            <span
              class="font-heading font-extrabold text-[1.4rem] sm:text-[1.7rem] tracking-tight text-white group-hover:text-white"
            >{{ org.name }}</span>
            <span class="text-[10px] uppercase tracking-[0.18em] text-white/50">{{ org.tag }}</span>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 tracking-wider"
      >
        <p>© {{ currentYear }} · Córdoba, Argentina</p>
        <p class="font-mono">Sábado 16.05.2026 · 17 hs</p>
      </div>
    </div>

    <div
      class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
    ></div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const organizers = [
  { name: "Deenex", tag: "Vender", url: "https://deenex.tech/" },
  { name: "Puni", tag: "Mover", url: "https://www.puni.ar/" },
  { name: "Pimentón", tag: "Crecer", url: "https://www.pimenton.io/" },
];
</script>
