<template>
    <div>
        <input type="text" v-model="name"/>
        <button @click="submitIngred()">Add to Owned Ingredients</button>
        <div>
            <div v-for="entry in ingredList" v-bind:key="entry.cheap_id" id="ingredCard">
                <h4>{{entry.ingredName}}</h4>
                <button @click="deleteIngred(entry.cheap_id)" id="delete">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {ingredRef} from '../main'
export default {
    data() {
        return {
            name: '',
            ingredList: []
        }
    },
    methods: {
        async submitIngred() {
            const ingred = {
                ingredName: this.name,
                user: firebase.auth().currentUser.uid,
                cheap_id: this.name + firebase.auth().currentUser.uid
            }
            this.name = ''
            await ingredRef.orderByChild('cheap_id').equalTo(ingred.cheap_id).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
            ingredRef.push(ingred)
        },
        async deleteIngred(key){
            ingredRef.orderByChild('cheap_id').equalTo(key).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
        }
    },
    created() {
        ingredRef.orderByChild('user').equalTo(firebase.auth().currentUser.uid).on('value',(snapshot)=>{
            this.ingredList = snapshot.toJSON();
        })
    }
}
</script>

<style scoped>
    #ingredCard {
        background-color: #EDF1EA;
        width: 20%;
        display: inline-block;
        padding: 10px;
        margin: 10px;
        border: solid lightgray 2px;
    }
    button {
        background-color: white;
        border: solid transparent 1px;
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
        font-size: 1.0rem;
    }
    button:hover {
        color: white;
        background-color: #3a7ca5;
    }
    input {
        width: 40%;
        border: 1px solid transparent;
        border-radius: 20px;
        padding-left: 1%;
    }
    #delete:hover {
        color: white;
        background-color: #F4532F;
    }
</style>