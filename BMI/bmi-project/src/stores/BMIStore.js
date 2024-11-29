import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useBMIStore = defineStore('BMI', () => {

    const userBMI = ref('')

    const weight = ref('')

    const height = ref('')

    function calculateBMI(height, weight) {
        if (height && weight ) {
            const bmi = weight / (height * height)
            userBMI.value = bmi.toFixed(2)
        } else {
            userBMI.value = ''
        }
    }


    return {
        userBMI,
        weight,
        height,
        calculateBMI
    }



})