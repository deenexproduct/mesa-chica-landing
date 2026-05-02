<template>
  <div>
    <Navbar />
    <main>
      <HeroSection />
      <ValuePropSection class="v-reveal" />
      <ManifestoSection class="v-reveal" />
      <SpeakersSection class="v-reveal" />
      <AgendaSection class="v-reveal" />
      <BrandsSection class="v-reveal" />
      <LocationSection class="v-reveal" />
      <FAQSection class="v-reveal" />
      <SponsorCTASection class="v-reveal" />
      <FinalCTASection class="v-reveal" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ManifestoSection from "@/components/sections/ManifestoSection.vue";
import SpeakersSection from "@/components/sections/SpeakersSection.vue";
import AgendaSection from "@/components/sections/AgendaSection.vue";
import ValuePropSection from "@/components/sections/ValuePropSection.vue";
import BrandsSection from "@/components/sections/BrandsSection.vue";
import LocationSection from "@/components/sections/LocationSection.vue";
import FAQSection from "@/components/sections/FAQSection.vue";
import SponsorCTASection from "@/components/sections/SponsorCTASection.vue";
import FinalCTASection from "@/components/sections/FinalCTASection.vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("v-reveal-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".v-reveal").forEach((el) => observer.observe(el));
});
</script>
