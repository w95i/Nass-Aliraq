<template>
  <div class="about_us_container">
    <div class="about_us_content">
      <h2>About us</h2>
      <p>
        Welcome to <span>Focus Marketing Solutions!</span> We're a creative team
        dedicated to driving your business forward with innovative marketing
        strategies. From digital marketing to social media management, we're
        here to help you succeed.
        <span>Let's build something extraordinary together.</span>
      </p>
      <c-button type="button" buttonName="Read more" class="read_more_btn" />
    </div>
    <img src="@/assets/Images/Lines.png" alt=""  class="desktop_image"/>
    <img src="@/assets/Images/Lines2.png" alt="" class="mobile_image"/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about_us_container {
  position: relative;
  width: 100%;
  height: 626px;
  margin-top: 110px;
}

.about_us_container .about_us_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  color: var(--text-color);
  font-family: var(--font-family);
  width: 50%;
  opacity: 0;
  animation: fadeIn 1s forwards ease-in-out;
}

.about_us_content h2 {
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  animation: slideUp 0.8s forwards ease-out;
}

.about_us_content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: start;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.about_us_content p span {
  font-weight: 500;
  color: var(--secondary-color);
}

.about_us_content .read_more_btn {
  margin-top: 40px;
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: transparent;
  border-radius: 200px;
  padding: 16px 24px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.read_more_btn:hover {
  transform: scale(1.1);
  background-color: var(--secondary-color);
  color: #fff;
}

.about_us_container .desktop_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
}

.about_us_container .mobile_image {
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
}

.about_us_container .mobile_image {
  display: none;
}

@media (max-width: 768px) {
  .about_us_container {
    height: 434px;
    margin-top: 0;
  }

  .about_us_container .about_us_content {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1rem;
    width: 100%;
  }

  .about_us_content h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 68px;
    letter-spacing: -0.03em;
  }

  .about_us_content p {
    line-height: 31px;
    font-size: 18px;
    text-align: center;
  }

  .about_us_content .read_more_btn {
    margin-top: 82px;
    width: 100%;
  }

  .about_us_container .desktop_image {
    display: none;
  }

  .about_us_container .mobile_image {
    display: block;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>