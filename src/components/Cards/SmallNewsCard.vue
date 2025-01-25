<template>
  <div class="card_container">
    <div class="card_image">
      <img :src="sideNews.image" alt="" />
    </div>
    <div class="card_content">
      <div class="content_section">
        <h2>{{ sideNews.title }}</h2>
      </div>
      <div class="tags_section">
        <span v-for="tag in sideNews.tags" :key="tag.id">{{ tag.title }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    sideNews: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
.card_container {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  font-family: var(--font-family);
}

.card_container .card_image {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.card_image img {
  width: 100%;
  max-height: 250px;
}

.card_container .card_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
}

.card_content .tags_section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.tags_section span {
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--text-color);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

.card_content .content_section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.content_section h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-align: left;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .content_section h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  }
}
</style>