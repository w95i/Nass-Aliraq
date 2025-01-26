<template>
  <div class="testimonial-section">
    <h2 class="section-title">Our clients opinions</h2>
    <div class="swiper_container">
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="60"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="testimonial-carousel"
      >
        <swiper-slide v-for="client in testimonials" :key="client.id">
          <ClientCard :testimonial="client" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ClientCard from "@/components/Cards/ClientCard.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide, ClientCard },
  setup() {
    const testimonials = [
      {
        id: 1,
        name: "Jonathan Sweeney",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        feedback: "I love that model I used to have to call all around...",
      },
      {
        id: 2,
        name: "Barbara Cook",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        feedback:
          "I am so happy with your company. Ever since my insurer switched to you...",
      },
      {
        id: 3,
        name: "Mary Rogers",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        feedback:
          "I just want to thank you for the great job you did during my transition...",
      },
      {
        id: 4,
        name: "Robert Lee",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        feedback:
          "I just want to thank you for the great job you did during my transition...",
      },
      {
        id: 5,
        name: "Jack Rogers",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        feedback:
          "I just want to thank you for the great job you did during my transition...",
      },
    ];

    return { testimonials, Navigation, Pagination, Autoplay };
  },
};
</script>
  
  <style scoped>
.testimonial-section {
  background: #6b2b83;
  padding: 100px 76px;
  text-align: center;
  font-family: var(--font-family);
  margin-top: 150px;
}

.section-title {
  color: var(--text-color);
  font-size: 48.67px;
  font-weight: 400;
  line-height: 61.6px;
  letter-spacing: -1.5px;
  text-align: center;
  margin-bottom: 80px;
}

.testimonial-carousel {
  max-width: 100%;
}

.swiper_container{
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.swiper {
  overflow: visible;
}

:deep(.swiper-pagination-bullets) {
  bottom: -50px !important;
}

:deep(.swiper-pagination-bullet) {
  background: var(--text-color);
}

:deep(.swiper-pagination-bullet-active) {
  background: rgba(22, 22, 22, 1);
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  background-color: var(--text-color);
  border-radius: 50%;
  color: var(--primary-color);
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 50px 10px;
    margin-top: 50px;
  }

  .section-title {
    display: none;
  }

  :deep(.swiper-pagination-bullets) {
    display: none;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    top: auto;
    bottom: -35px;
    width: 36px;
    height: 36px;
  }
}
</style>
  