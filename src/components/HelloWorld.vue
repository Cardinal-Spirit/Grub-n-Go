<template>
  <div>
  </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"
export default {
  created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.$router.replace({name: "MyIngredients"});
            }else{
                this.$router.replace({name: "Login"});
            }
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
