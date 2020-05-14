<template>
    <div>
        <div v-if="error" class="error">{{error.message}}</div>
        Register
        <form @submit.prevent="clicked">
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        methods: {
            async clicked(){
                try{
                    const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                    console.log(user);
                    alert('Info Submitted!');
                    this.$router.replace({name: "MyIngredients"});
                }catch(e){
                    alert(e);
                    console.log(e);
                }
            }
        },
        data(){
            return {
                email: "",
                password: "",
                error: ""
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