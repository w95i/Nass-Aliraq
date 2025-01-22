<template>
  <div class="body">
    <section class="navbar_section">
      <NavbarLayout />
    </section>
    <router-view />
  </div>
</template>

<script>
import NavbarLayout from '@/Layout/NavbarLayout'
export default {
  name: 'App',
  components:{
    NavbarLayout
  }
}
</script>

<style>
@import url('@/assets/Css/Root.css');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body{
  background-color: var(--primary-color);
}

.navbar_section{
  padding: 32px 88px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (max-width: 768px){
  .navbar_section{
    padding: 32px 16px;
  }
  
}
</style>
