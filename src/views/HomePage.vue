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

  </div>
</template>

<script>
import HeroLayout from "@/Layout/HomeLayout/HeroLayout.vue";
import OurPartnersLayout from "@/Layout/HomeLayout/OurPartnersLayout.vue";
import AboutUsLayout from "@/Layout/HomeLayout/AboutUsLayout.vue";
import OurServicesLayout from "@/Layout/HomeLayout/OurServicesLayout.vue";
import PhilosophyLayout from "@/Layout/HomeLayout/philosophyLayout.vue";
export default {
  components: {
    HeroLayout,
    OurPartnersLayout,
    AboutUsLayout,
    OurServicesLayout,
    PhilosophyLayout
  },
}
</script>

<style>

</style>