<template>
  <div class="center navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <a href="" class="brand-logo">
          <img src="./assets/logo.png" class="responsive-img" style="height:60px">
          <img src="./assets/name.png" class="responsive-img" style="height:60px">
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="#home">Home</router-link></li>
          <li><router-link to="#why-us">Why Us</router-link></li>
          <li><router-link to="#subjects">Subjects</router-link></li>
          <li><router-link to="#faculty">Faculty</router-link></li>
          <li><router-link to="#contact">Contact Us</router-link></li>
        </ul>
      </div>
  </nav>
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
</style>