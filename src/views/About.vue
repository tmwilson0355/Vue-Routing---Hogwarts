<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goToCurriculumPage() {
  router.push('/curriculum')
}
</script>

<template>
  <div class="wrapper">
    <h1>About us</h1>
    <p>This prestigious institution is steeped in centuries of magical tradition. Nestled amidst the enchanting
      landscape
      of Scotland, Hogwarts is more than just a school; it's a home for young witches and wizards seeking to unlock
      their full potential in a supportive and enriching environment. With a distinguished faculty, state-of-the-art
      facilities, and a diverse array of magical subjects, Hogwarts offers students an unparalleled education that
      prepares them for a lifetime of magical discovery and personal growth.</p>
    <button @click="goToCurriculumPage()">View our curriculum!</button>

    <h1>Hogwarts Houses</h1>
    <p>Every student is sorted into one of four prestigious houses: Gryffindor, HufflePuff, RavenClaw, or Slytherin.
      Each house embodies unique traits and values, fostering a sense of belonging, camaraderie, and personal growth.
      Together, these houses form the foundation of Hogwarts, shaping the character and experiences of its students as
      they embark on their magical journey. </p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  padding: 16px;
  max-width: 50%;
  text-align: center;
}

button {
  margin-top: 16px;
  margin-bottom: 100px;
  background-color: #222f5b;
  color: white;
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 5px;
}

.houses {
  padding-top: 36px;
  display: flex;
  justify-content: center;
}
</style>
