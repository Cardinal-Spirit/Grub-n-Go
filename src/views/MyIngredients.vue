<template>
    <div>
        <label>Ingredient Name:</label>
        <input type="text" v-model="name"/>
        <button @click="submitIngred()">Add</button>
        <div>
            <ul>
                <li v-for="entry in ingredList" v-bind:key="entry.cheap_id">
                    {{entry.ingredName}}
                    <button @click="deleteIngred(entry.cheap_id)">Delete</button>
                </li>
            </ul>
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
            console.log(ingred)
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

</style>