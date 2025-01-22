<template>
  <div class="links">
    <router-link :to="link.path" v-for="link in links" :key="link.path">
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.links a {
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
  font-family: var(--font-family);
}

.links a.router-link-exact-active {
  color: var(--secondary-color);
}
.links a:hover {
  color: var(--secondary-color);
}

@media (max-width: 768px) {
    .links {
        flex-direction: column;
        gap: 16px;
    }
}

</style>