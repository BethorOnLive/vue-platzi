<script setup lang="ts">
    import JSConfetti from 'js-confetti';
    import { ref, watch } from 'vue';
    import { getRandomNumbers } from '@/utils/randomNumbers';

    const id = Math.random().toString();
    const myAttr = 'aria-label';
    const araiaLabelValue = 'numero del contador';

    //const counter = ref(0);
    //const increment = () => counter.value++;
    //const decrement = () => counter.value--;

    const { minNumber, maxNumber } = defineProps({
        minNumber: {
            type: Number,
            required: true,
        },
        maxNumber: {
            type: Number,
            required: true,
        },

        example: {
            type: String,
            validator: (value: string) => value.includes('+') || value.includes('-')  
        },

        random: {
            type: Number,
            default: 12345,
        }

    });

    const { initialRandomNumber, numberToGuess } = getRandomNumbers({ maxNumber, minNumber });

    const jsConfetti = new JSConfetti();

    const counter = ref(initialRandomNumber);
    const isWinner = ref(false);

    const increment = () => {
        if (maxNumber === counter.value) return 
        counter.value++;
    }

    const decrement = () => {
        if (counter.value === minNumber) return 
        counter.value--;
    }

// Acceder como props.minNumber, props.maxNumber
    console.log(`minNumber: ${minNumber}, maxNumber: ${maxNumber}`);

    watch(counter, () =>{
        console.log('El contador ha cambiado', counter.value);
        if(counter.value === numberToGuess){
            console.log("Adivinaste");
            
           jsConfetti.addConfetti();
           isWinner.value = true; 
        }
    });
    
</script>


<template>
    <div class="counter-game">
        <span :[myAttr]="araiaLabelValue" :id="id" class="number">{{ counter }}</span>
        <div class="button-group">
            <button :disabled="isWinner" @click="decrement">-</button>
            <button :disabled="isWinner" @click="increment">+</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .counter-game{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .number{
        color: white;
        font-size: 5rem;
        font-weight: bold;
        opacity: 0.9;
        transition: all 0.3s ease-in-out;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        text-align: center;
    }
    .number:hover{
        transform: scale(1.1);
        color: darkblue;
    }
    .button-group{
        display: flex;
        gap: 1rem;
    }
    .clue{
        position: absolute;
        top: 1rem;
        right: 1rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        color: white;
        border: 2px solid white;
        cursor: pointer;
    }
    button{
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
        border-radius: 1rem;
        background-color: rgba(119, 170, 251, 0.914);
        color: white;
        border: none;
        box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        cursor: pointer;
    }
    button:hover:not(:disabled){
        background-color: rgba(26, 77, 188, 0.7);
    }

</style>