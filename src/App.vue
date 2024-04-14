<template>
  <div id="app">
    <header>
      <div class="left">
        <h1>FoodStockOS</h1>
      </div>
      <div class="middle">
        <router-link to="/homepage"><button>Homepage</button></router-link>
        <router-link to="/chefstock"><button>ChefStock</button></router-link>
        <router-link to="/aboutus"><button>About Us</button></router-link>
        <router-link to="/plans"><button>Plans</button></router-link>
      </div>
      <div class="right">
        <router-link to="/login"><button class="login">Log In</button></router-link>
        <router-link to="/signup"><button class="signup">Sign Up</button></router-link>
      </div>
    </header>
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #F4F0DF;
  color: #494847;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
}
.main-content {
  text-align: left;
  padding: 100px 50px;
}
button {
  margin: 0 10px;
}
.login, .signup {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.signup {
  background-color: #4CAF50; /* Green */
}
.get-started {
  background-color: #ff6347; /* Tomato */
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
}
</style>
