<template>
    <div id="registerCard">
        <div v-if="error" class="error">{{error.message}}</div>
        <h4>Register</h4>
        <div>
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
    #registerCard {
        background-color: #EDF1EA;
        width: 50%;
        padding: 10px;
        margin: auto;
        margin-top: 5%;
        border: solid lightgray 2px;
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