<template>
  <div>
    <section class="hero_section">
      <HeroLayout />
    </section>

    <section class="our_partners">
      <OurPartnersLayout />
    </section>

    <section class="about_us">
      <AboutUsLayout />
    </section>

    <section class="our_services">
      <OurServicesLayout />
    </section>

    <section class="philosophy">
      <PhilosophyLayout />
    </section>

    <section class="charts">
      <ChartLayout />
    </section>

    <section class="news">
      <NewsLayout />
    </section>

    <section class="plans">
      <PricingLayout />
    </section>

    <section class="feedback">
      <ClientLayout />
    </section>

    <section class="blank">

    </section>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.blank{
  width: 100%;
  height: 500px;
}

@media(max-width:765px){
  .blank{
    height: 400px;
  }
}
</style>