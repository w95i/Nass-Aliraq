<template>
  <section class="creative-section">
    <div class="content_wrapper">
      <div class="content">
        <h1>
          Transform your business <br />
          with our
          <span
            >Creative <br />
            Marketing Solutions!</span
          >
        </h1>
        <p>
          Welcome to Focus Marketing Solutions! We're a creative team dedicated
          to driving your business forward with innovative marketing strategies.
          From digital marketing to social media management, we’re here to help
          you succeed. Let’s build something extraordinary together.
        </p>
        <div class="buttons">
          <c-button buttonName="Join us" type="button" class="primary" />
          <c-button buttonName="Contact us" type="button" class="secondary" />
        </div>
      </div>
      <div class="image_wrapper">
        <img src="@/assets/Images/Rectangle 2689.png" alt="Building" />
      </div>
    </div>
    <div class="images">
      <div class="image">
        <img src="@/assets/Images/Image.jpg" alt="Building" />
      </div>
      <div class="image2">
        <img src="@/assets/Images/Image2.jpg" alt="Handshake" />
      </div>
    </div>
    <div class="shadow_overlay"></div>
  </section>
</template>
  
  <script>
export default {
  name: "CreativeSection",
};
</script>

<style scoped>
.shadow_overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  box-shadow: inset 0px -70px 50px 9px var(--primary-color);
  z-index: 2;
  pointer-events: none;
}
.creative-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  padding: 3rem 88px 0;
  gap: 2rem;
  max-height: 900px;
  animation: fadeInSlide 2s ease-out;
}

.content_wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}

.content {
  width: 50%;
  font-family: var(--font-family);
  animation: slideInFromLeft 2s ease-out;
}

.content h1 {
  font-size: 50px;
  font-weight: 600;
  line-height: 63px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.content h1 span {
  background: linear-gradient(
    93.17deg,
    #e879f9 28.64%,
    rgba(199, 94, 208, 0.37) 88.38%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 32px 0 40px;
}

.buttons {
  display: flex;
  gap: 1rem;
}

button {
  font-family: var(--font-family);
  padding: 12px 20px;
  border-radius: 200px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button.primary {
  background-color: var(--btn-background);
  color: var(--text-color);
}

button.primary:hover {
  background-color: var(--text-color);
  color: var(--secondary-color);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

button.secondary {
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--text-color);
}

button.secondary:hover {
  background-color: var(--text-color);
  color: var(--secondary-color);
  transform: scale(1.1);
}

.image_wrapper {
  width: 50%;
  text-align: end;
  animation: slideInFromRight 2s ease-out;
}

.image_wrapper img {
  border-radius: 16px;
}

.images {
  width: 100%;
  display: flex;
  align-items: first baseline;
}

.images .image,
.images .image2 {
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  animation: fadeInSlide 2s ease-out;
}

.images .image2 {
  text-align: end;
  margin-right: 230px;
}

.image img {
  width: 488px;
  height: auto;
  border-radius: 16px;
}
.image2 img {
  width: 300px;
  height: auto;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .shadow_overlay {
    display: none;
  }
  .creative-section {
    padding: 3rem 15px;
  }
  .content {
    width: 100%;
  }
  .content h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
  }

  .content p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }

  .buttons {
    flex-direction: column;
  }

  button {
  padding: 20px;
  border-radius: 200px;
  font-size: 16px;
}

  .image_wrapper {
    display: none;
  }

  .images {
    display: none;
  }
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>