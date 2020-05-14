<template>
    <div>
        <router-link v-if="loggedIn" to="/Login">
            <span v-on:click="signOut">Sign Out</span>
        </router-link>
    </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"
export default {
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
    },
    methods: {
        async signOut(){
            try{
                const data = await firebase.auth().signOut();
                console.log(data);
                alert("Signed Out!");
            }catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>

</style>