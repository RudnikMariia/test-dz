<template>
  <div class="inventory-layout container-fluid">
    <Header />
    <div class="d-flex">
      <div class="sidebar bg-light pt-5 w-auto">
        <div class="user-info d-flex align-items-center my-3 justify-content-center">
          <b-img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="User" rounded="circle" width="80" height="80" class="mr-2"></b-img>
        </div>
        <nav class="d-flex flex-column text-uppercase">
          <router-link to="/orders">
            {{ $t('orders') }}
            <div class="link-underline"></div>
          </router-link>
          <router-link to="/products">
            {{ $t('products') }}
            <div class="link-underline"></div>
          </router-link>
        </nav>
      </div>
      <div class="main-content w-100 pt-4">
        <transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft"
            mode="out-in"
        >
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/HeaderComp.vue';
</script>

<style>
.fade-router-enter-active,
.fade-router-leave-active {
  transition: opacity 0.5s ease;
}

.fade-router-enter-from,
.fade-router-leave-to {
  opacity: 0;
}
nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 25px;
  text-decoration: none;
}

.link-underline {
  width: 100%;
  height: 3px;
  background: #42b983;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  margin-top: 3px;
}

nav a.router-link-exact-active .link-underline {
  opacity: 1;
}
.main-content {
  padding-left: 60px;
  overflow: scroll;
}
</style>
