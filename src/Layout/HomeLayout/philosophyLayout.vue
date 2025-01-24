<template>
  <div class="philosophy_container">
    <div class="philosophy_header">
      <p><span></span> The company's philosophy</p>
      <hr />
    </div>
    <div class="philosophy_content">
      <div class="content_text">
        <h2>We bear the responsibility of developing the sector.</h2>
        <p>
          Elevate your brand with our comprehensive marketing solutions,
          including Digital Marketing, Content Creation, and Social Media
          Strategy. Enhance visibility through expert SEO and PPC management,
        </p>
      </div>
      <div class="content_number">
        <div class="number_section" v-for="counter in counters" :key="counter.id">
          <h2>{{ counter.number }}</h2>
          <p>{{ counter.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PhilosophyLayout",
    data() {
        return {
            counters: [
                { id: 1 ,number: "1,200+" , text: "Clients" },
                { id: 2 ,number: "20+", text: "Branches" },
                { id: 3 ,number: "200+", text: "Number of Employees" },
                { id: 4 ,number: "315+", text: "Sales Representative" },
            ],
        };
    }
};
</script>

<style scoped>
.philosophy_container {
  padding: 150px 72px;
}
.philosophy_header {
  text-align: start;
}

.philosophy_header p span {
  background-color: var(--text-color);
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
}

.philosophy_header p {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px 0;
  color: var(--btn-background);
}

.philosophy_container .philosophy_content {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}

.philosophy_content .content_text {
  width: 592px;
  height: 504px;
  gap: 24px;
  font-family: var(--font-family);
  padding: 0 30px 0 0;
}

.content_text h2 {
  font-size: 62px;
  font-weight: 600;
  line-height: 75px;
  letter-spacing: -0.03em;
  text-align: left;
  color: var(--btn-background);
  margin-bottom: 24px;
}

.content_text p {
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #646a69;
}

.philosophy_content .content_number {
  width: 334px;
  height: 568px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 64px;
  font-family: var(--font-family);
}

.content_number .number_section {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: start;
  gap: 8px;
}

.number_section h2 {
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.03em;
  color: var(--text-color);
}

.number_section p {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.004em;
  color: #646a69;
}
</style>