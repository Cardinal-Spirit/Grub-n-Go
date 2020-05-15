<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Register" v-if="!loggedIn">Register</router-link>
      <router-link to="/Login" v-if="!loggedIn">Login</router-link>
      <router-link to="/MyIngredients">My Ingredients</router-link>
      <router-link to="/MyShoppingList">My Shopping List</router-link>
      <router-link to="/Recipes">Recipes</router-link>
      <LoggedIn></LoggedIn>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LoggedIn from "./components/LoggedIn"
import * as firebase from "firebase/app"
import "firebase/auth"
export default {
  components: {
    "LoggedIn": LoggedIn
  },

  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
  })
  },
  data() {
      return {
          loggedIn: false
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #81c3d7;
}

#nav {
  padding-top: 0px;
  padding-bottom: 0px;
  width: 100%;
  margin: 0px;
  background-color: #3a7ca5;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: bold;
    color: #d9dcd6;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 16px;
    text-decoration: none;
    font-size: 20px;

    &.router-link-exact-active {
      background-color: #2f6690;
    }
  }
  a:hover {
    background-color: #2f6690;
  }
}
</style>
