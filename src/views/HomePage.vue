<template>
  <div>
    <section class="hero_section animate-section">
      <HeroLayout />
    </section>

    <section class="our_partners animate-section">
      <OurPartnersLayout />
    </section>

    <section class="about_us animate-section">
      <AboutUsLayout />
    </section>

    <section class="our_services animate-section">
      <OurServicesLayout />
    </section>

    <section class="philosophy animate-section">
      <PhilosophyLayout />
    </section>

    <section class="charts animate-section">
      <ChartLayout />
    </section>

    <section class="news animate-section">
      <NewsLayout />
    </section>

    <section class="plans animate-section">
      <PricingLayout />
    </section>

    <section class="feedback animate-section">
      <ClientLayout />
    </section>

    <section class="blank"></section>
  </div>
</template>


<script>
import { onMounted } from "vue";
import HeroLayout from "@/Layout/HomeLayout/HeroLayout.vue";
import OurPartnersLayout from "@/Layout/HomeLayout/OurPartnersLayout.vue";
import AboutUsLayout from "@/Layout/HomeLayout/AboutUsLayout.vue";
import OurServicesLayout from "@/Layout/HomeLayout/OurServicesLayout.vue";
import PhilosophyLayout from "@/Layout/HomeLayout/philosophyLayout.vue";
import ChartLayout from "@/Layout/HomeLayout/ChartLayout.vue";
import NewsLayout from "@/Layout/HomeLayout/NewsLayout.vue";
import PricingLayout from "@/Layout/HomeLayout/PricingLayout.vue";
import ClientLayout from "@/Layout/HomeLayout/ClientLayout.vue";

export default {
  components: {
    HeroLayout,
    OurPartnersLayout,
    AboutUsLayout,
    OurServicesLayout,
    PhilosophyLayout,
    ChartLayout,
    NewsLayout,
    PricingLayout,
    ClientLayout,
  },

  setup() {
    onMounted(() => {
      const sections = document.querySelectorAll(".animate-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
      );

      sections.forEach((section) => observer.observe(section));
    });
  },
};
</script>

<style scoped>
/* Initial hidden state */
.animate-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* When visible */
.visible {
  opacity: 1;
  transform: translateY(0);
}

.blank {
  width: 100%;
  height: 500px;
}

@media (max-width: 765px) {
  .blank {
    height: 400px;
  }
}
</style>
