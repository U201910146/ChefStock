<template>
  <div class="container">
    <h1 class="welcome-text">Bienvenido a FoodStockOS</h1>
    <div id="app">
    <img class="centered-image" src="../assets/inventariores.jpg" alt="Inventario">
      <Button :label="$t('getStarted')" class="p-button-raised p-button-rounded p-button-success get-started-button"></Button>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'HomePage',
  components: {
    Button
  }
}
</script>

<style scoped>
.get-started-button{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.welcome-text {
  text-align: left;
}

.centered-image{
  width: 50%;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
