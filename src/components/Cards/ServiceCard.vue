<template>
  <div class="card">
    <div class="card_image">
      <div class="card_circle">
        <img :src="service.image" alt="card_image" />
      </div>
    </div>
    <div class="card_content">
      <h2>{{ service.name }}</h2>
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 385px;
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-family: var(--font-family);
}

.card .card_image {
  width: 152px;
  height: 152px;
  background-color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 3px;
}

.card_image .card_circle {
  width: 144px;
  height: 144px;
  background-color: var(--btn-background);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card_circle img {
  width: 48px;
  height: 48px;
}

.card .card_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: var(--text-color);
  width: 90%;
  margin: 0 auto;
}

.card_content h2 {
  font-size: 21px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
}

.card_content p {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.004em;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #646A69;
}
</style>