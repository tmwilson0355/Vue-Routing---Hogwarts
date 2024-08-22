<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <header>
      <nav>
        <img src="./assets/hogwarts.png" />
        <div class="nav-items">
          <RouterLink to="/" class="nav-item">Home</RouterLink>
          <RouterLink to="/about" class="nav-item">About</RouterLink>
          <RouterLink to="/curriculum" class="nav-item">Curriculum</RouterLink>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  height: 150px;
  width: 100vw;
  background-color: #740001;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  padding-right: 100px;
  padding-left: 100px;
  height: 100%;
}

.nav-item {
  padding-left: 1rem;
  color: #d3a625;
  font-size: large;
}

.nav-item:hover {
  padding-left: 1rem;
  color: #d3a625;
  font-size: large;
  text-decoration: underline;
  cursor: pointer;
}

.nav-items {
  display: flex;
  align-items: center;
}

img {
  max-height: 100vh;
  max-width: 100px;
}

main {
  padding: 2rem;
}
</style>
