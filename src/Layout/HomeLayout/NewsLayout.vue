<template>
  <div class="news-container">
    <div class="news-header">
      <h2>News</h2>
    </div>
    <div class="news-posts">
      <div class="origin-news">
        <BigNewsCard :originMain="originMain" />
      </div>
      <div class="side-news">
        <SmallNewsCard
          v-for="news in sideNews"
          :key="news.id"
          :sideNews="news"
        />
      </div>
    </div>
    <c-button type="button" buttonName="View all news" class="news-button" />
  </div>
</template>
  
  <script>
import BigNewsCard from "@/components/Cards/BigNewsCard.vue";
import SmallNewsCard from "@/components/Cards/SmallNewsCard.vue";

export default {
  components: {
    BigNewsCard,
    SmallNewsCard,
  },
  data() {
    return {
      originMain: {
        id: 1,
        image: require("@/assets/Images/news1.png"),
        tags: [
          { id: 1, title: "Company" },
          { id: 2, title: "Contracts" },
        ],
        title:
          "We specialize in fostering effective partnerships with supportive companies to drive mutual success.",
        description:
          "We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.",
      },
      sideNews: [
        {
          id: 1,
          image: require("@/assets/Images/news2.png"),
          tags: [
            {
              id: 1,
              title: "Company",
            },
            {
              id: 2,
              title: "Contracts",
            },
          ],
          title:
            "We incorporate the formation of public partnerships as a core aspect of our operations.",
        },
        {
          id: 2,
          image: require("@/assets/Images/news3.png"),
          tags: [
            {
              id: 1,
              title: "Company",
            },
            {
              id: 2,
              title: "Contracts",
            },
          ],
          title:
            "We incorporate the formation of public partnerships as a core aspect of our operations.",
        },
        {
          id: 3,
          image: require("@/assets/Images/news4.png"),
          tags: [
            {
              id: 1,
              title: "Company",
            },
            {
              id: 2,
              title: "Contracts",
            },
          ],
          title:
            "We incorporate the formation of public partnerships as a core aspect of our operations.",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.news-container {
  padding: 98px 91px;
  font-family: var(--font-family);
  position: relative;
}

.news-header h2 {
  margin-bottom: 108px;
  color: var(--text-color);
  font-size: 44px;
  font-weight: 500;
  line-height: 54px;
}

.news-posts {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
}

.news-posts .origin-news,
.news-posts .side-news {
  width: 48%;
}

.news-posts .side-news {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 850px;
  gap: 32px;
}

.side-news::-webkit-scrollbar {
  width: 3px;
}

.side-news::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
}

.side-news::-webkit-scrollbar-thumb {
  background: var(--btn-background);
}

.side-news::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

.news-button {
  position: absolute;
  right: 95px;
  top: 80px;
  display: block;
  margin: 20px auto;
  background-color: var(--btn-background);
  border-radius: 200px;
  width: 160px;
  height: 55px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  text-align: center;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .news-container {
    padding: 70px 10px;
  }

  .news-header h2 {
    margin-bottom: 15px;
    font-size: 24px;
    text-align: center;
  }

  .news-posts {
    flex-direction: column;
    gap: 32px;
    width: 100%;
  }

  .news-posts .origin-news,
  .news-posts .side-news {
    width: 100%;
  }

  .news-button {
  position: relative;
  bottom: 40px;
  right: 0;
  left: 0;
  top: 0;
  margin: 25px auto;
  width: 100%;
}
}
</style>
  