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
    <br>
    <div class="houseNames">
      <div class="gryffindor" @click="() => {
        $router.push(`/house/0367baf3-1cb6-4baf-bede-48e17e1cd005`
        )
      }">
        <h3>Gryffindor</h3>
        <img class="houseImg"
          src="/Users/twilson96/Library/CloudStorage/OneDrive-Humana/Desktop/vue-router-hogwarts/vue-router-example-pt1-student/src/assets/gryffindor.png">
      </div>
      <div class="slytherin" @click="() => {
        $router.push(`/house/9704c47-f92e-40a4-8771-ed1899c9b9c1
`)
      }">
        <h3>Slytherin</h3>
        <img class="houseImg"
          src="/Users/twilson96/Library/CloudStorage/OneDrive-Humana/Desktop/vue-router-hogwarts/vue-router-example-pt1-student/src/assets/slytherin.png">
      </div>
      <div class="ravenclaw" @click="() => { $router.push(`/house/805fd37a-65ae-4fe5-b336-d767b8b7c73a`) }">
        <h3>Ravenclaw</h3>
        <img class="houseImg"
          src="/Users/twilson96/Library/CloudStorage/OneDrive-Humana/Desktop/vue-router-hogwarts/vue-router-example-pt1-student/src/assets/ravenclaw.png">
      </div>
      <div class="hufflepuff" @click="() => { $router.push(`/house/85af6295-fd01-4170-a10b-963dd51dce14`) }">
        <h3>Hufflepuff</h3>
        <img class="houseImg"
          src="/Users/twilson96/Library/CloudStorage/OneDrive-Humana/Desktop/vue-router-hogwarts/vue-router-example-pt1-student/src/assets/hufflepuff.png">
      </div>
    </div>

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

.houseNames {
  padding-top: 36px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.houseNames {
  display: flex;


}

.houseImg {
  height: 200px;
  width: 200px;
}

.gryffindor,
.slytherin,
.ravenclaw,
.hufflepuff {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
