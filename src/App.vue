<script setup>
  import GameCounter from './components/GameCounter.vue';
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 50;
  const EXAMPLE = 'hello+';
  const RANDOM = Math.random()*100;
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="wrapper__content">
        <h1 class="title">Guess the number! 🎉</h1>
        <!--
        Vue convierte automáticamente los nombres de atributos en kebab-case (con guiones)
        en el template del componente padre a camelCase al pasarlos como props al componente hijo.
        min-number >>> minNumber
        -->
        <div>
          <GameCounter :min-number="MIN_NUMBER" :max-number="MAX_NUMBER" :example="EXAMPLE" :random="RANDOM"/>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
  .main{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(to bottom right, #60fab2, #3b83f6, #2563e2)
  }
</style>
