<template>
  <div class="center">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="" class="brand-logo center-logo">
            <img src="./assets/logo.png" class="responsive-img" style="height:74px">
            <img src="./assets/name.png" class="responsive-img" style="height:74px">
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="#home">Home</router-link></li>
            <li><router-link to="#why-us">Why Us</router-link></li>
            <li><router-link to="#subjects">Subjects</router-link></li>
            <!-- <li><router-link to="#faculty">Faculty</router-link></li> -->
            <li><router-link to="#faq">FAQs</router-link></li>
            <li><router-link to="#contact">Contact Us</router-link></li>
          </ul>
        </div>
    </nav>
  </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.nav-wrapper {
  background-color: #DAF4FA;
}
a {
  color: #000 !important;
  font-weight: 700;
}
.brand-logo {
  display: flex !important;
}
.navbar-fixed {
  height: 76px;
}
nav {
  height: 76px;
}
.hide-on-med-and-down {
  line-height: 76px;
}
.center-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .brand-logo {
  left: 45% !important;
}
}
</style>