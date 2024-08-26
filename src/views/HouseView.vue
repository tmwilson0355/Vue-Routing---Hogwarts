<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()

let houseName = ref('')
let houseColours = ref('')
let houseFounder = ref('')
let houseAnimal = ref('')
let houseElement = ref('')
let houseGhost = ref('')

console.log(route)

fetch(`https://wizard-world-api.herokuapp.com/Houses/${route.params.id}`)

.then(response => {
    return response.json()
})

.then(house => {
    houseName.value = house.name
    houseColours.value = house.colours
    houseFounder.value = house.founder
    houseAnimal.value = house.animal
    houseElement.value = house.element
    houseGhost.value = house.ghost
})

</script>

<template>
    <div class="house-info">
        <h1>{{ houseName }}</h1>
        <p>{{ houseColours }}</p>
        <p>{{ houseFounder }}</p>
        <p>{{ houseAnimal }}</p>
        <p>{{ houseElement }}</p>
        <p>{{ houseGhost }}</p>
    </div>

</template>

<style scoped>

</style>