<script setup>

import { watch } from 'vue'
import { useBMIStore } from './stores/BMIStore'

const BMIStore = useBMIStore()

watch(() => [BMIStore.height, BMIStore.weight], ([height, weight]) => {
  BMIStore.calculateBMI(height, weight)
})

</script>

<template>

<h2>Enter your height and weight</h2>

<div>
    <label for="userHeight">Height in meters </label>
    <input v-model="BMIStore.height" id="userHeight"><br>
    <label for="userWeight">Weight in kilograms</label>
    <input v-model="BMIStore.weight" id="userWeight">
</div>

<div v-if="BMIStore.userBMI">
    <h3>Your BMI: {{ BMIStore.userBMI }}</h3>
</div>

</template>

<style scoped>

</style>
