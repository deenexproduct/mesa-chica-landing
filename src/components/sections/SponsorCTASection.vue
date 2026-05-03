<template>
  <section id="sponsor" class="py-32 sm:py-40 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-3xl mx-auto text-center">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Marcas y medios
      </div>
      <h2
        class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tighter leading-[1.05] text-slate-900 mb-5"
      >
        ¿Querés ser <span class="text-primary italic font-light">sponsor</span>?
      </h2>
      <p class="text-slate-500 text-[1.05rem] leading-relaxed mb-8">
        Si tu marca o medio quiere acompañar la mesa, escribinos por WhatsApp y te
        contamos cómo.
      </p>
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-bold text-[0.95rem] transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        Quiero ser sponsor por WhatsApp
        <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
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
  </section>
</template>

<script setup>
// WhatsApp Alan Tapia (organizador)
const phoneNumber = "5491154596266";
const message =
  "Hola Alan! Me interesa ser sponsor del evento del 16 de mayo en Córdoba (Deenex + Puni + Pimentón). Quería saber más.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>
