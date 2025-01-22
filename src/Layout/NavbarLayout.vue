<template>
  <nav class="navbar">
    <section class="logo_section">
      <img :src="logoImage" alt="logo-img" />
    </section>
    <section class="link_section">
      <NavbarLinks :links="links" />
    </section>
    <section class="action_section">
      <c-button buttonName="Contact us" type="button" class="contact_btn" />
      <c-button buttonName="Join us" type="button" class="join_btn" />
    </section>
  </nav>

  <nav class="mobile_navbar">
    <section class="navbar_items">
      <div class="logo_section">
        <img :src="logoImage" alt="logo-img" />
      </div>
      <div class="menu_toggle_section">
        <button
          class="menu_toggle_btn"
          @click="toggleMenu"
          :class="{ open: isMenuOpen }"
        >
          <span></span>
        </button>
      </div>
    </section>
    <section>
      <section :class="['link_section_mobile', { open: isMenuOpen }]">
        <NavbarLinks :links="links" />
      </section>
    </section>
  </nav>
</template>

<script>
import NavbarLinks from "@/components/Navbar/NavbarLinks.vue";

export default {
  name: "NavbarLayout",
  components: {
    NavbarLinks,
  },
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
      isMenuOpen: false,
    };
  },
  computed: {
    logoImage() {
      return require("@/assets/Images/logo.png");
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  height: 67px;
  padding: 0 16px;
  position: relative;
}

.mobile_navbar {
  display: none;
}

.logo_section img {
  height: 40px;
}

.menu_toggle_section {
  display: none;
}

.menu_toggle_btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 40px;
  position: relative;
}

.menu_toggle_btn span,
.menu_toggle_btn::before,
.menu_toggle_btn::after {
  content: "";
  display: block;
  background: var(--text-color);
  width: 100%;
  height: 4px;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;
}

.menu_toggle_btn span {
  top: 50%;
  transform: translateY(-50%);
}

.menu_toggle_btn::before {
  top: 8px;
}

.menu_toggle_btn::after {
  bottom: 8px;
}

.menu_toggle_btn.open span {
  transform: rotate(45deg);
  background: var(--btn-background);
}

.menu_toggle_btn.open::before {
  top: 50%;
  transform: rotate(-45deg);
  background: var(--btn-background);
}

.menu_toggle_btn.open::after {
  display: none;
  bottom: 50%;
  transform: rotate(-45deg);
}

.link_section {
  display: flex;
  gap: 16px;
}

.link_section_mobile {
  display: none;
  width: 100%;
  background-color: var(--primary-color);
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
}

.action_section {
  display: flex;
  gap: 16px;
}

.action_section .contact_btn {
  background-color: transparent;
  color: var(--text-color);
  font-family: var(--font-family);
  padding: 12px 20px;
  border-radius: 200px;
  border: 1px solid var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.action_section .contact_btn:hover {
  background-color: var(--text-color);
  color: var(--secondary-color);
  transform: scale(1.1);
}

.action_section .join_btn {
  color: var(--text-color);
  font-family: var(--font-family);
  padding: 12px 20px;
  border-radius: 200px;
  border: none;
  background-color: var(--btn-background);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.action_section .join_btn:hover {
  background-color: var(--text-color);
  color: var(--secondary-color);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.link_section_mobile.open {
  display: flex;
  max-height: 500px;
  padding: 16px 0;
  animation: grow 0.3s ease-in-out forwards;
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }

  .mobile_navbar {
    display: flex;
    flex-direction: column;
  }

  .navbar_items {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }

  .menu_toggle_section {
    display: block;
  }

  .link_section {
    display: none;
  }

  .action_section {
    display: none;
  }
}
@keyframes grow {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>
