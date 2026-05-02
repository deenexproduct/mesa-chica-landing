<template>
  <section id="faq" class="py-24 px-6 sm:px-12 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Preguntas frecuentes
          </div>
          <h2
            class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            Lo que <span class="text-primary italic font-light">seguro</span> te estás preguntando.
          </h2>
        </div>
        <div class="hidden lg:block max-w-[260px] text-right relative lg:ml-auto">
          <div class="absolute -left-10 top-0 bottom-0 w-px bg-slate-200/60"></div>
          <p class="text-slate-400 text-sm leading-relaxed pr-2">
            "Si tenés una duda que no está acá, escribinos por WhatsApp."
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="border border-slate-200 rounded-2xl bg-white overflow-hidden cursor-pointer group hover:border-primary/30 transition-colors duration-300"
          @click="toggle(i)"
        >
          <button class="w-full flex items-start justify-between gap-4 p-5 text-left">
            <span
              class="font-heading text-[clamp(0.95rem,1.4vw,1.05rem)] font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors"
            >
              {{ item.q }}
            </span>
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300"
              :class="open === i ? 'bg-primary border-primary text-white rotate-45' : 'text-slate-400'"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </span>
          </button>
          <div
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="open === i ? 'max-h-72 pb-5' : 'max-h-0'"
          >
            <p class="px-5 text-[0.92rem] text-slate-500 leading-relaxed">
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const open = ref(null);
function toggle(i) {
  open.value = open.value === i ? null : i;
}

const faqs = [
  {
    q: "¿Cuánto cuesta la entrada?",
    a: "Es gratis. Pero hay solo 30 lugares y son por invitación. Tu registro queda sujeto a aprobación de los organizadores.",
  },
  {
    q: "¿Cómo me anoto?",
    a: "Vía Luma. El link se publica acá y también va por mail a los contactos invitados. Apenas confirmes, vas a recibir un correo con el resultado de la aprobación.",
  },
  {
    q: "¿Quién puede asistir?",
    a: "Dueños de cadenas, gerentes comerciales, e-commerce managers, equipos de marketing y emprendedores dentro de la industria del retail (supermercados, farmacia, indumentaria, gastronomía y afines). No participan proveedores ni competencia directa de los organizadores.",
  },
  {
    q: "¿Puedo llevar a alguien de mi equipo?",
    a: "Cada lugar es individual y tiene que pasar por el mismo proceso de aprobación. Si querés invitar a alguien, escribinos antes por WhatsApp y lo evaluamos.",
  },
  {
    q: "¿Va a haber grabación?",
    a: "La idea es que sea una conversación off the record. Si grabamos algo, será solo material institucional acordado previamente con los founders, no la mesa completa.",
  },
  {
    q: "¿Por qué solo 30 lugares?",
    a: "Porque el formato no es charla, es mesa. A partir de 30 personas el debate y el networking se diluyen. Preferimos pocos y bien curados.",
  },
  {
    q: "¿Hay estacionamiento?",
    a: "La sede está en el centro de Córdoba, con varias opciones de cocheras a metros. Te enviamos la guía exacta junto con la confirmación.",
  },
];
</script>
