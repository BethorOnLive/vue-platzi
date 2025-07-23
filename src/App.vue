<script setup>
  import GameCounter from './components/GameCounter.vue';
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="wrapper__content">
        <h1 class="title">Guess the number!</h1>
        <span>{{ counter }}</span>
        <div>
          <GameCounter/>
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
