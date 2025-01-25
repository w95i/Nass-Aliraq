<template>
  <div class="plan" :class="{ active: Plan.isOpen }">
    <!-- Plan Header (Clickable) -->
    <div
      class="plan-header"
      @click="togglePlan(index)"
      :class="{ active: Plan.isOpen }"
    >
      <span class="price_title" :class="{ active: Plan.isOpen }">
        {{ Plan.name }}
        <span class="discount" v-if="Plan.isOpen && Plan.discount !== ''">
          Save {{ Plan.discount }}
        </span>
      </span>
      <span class="arrow" :class="{ rotated: Plan.isOpen }">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </span>
    </div>

    <!-- Animated Content Section -->
    <transition name="slide-fade">
      <div v-if="Plan.isOpen" class="pricing_details">
        <p>{{ Plan.details }}</p>
        <div class="price_section">
          <p>
            <span>{{ Plan.price }}</span> /month
          </p>
          <c-button type="button" buttonName="Try 1 month" class="buy_btn" />
        </div>
      </div>
    </transition>
  </div>
</template>
  
  <script>
export default {
  props: {
    Plan: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    togglePlan(index) {
      this.$emit("toggle-plan", index);
    },
  },
};
</script>
  
  <style scoped>
.plan {
  border-radius: 12px;
  overflow: hidden;
  background-color: #222;
  cursor: pointer;
  min-height: 85px;
  padding: 26px 27px;
  width: 100%;
  transition: background 1s ease-in-out;
}

.plan.active {
  background-color: var(--btn-background);
  background-image: url("@/assets/Images/waves.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}

.plan-header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 1s ease;
}

.plan-header .price_title {
  color: var(--btn-background);
  font-size: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}

.price_title.active {
  color: var(--text-color);
}

.price_title .discount {
  background-color: var(--text-color);
  color: var(--btn-background);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 6px 10px;
}

.arrow {
  font-size: 12px;
  color: var(--text-color);
  width: 28px;
  height: 28px;
  background-color: var(--btn-background);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease-in-out;
}

.rotated {
  transform: rotate(180deg);
  background-color: rgba(253, 236, 255, 0.5);
  border-radius: 50%;
}

.pricing_details {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: max-height 1s ease-in-out, opacity 1s ease-in-out;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 200px;
  opacity: 1;
}

.pricing_details .price_section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 40px;
}

.price_section p {
  font-size: 24px;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.836);
}

.price_section p span {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-color);
}

.price_section .buy_btn {
  width: 193px;
  height: 53px;
  border: none;
  border-radius: 12px;
  background-color: var(--text-color);
  font-size: 22.81px;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  .plan {
    min-height: 57px;
    padding: 18px;
  }

  .plan-header {
    height: 26px;
  }

  .plan-header .price_title {
    font-size: 20px;
  }

  .price_section p {
    font-size: 16px;
  }

  .price_section p span {
    font-size: 20px;
  }

  .price_section .buy_btn {
    width: 130px;
    height: 36px;
    font-size: 16px;
    line-height: 22.92px;
  }
}
</style>
  