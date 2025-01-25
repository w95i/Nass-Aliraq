<template>
  <div class="container">
    <div class="pricing-header">
      <h2>Simple pricing</h2>
      <h2>for your Business</h2>
      <p>
        We have several powerful plans to showcase your business and get
        discovered as creative entrepreneurs. Everything you need.
      </p>
    </div>

    <div class="pricing-plans">
      <PlanCard
        v-for="(plan, index) in Plans"
        :key="index"
        :Plan="plan"
        :index="index"
        @toggle-plan="togglePlan"
      />
    </div>
  </div>
</template>
  
  <script>
import PlanCard from "@/components/Cards/PlanCard.vue";
export default {
  components: {
    PlanCard,
  },
  data() {
    return {
      Plans: [
        {
          name: "Intro",
          isOpen: false,
          details:
            "Intro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
          price: "$68",
          discount: "$10",
        },
        {
          name: "Base",
          isOpen: false,
          details:
            "Base account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
          price: "$89",
          discount: "$18",
        },
        {
          name: "Pro",
          isOpen: true,
          details:
            "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
          price: "$123",
          discount: "$40",
        },
        {
          name: "Enterprise",
          isOpen: false,
          details:
            "Enterprise account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
          price: "$155",
          discount: "$65",
        },
      ],
    };
  },
  methods: {
    togglePlan(index) {
      this.Plans.forEach((plan, i) => {
        plan.isOpen = i === index ? !plan.isOpen : false;
      });
    },
  },
};
</script>
  
  <style scoped>
.container {
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 91px;
  font-family: var(--font-family);
}

.pricing-header {
  text-align: left;
  max-width: 50%;
  margin-bottom: 20px;
}

.pricing-header h2 {
  font-size: 68px;
  font-weight: 700;
  line-height: 100.48px;
  text-align: left;
}

.pricing-header p {
  font-size: 20px;
  font-weight: 400;
  line-height: 27.37px;
  text-align: left;
  color: #646a69;
}

.pricing-plans {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 27px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 20px 23px;
    font-family: var(--font-family);
  }

  .pricing-header {
    max-width: 100%;
  }

  .pricing-header h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
  }

  .pricing-header p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
}
</style>
  