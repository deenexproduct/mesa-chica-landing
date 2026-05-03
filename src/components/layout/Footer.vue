<template>
  <footer class="relative mt-24 bg-[#1a1430] text-white overflow-hidden">
    <!-- Decorative glows -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -left-20 w-[600px] h-[600px] bg-primary/25 blur-[140px] rounded-full"
      ></div>
      <div
        class="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full"
      ></div>
    </div>

    <!-- Subtle grid pattern -->
    <div
      class="pointer-events-none absolute inset-0 footer-grid opacity-[0.07]"
    ></div>

    <div class="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
      <!-- TOP — Editorial closing -->
      <div
        class="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-16 sm:mb-20"
      >
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.18em] mb-6"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Sábado 16.05.2026 · Córdoba
          </div>
          <h2
            class="font-heading text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-tighter text-white"
          >
            Si todavía no decidiste,
            <br />
            <span class="font-light italic text-primary-light">
              acordate de que solo son 30 marcas.
            </span>
          </h2>
        </div>

        <div class="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <a
            href="#luma"
            class="group inline-flex items-center justify-center gap-2 bg-white text-[#1a1430] font-bold rounded-xl px-6 py-3.5 text-[0.92rem] transition-all hover:bg-slate-100 hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            Quiero ir
            <span
              class="inline-flex items-center justify-center w-5 h-5 rounded-lg bg-primary/15 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
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
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold rounded-xl px-6 py-3.5 text-[0.92rem] transition-all hover:bg-white/10 hover:border-white/40"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            ¿Dudas? WhatsApp
          </a>
        </div>
      </div>

      <!-- MIDDLE — Organizadores -->
      <div class="border-t border-white/10 pt-14 mb-14">
        <div
          class="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 font-bold mb-7"
        >
          ↳ Un encuentro organizado por
        </div>

        <div class="grid md:grid-cols-3 gap-3 sm:gap-4">
          <a
            v-for="(org, idx) in organizers"
            :key="org.name"
            :href="org.url"
            target="_blank"
            rel="noopener noreferrer"
            class="org-card group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex items-center justify-between"
          >
            <div>
              <div
                class="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary-light font-bold mb-1.5"
              >
                0{{ idx + 1 }} · {{ org.canal }}
              </div>
              <div
                class="font-heading font-extrabold text-white text-[1.5rem] sm:text-[1.7rem] tracking-tight group-hover:text-primary-light transition-colors"
              >
                {{ org.name }}
              </div>
            </div>
            <span
              class="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 text-white/40 group-hover:bg-primary group-hover:text-white transition-all"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M3 10L10 3M10 3H4M10 3V9"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- BOTTOM — Info bar -->
      <div
        class="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[0.82rem]"
      >
        <div>
          <div class="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40 font-bold mb-1.5">
            Cuándo
          </div>
          <div class="text-white/85 font-medium">Sábado 16.05.2026</div>
          <div class="text-white/55">17:00 hs</div>
        </div>
        <div>
          <div class="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40 font-bold mb-1.5">
            Dónde
          </div>
          <div class="text-white/85 font-medium">Córdoba, Argentina</div>
          <div class="text-white/55">Sede a confirmar</div>
        </div>
        <div>
          <div class="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40 font-bold mb-1.5">
            Cupos
          </div>
          <div class="text-white/85 font-medium">30 marcas</div>
          <div class="text-white/55">Solo por invitación</div>
        </div>
        <div>
          <div class="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40 font-bold mb-1.5">
            Costo
          </div>
          <div class="text-white/85 font-medium">Gratis</div>
          <div class="text-white/55">Sujeto a aprobación</div>
        </div>
      </div>

      <!-- Copyright bar -->
      <div
        class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-white/40 tracking-[0.16em] uppercase"
      >
        <p>© {{ currentYear }} · Córdoba, Argentina</p>
        <p class="font-mono">
          Vender <span class="text-primary-light">·</span> Mover
          <span class="text-primary-light">·</span> Crecer
        </p>
      </div>
    </div>

    <!-- Top gradient line -->
    <div
      class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
    ></div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const organizers = [
  { name: "Deenex", canal: "Vender", url: "https://deenex.tech/" },
  { name: "Puni", canal: "Mover", url: "https://www.puni.ar/" },
  { name: "Pimentón", canal: "Crecer", url: "https://www.pimenton.io/" },
];

// PLACEHOLDER: validar dígitos del número final
const phoneNumber = "5491154592266";
const message =
  "Hola! Tengo una consulta sobre el evento del 16 de mayo en Córdoba (Deenex + Puni + Pimentón).";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>

<style scoped>
.footer-grid {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

.org-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), #c4b5fd);
  border-radius: 2px 2px 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.org-card:hover::before {
  transform: scaleX(1);
}

/* Light variant of primary for dark bg */
:root {
  --primary-light: #c4b5fd;
}
</style>
