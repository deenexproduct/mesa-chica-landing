<template>
  <footer class="relative border-t border-slate-200 bg-white">
    <div class="max-w-6xl mx-auto px-6 sm:px-8 py-8">
      <div
        class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-500"
      >
        <!-- Organizan -->
        <div class="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 font-bold">
            Organizan
          </span>
          <span class="text-slate-300">·</span>
          <a
            v-for="(org, i) in organizers"
            :key="org.name"
            :href="org.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-700 hover:text-primary transition-colors"
          >
            {{ org.name
            }}<span v-if="i < organizers.length - 1" class="text-slate-300 mx-1.5">·</span>
          </a>
        </div>

        <!-- Right: copyright + date -->
        <div class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
          <span>© {{ currentYear }} · Córdoba</span>
          <span class="text-slate-300">·</span>
          <span>16.05.2026</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const organizers = [
  { name: "Deenex", url: "https://deenex.tech/" },
  { name: "Puni", url: "https://www.puni.ar/" },
  { name: "Pimentón", url: "https://www.pimenton.io/" },
];
</script>
