<template>
    <div>
        <label>Ingredient To Add:</label>
        <input type="text" v-model="name"/>
        <button @click="submitItem()">Add</button>
        <div>
            <ul>
                <li v-for="entry in itemList" v-bind:key="entry.cheap_id">
                    {{entry.itemName}}
                    <button @click="deleteItem(entry.cheap_id)">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {shopRef} from '../main'
//import {ingredRef} from '../main'
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
            console.log(item)
            shopRef.push(item)
        },
        async deleteItem(key){
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

</style>