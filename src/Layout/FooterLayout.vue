<template>
  <div class="footer_container">
    <section class="titles_section">
      <div class="head_title">
        <h2>What are you waiting for?</h2>
        <p>
          Register now to get the best delivery experience for you and your
          clients in Iraq!
        </p>
      </div>
      <div class="email_title">
        <input type="email" class="email_input" placeholder="Your email" />
        <c-button type="submit" buttonName="register now" class="submit_btn" />
      </div>
    </section>
    <section class="links_section">
      <div class="left_section">
        <div class="logo_section">
          <img src="@/assets/Images/logo.png" alt="" />
        </div>
        <div class="links">
          <div class="links_col">
            <p>The company</p>
            <router-link
              v-for="link in CompanyLinks"
              :key="link.id"
              :to="link.path"
              >{{ link.name }}
              <span v-if="link.badge !== ''" class="footer_badge">{{
                link.badge
              }}</span></router-link
            >
          </div>
          <div class="links_col">
            <p>Help center</p>
            <router-link
              v-for="link in HelpCenter"
              :key="link.id"
              :to="link.path"
              >{{ link.name }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="social_section">
        <div class="social_wrapper">
          <div class="social_icon">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </div>
          <p>Facebook</p>
        </div>
        <div class="social_wrapper">
          <div class="social_icon">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </div>
          <p>Instagram</p>
        </div>
        <div class="social_wrapper">
          <div class="social_icon">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </div>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
    <p>&copy; 2024 Leader Express Delivery Company. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CompanyLinks: [
        {
          id: 1,
          path: "",
          name: "Who are we ",
          badge: "",
        },
        {
          id: 2,
          path: "",
          name: "Services",
          badge: "",
        },
        {
          id: 3,
          path: "",
          name: "Jobs",
          badge: "12",
        },
        {
          id: 4,
          path: "",
          name: "Branches",
          badge: "",
        },
      ],
      HelpCenter: [
        {
          id: 1,
          path: "",
          name: "Common questions",
        },
        {
          id: 2,
          path: "",
          name: "Contact us",
        },
        {
          id: 3,
          path: "",
          name: "Register as merchant",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer_container {
  background-color: var(--btn-background);
  background-image: url("@/assets/Images/Foote-waves.png");
  background-position-x: left;
  background-position-y: bottom;
  background-repeat: no-repeat;
  width: 100%;
  font-family: var(--font-family);
  padding: 130px 80px 55px;
}

.footer_container > p {
  text-align: center;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: -0.004em;
  padding-top: 165px;
}

.titles_section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 75px;
}

.titles_section .head_title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  color: var(--text-color);
}

.head_title h2 {
  font-size: 46px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.03em;
  text-align: left;
}

.head_title p {
  font-size: 24px;
  font-weight: 300;
  line-height: 45px;
  letter-spacing: -0.03em;
  text-align: left;
}

.titles_section .email_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.email_title input {
  width: 350px;
  height: 55px;
  border-radius: 200px;
  text-indent: 25px;
}

.email_title .submit_btn {
  width: 160px;
  height: 55px;
  border-radius: 200px;
  text-align: center;
  border: none;
  background-color: var(--primary-color);
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.004em;
}

.links_section {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.links_section .left_section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 75px;
}

.links_section .links {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.links .links_col {
  width: 175px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  color: var(--text-color);
}

.links_col p {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.004em;
  text-align: left;
}

.links_col a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}

.social_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.social_section .social_wrapper {
  background-color: rgba(255, 255, 255, 0.24);
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 260px;
  height: 56px;
  border-radius: 200px;
}

.social_wrapper .social_icon {
  background-color: var(--text-color);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social_icon svg {
  color: var(--btn-background);
  font-size: 24px;
}

.social_wrapper p {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.004em;
  text-align: left;
  color: var(--text-color);
}

.footer_badge {
  background-color: var(--primary-color);
  color: var(--text-color);
  border-radius: 15px;
  width: 24px;
  font-size: 10px;
  display: inline-block;
  text-align: center;
  align-content: center;
}

@media (max-width: 768px) {
  .footer_container {
    padding: 50px 10px 55px;
  }
  .footer_container > p {
    padding-top: 65px;
  }
  .titles_section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .titles_section .head_title {
    justify-content: center;
    align-items: center;
  }
  .head_title h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 64px;
    text-align: center;
  }
  .head_title p {
    text-align: center;
    font-size: 16px;
    line-height: 29px;
  }
  .titles_section .email_title {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .email_title input {
    width: 100%;
    height: 55px;
  }
  .email_title .submit_btn {
    width: 100%;
  }
  .links_section {
    flex-direction: column;
    gap: 25px;
  }
  .links_section .left_section {
    flex-direction: column;
    gap: 25px;
  }
}
</style>