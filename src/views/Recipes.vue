<template>
    <div>
        <div>
            <button @click="reset()">All</button>
        
            <button @click="sortByType1('Western')">Western</button>
            <button @click="sortByType1('Caribbean')">Caribbean</button>
            <button @click="sortByType1('Italian')">Italian</button>
            <button @click="sortByType1('Chinese')">Chinese</button>
            <button @click="sortByType1('Indian')">Indian</button>
        
            <button @click="sortByType2('Mains')">Mains</button>
            <button @click="sortByType2('Sides')">Sides</button>
            <button @click="sortByType2('Appetizers')">Appetizers</button>
            <button @click="sortByType2('Desserts')">Desserts</button>
            <button @click="sortByType2('Breakfast')">Breakfast</button>
        
            <button @click="sortByType3('No-Cook')">No-Cook</button>
            <button @click="sortByType3('Baked')">Baked</button>
            <button @click="sortByType3('Vegetarian')">Vegetarian</button>
        </div>
        <div>
            <input type="text" v-model="search"/>
            <button @click="lookOut()">Search</button>
        </div> 
        <div v-for="entry in recipeList" v-bind:key="entry.name">
            <div id="recipeCards">
                <h3 id="nameCard">{{entry.name}}</h3>
                <h4>Calories: {{entry.caloriesPerServe}}</h4>
                <h4>Categories: {{entry.type1}} - {{entry.type2}} - {{entry.type3}}</h4>
                <iframe id="vid" v-bind:src="entry.videoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>Ingredients:</h4>
                <div id="ingredList">
                    <div  v-if="entry.ingredient1!==''">
                        <p>{{entry.ingredient1}}</p>
                        <button @click="submitIngred(entry.ingredient1)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient1)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient2!==''">
                        <p>{{entry.ingredient2}}</p>
                        <button @click="submitIngred(entry.ingredient2)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient2)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient3!==''">
                        <p>{{entry.ingredient3}}</p>
                        <button @click="submitIngred(entry.ingredient3)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient3)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient4!==''">
                        <p>{{entry.ingredient4}}</p>
                        <button @click="submitIngred(entry.ingredient4)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient4)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient5!==''">
                        <p>{{entry.ingredient5}}</p>
                        <button @click="submitIngred(entry.ingredient5)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient5)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient6!==''">
                        <p>{{entry.ingredient6}}</p>
                        <button @click="submitIngred(entry.ingredient6)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient6)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient7!==''">
                        <p>{{entry.ingredient7}}</p>
                        <button @click="submitIngred(entry.ingredient7)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient7)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient8!==''">
                        <p>{{entry.ingredient8}}</p>
                        <button @click="submitIngred(entry.ingredient8)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient8)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient9!==''">
                        <p>{{entry.ingredient9}}</p>
                        <button @click="submitIngred(entry.ingredient9)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient9)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient10!==''">
                        <p>{{entry.ingredient10}}</p>
                        <button @click="submitIngred(entry.ingredient10)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient10)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient11!==''">
                        <p>{{entry.ingredient11}}</p>
                        <button @click="submitIngred(entry.ingredient11)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient11)">Add To Shopping List</button>
                    </div>
                    <div  v-if="entry.ingredient12!==''">
                        <p>{{entry.ingredient12}}</p>
                        <button @click="submitIngred(entry.ingredient12)">Add To Ingredients</button>
                        <button @click="submitItem(entry.ingredient12)">Add To Shopping List</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import {shopRef} from '../main'
import {ingredRef} from '../main'
import {recipeRef} from '../main'
export default {
    data() {
        return {
            search: '',
            recipeList: []
        }
    },
    created() {
        recipeRef.on('value',(snapshot)=>{
            this.recipeList = snapshot.toJSON();
        })
    },
    methods: {
        async sortByType1(content) {
            recipeRef.orderByChild('type1').equalTo(content).on('value',(snapshot)=>{
            this.recipeList = snapshot.toJSON();
            })
        },
        async sortByType2(content) {
            recipeRef.orderByChild('type2').equalTo(content).on('value',(snapshot)=>{
                this.recipeList = snapshot.toJSON();
            })
        },
        async sortByType3(content) {
            recipeRef.orderByChild('type3').equalTo(content).on('value',(snapshot)=>{
                this.recipeList = snapshot.toJSON();
            })
        },
        async reset() {
            recipeRef.on('value',(snapshot)=>{
                this.recipeList = snapshot.toJSON();
            })
        },
        async lookOut() {
            recipeRef.orderByChild('name').startAt(this.search).endAt(this.search+'\uf8ff').on('value',(snapshot)=>{
                this.recipeList = snapshot.toJSON();
            })
        },
        async submitIngred(name) {
            const ingred = {
                ingredName: name,
                user: firebase.auth().currentUser.uid,
                cheap_id: name + firebase.auth().currentUser.uid
            }
            await ingredRef.orderByChild('cheap_id').equalTo(ingred.cheap_id).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
            ingredRef.push(ingred)
            alert("Added to Ingredient List!")
        },
        async submitItem(name) {
            const item = {
                itemName: name,
                user: firebase.auth().currentUser.uid,
                cheap_id: name + firebase.auth().currentUser.uid
            }
            await shopRef.orderByChild('cheap_id').equalTo(item.cheap_id).once("value").then(function(snapshot) {
                snapshot.forEach(function(child){
                    child.ref.remove()
                })
            })
            await shopRef.push(item)
            alert("Added To Shopping List!")
        }
    }
}
</script>

<style scoped>
    #recipeCards {
        background-color: #EDF1EA;
        width: 50%;
        display: inline-block;
        padding: 10px;
        margin: 10px;
        border: solid lightgray 2px;
    }
    button {
        background-color: white;
        border: solid transparent 1px;
        border-radius: 10%;
        padding: 5px;
        margin: 5px;
        font-size: 1.0rem;
    }
    button:hover {
        color: white;
        background-color: #3a7ca5;
    }
    #vid {
        border: solid lightgray 3px;
        width: 70%;
        height: 35vh;
    }
    #nameCard {
        background-color: lightgray;
    }
    input {
        width: 40%;
        border: 1px solid transparent;
        border-radius: 20px;
        padding-left: 1%;
    }
    p {
        display: inline-block;
    }
</style>