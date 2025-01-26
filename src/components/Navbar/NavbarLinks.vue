<template>
  <div class="links">
    <a
      href="#"
      v-for="link in links"
      :key="link.id"
      @click.prevent="$emit('navigate', link.id)"
    >
      {{ link.name }}
      <span v-if="link.badge !== ''" class="nav_badge">{{ link.badge }}</span>
    </a>
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
  cursor: pointer;
}

.links a:hover {
  color: var(--secondary-color);
}

.nav_badge {
  background-color: var(--btn-background);
  color: var(--text-color);
  border-radius: 15px;
  width: 24px;
  font-size: 10px;
  display: inline-block;
  text-align: center;
  align-content: center;
}

@media (max-width: 768px) {
  .links {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
