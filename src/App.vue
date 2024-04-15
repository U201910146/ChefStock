<template>
  <div id="app">
    <Toolbar class="header">
      <template #start>
        <h1>FoodStockOS</h1>
      </template>
      <template #center>
        <router-link to="/homepage"><Button :label="$t('Homepage')" /></router-link>
        <router-link to="/chefstock"><Button :label="$t('ChefStock')" /></router-link>
        <router-link to="/plans"><Button :label="$t('Plans')" /></router-link>
        <router-link to="/aboutus"><Button :label="$t('AboutUs')" /></router-link>
      </template>
      <template #end>
        <SelectButton :options="languages" v-model="$i18n.locale" optionLabel="name" optionValue="code"></SelectButton>
        <router-link to="/login"><Button :label="$t('LogIn')" class="login" /></router-link>
        <router-link to="/signup"><Button :label="$t('SignUp')" class="signup" /></router-link>
      </template>
    </Toolbar>
    <div class="content">
    <router-view/>
    </div>
    <Toolbar class="footer">
      <template #start>
        <router-link to="/homepage"><Button :label="$t('Homepage')" /></router-link>
        <router-link to="/chefstock"><Button :label="$t('ChefStock')" /></router-link>
        <router-link to="/plans"><Button :label="$t('Plans')" /></router-link>
        <router-link to="/aboutus"><Button :label="$t('AboutUs')" /></router-link>
      </template>
      <template #end>
        <p class="rights">2024 All rights reserved.</p>
      </template>
    </Toolbar>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import SelectButton from "primevue/selectbutton";

export default {
  name: 'LandingPage',
  components: {
    Button,
    Toolbar,
    SelectButton
  },
  data(){
    return{
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Spanish', code: 'es' },
      ]
    }
  }
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
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.right {
  position: absolute;
  right: 20px;
}
.right .rights {
  font-size: 0.8em;
}

.content{
  margin-bottom: 300px;
}
</style>
