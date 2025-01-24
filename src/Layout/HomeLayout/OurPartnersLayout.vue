<template>
  <div class="our_partners">
    <div class="content">
      <h2>Our Partners</h2>
    </div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :centeredSlides="true"
      :loop="true"
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }"
      class="carousel-container"
    >
      <swiper-slide
        class="carousel_item"
        v-for="partner in partners"
        :key="partner.id"
      >
        <img :src="partner.image" alt="partner" />
      </swiper-slide>
    </swiper>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
("swiper/modules");
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      partners: [
        {
          id: 1,
          image: require("@/assets/Images/cibBank.png"),
        },
        {
          id: 2,
          image: require("@/assets/Images/bmw.png"),
        },
        {
          id: 3,
          image: require("@/assets/Images/huawei.png"),
        },
        {
          id: 4,
          image: require("@/assets/Images/nasa.png"),
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.our_partners {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  color: var(--text-color);
}

.our_partners .content {
  margin-top: 110px;
  font-family: var(--font-family);
}

.content h2 {
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 10px;
}

.carousel-container .carousel_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-width: 419px;
  height: 88px;
  gap: 8px;
  border-radius: 8px;
  background-color: var(--text-color);
  padding: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
  