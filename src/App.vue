<template>
  <div id="app">
    <div id="nav">
      <LoggedIn></LoggedIn> | 
      <router-link to="/Register">Register</router-link> | 
      <router-link to="/Login">Login</router-link> | 
      <router-link to="/MyIngredients">My Ingredients</router-link> | 
      <router-link to="/MyShoppingList">My Shopping List</router-link> | 
      <router-link to="/Recipes">Recipes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LoggedIn from "./components/LoggedIn"
export default {
  components: {"LoggedIn": LoggedIn}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
