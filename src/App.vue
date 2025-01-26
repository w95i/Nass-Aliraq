<template>
  <div class="body">
    <section class="navbar_section">
      <NavbarLayout />
    </section>
    <router-view />
    <section class="footer_section">
      <FooterLayout />
    </section>
  </div>
</template>

<script>
import NavbarLayout from "@/Layout/NavbarLayout";
import FooterLayout from "./Layout/FooterLayout.vue";
export default {
  name: "App",
  components: {
    NavbarLayout,
    FooterLayout
  },
};
</script>

<style>
@import url("@/assets/Css/Root.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  background-color: var(--primary-color);
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
}

body::-webkit-scrollbar-thumb {
  background: var(--btn-background);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

.navbar_section {
  padding: 32px 88px;
}
@media (max-width: 768px) {
  .navbar_section {
    padding: 32px 16px;
  }
}
</style>
