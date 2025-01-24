<template>
  <div class="our_services_container">
    <h2>Our Services</h2>
    <p>Transforming your online presence with innovative digital strategies</p>

    <div class="services">
        <ServiceCard v-for="item in services" :key="item.id" :service="item" class="service_item"/>
    </div>
  </div>
</template>

<script>
import ServiceCard from '@/components/Cards/ServiceCard.vue';
export default {
  name: "OurServicesLayout",
  components:{
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Video Making",
          description: "Random content",
          image: require("@/assets/Images/videoMaking.png"),
        },
        {
          id: 2,
          name: "Branding",
          description: "Random content to fill the blank space",
          image: require("@/assets/Images/branding.png"),
        },
        {
          id: 3,
          name: "Marketing strategy",
          description: "Random content to fill the blank space",
          image: require("@/assets/Images/marketingStrategy.png"),
        },
        {
          id: 4,
          name: "Email Marketing",
          description: "Random content",
          image: require("@/assets/Images/emailMarketing.png"),
        },
        {
          id: 5,
          name: "Social Media Managing",
          description: "Random content to fill the blank space",
          image: require("@/assets/Images/socialMediaManaging.png"),
        },
        {
          id: 6,
          name: "Content Writing ",
          description: "Random content to fill the blank space",
          image: require("@/assets/Images/ContentWriting.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.our_services_container {
  width: 100%;
  height: max-content;
  margin-top: 100px;
  text-align: center;
  font-family: var(--font-family);
}

.our_services_container h2 {
  font-size: 42px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: -0.03em;
  color: var(--text-color);
}

.our_services_container p {
  font-size: 18px;
  line-height: 26px;
  margin-top: 16px;
  color: #646A69;
}

.our_services_container .services {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 95px 32px;
  padding-top: 135px;
}

.services .service_item{
  width: 30%;
}

@media (max-width: 768px) {
  .our_services_container {
  margin-top: 40px;
}

  .services .service_item{
    width: 45%;
  }
}
</style>