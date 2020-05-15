<template>
    <div>
        <input type="text" v-model="name"/>
        <button @click="submitItem()">Add to Shopping List</button>
        <div>
            <div v-for="entry in itemList" v-bind:key="entry.cheap_id" id="shopCard">
                <h4>{{entry.itemName}}</h4>
                <button @click="submitIngred(entry, entry.cheap_id)">Add To Ingredients</button>
                <button @click="deleteItem(entry.cheap_id)" id="delete">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {shopRef} from '../main'
import {ingredRef} from '../main'
export default {
    data() {
        return {
            name: '',
            itemList: []
        }
    },
    methods: {
        async submitItem() {
            const item = {
                itemName: this.name,
                user: firebase.auth().currentUser.uid,
                cheap_id: this.name + firebase.auth().currentUser.uid
            }
            this.name = ''
            await shopRef.orderByChild('cheap_id').equalTo(item.cheap_id).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
            shopRef.push(item)
        },
        async submitIngred(ingred, key) {
            const toAdd = {
                ingredName: ingred.itemName,
                user: ingred.user,
                cheap_id: ingred.cheap_id
            }
            await ingredRef.orderByChild('cheap_id').equalTo(key).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
            ingredRef.push(toAdd)
            shopRef.orderByChild('cheap_id').equalTo(key).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
        },
        async deleteItem(key) {
            shopRef.orderByChild('cheap_id').equalTo(key).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
        }
    },
    created() {
        shopRef.orderByChild('user').equalTo(firebase.auth().currentUser.uid).on('value',(snapshot)=>{
            this.itemList = snapshot.toJSON();
        })
    }
}
</script>

<style scoped>
    #shopCard {
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