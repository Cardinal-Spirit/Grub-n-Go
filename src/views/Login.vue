<template>
    <div id="loginCard">
        <h4>Login</h4>
        <div>
            <form @submit.prevent="clicked">
                <div class="login">
                    <input type="email" v-model="email" placeholder="email">
                </div>
                <div>
                    <input type="password" v-model="password" placeholder="password">
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
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
    #loginCard {
        background-color: #EDF1EA;
        
        width: 50%;
        padding: 10px;
        margin: auto;
        margin-top: 5%;
        border: solid lightgray 2px;
    }
    form {
        left: auto;
        right: auto;
    }
    input {
        width: 200px;
        padding: 15px;
        margin: 10px;
        font-size: 14px;
    }
    button {
        background-color: white;
        border: solid lightgray 1px;
        border-radius: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 5px;
        font-size: 1.0rem;
    }
    button:hover {
        color: white;
        background-color: #3a7ca5;
    }
</style>