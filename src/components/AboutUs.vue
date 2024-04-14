<template>
  <div class="team">
    <div class="member">
      <img src="./path-to-image1.jpg" alt="Miembro 1">
      <h2>Tomás Ortiz Fajardo</h2>
    </div>
    <div class="member">
      <img src="./path-to-image2.jpg" alt="Miembro 2">
      <h2>Joan Jefferson Talizo Balbin</h2>
    </div>
    <div class="member">
      <img src="./path-to-image3.jpg" alt="Miembro 3">
      <h2>José Daniel Mario Calderón Huamán</h2>
    </div>
    <div class="member">
      <img src="./path-to-image4.jpg" alt="Miembro 4">
      <h2>Nombre Completo 4</h2>
    </div>
    <div class="member">
      <img src="./path-to-image5.jpg" alt="Miembro 5">
      <h2>Nombre Completo 5</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage'
}
</script>

<style scoped>
.team {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.member {
  text-align: center;
}
.member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
