import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/database'
import {firestorePlugin} from 'vuefire'

Vue.use(firestorePlugin)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBt1SmA1iX-nPbDBg8fySyiisVIh0F2rUg",
  authDomain: "grub-n-go-5eda7.firebaseapp.com",
  databaseURL: "https://grub-n-go-5eda7.firebaseio.com",
  projectId: "grub-n-go-5eda7",
  storageBucket: "grub-n-go-5eda7.appspot.com",
  messagingSenderId: "952627880068",
  appId: "1:952627880068:web:8dc2757adfcae064ca22d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const ingredRef = db.ref('Ingredients');
export const shopRef = db.ref('ShoppingList');
export const recipeRef = db.ref('Recipes');

let app;
firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

