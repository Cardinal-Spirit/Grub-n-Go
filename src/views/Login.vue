<template>
    <div>
        Login
        <form @submit.prevent="clicked">
            <div class="login">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div>
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Don't have an account? Click here to <router-link to="/Register">Register</router-link></span>
    </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"
export default {
    data() {
        return {
            email: "",
            password: "",
            error: ""
        }
    },
    methods: {
        async clicked() {
            try{
                const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(user);
                this.$router.replace({name: "MyIngredients"})
                alert("Logged In!");
            }catch(e){
                alert(e);
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
    input {
        width: 200px;
        padding: 15px;
        margin: 10px;
        font-size: 14px;
    }
    button {
        width: 100px;
        height: 20px;
        font-size: 100%;
    }
</style>