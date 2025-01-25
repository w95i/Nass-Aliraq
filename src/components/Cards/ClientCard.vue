<template>
    <div class="card_container">
      <div class="info_section">
        <div class="image_section">
          <img :src="testimonial.image" :alt="testimonial.name" />
          <span class="badge">
            <font-awesome-icon :icon="['fas', 'quote-left']" />
          </span>
        </div>
        <p>{{ testimonial.name }}</p>
      </div>
      <div class="feedback_section">
        <p>"{{ testimonial.feedback }}"</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      testimonial: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card_container {
    width: 426px;
    height: 407px;
    border-radius: 10px;
    background-color: var(--primary-color);
    padding: 45px;
    font-family: var(--font-family);
  }
  
  .card_container .info_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
  
  .info_section .image_section {
    width: 64px;
    height: 64px;
    position: relative;
  }
  
  .image_section img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  
  .image_section .badge {
    background-color: aquamarine;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -8px;
    top: 0;
  }
  
  .info_section p {
    font-size: 16px;
    font-weight: 600;
    line-height: 20.3px;
    text-align: left;
    color: var(--text-color);
  }
  
  .feedback_section {
    padding: 15px 0;
    color: var(--text-color);
  }
  
  .feedback_section p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
  }
  </style>
  