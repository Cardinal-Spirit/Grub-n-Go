<template>
    <div>
        <label>name</label>
        <input type="text" v-model="name"/>
        <label>type1</label>
        <input type="text" v-model="type1"/>
        <label>type2</label>
        <input type="text" v-model="type2"/>
        <label>type3</label>
        <input type="text" v-model="type3"/>
        <label>cals</label>
        <input type="text" v-model="cals"/>
        <label>video link</label>
        <input type="text" v-model="link"/>
        <label>1</label>
        <input type="text" v-model="i1"/>
        <label>2</label>
        <input type="text" v-model="i2"/>
        <label>3</label>
        <input type="text" v-model="i3"/>
        <label>4</label>
        <input type="text" v-model="i4"/>
        <label>5</label>
        <input type="text" v-model="i5"/>
        <label>6</label>
        <input type="text" v-model="i6"/>
        <label>7</label>
        <input type="text" v-model="i7"/>
        <label>8</label>
        <input type="text" v-model="i8"/>
        <label>9</label>
        <input type="text" v-model="i9"/>
        <label>10</label>
        <input type="text" v-model="i10"/>
        <label>11</label>
        <input type="text" v-model="i11"/>
        <label>12</label>
        <input type="text" v-model="i12"/>
        <button @click="submitRecipe()">Add</button>
        <div>
            <ul>
                <li v-for="entry in recipeList" v-bind:key="entry.name">
                    {{entry}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {recipeRef} from '../main'
export default {
    data() {
        return {
            name: '',
            type1: '',
            type2: '',
            type3: '',
            cals: '',
            link: '',
            i1: '',
            i2: '',
            i3: '',
            i4: '',
            i5: '',
            i6: '',
            i7: '',
            i8: '',
            i9: '',
            i10: '',
            i11: '',
            i12: '',
            recipeList: []
        }
    },
    methods: {
        async submitRecipe() {
            const recipe = {
                name: this.name,
                type1: this.type1,
                type2: this.type2,
                type3: this.type3,
                caloriesPerServe: this.cals,
                videoLink: this.link,
                ingredient1: this.i1,
                ingredient2: this.i2,
                ingredient3: this.i3,
                ingredient4: this.i4,
                ingredient5: this.i5,
                ingredient6: this.i6,
                ingredient7: this.i7,
                ingredient8: this.i8,
                ingredient9: this.i9,
                ingredient10: this.i10,
                ingredient11: this.i11,
                ingredient12: this.i12
            }
            this.name = ''
            this.type1 = ''
            this.type2 = ''
            this.type3 = ''
            this.cals = ''
            this.link = ''
            this.i1 = ''
            this.i2 = ''
            this.i3 = ''
            this.i4 = ''
            this.i5 = ''
            this.i6 = ''
            this.i7 = ''
            this.i8 = ''
            this.i9 = ''
            this.i10 = ''
            this.i11 = ''
            this.i12 = ''
            recipeRef.push(recipe)
        }
    },
    created() {
        recipeRef.on('value',(snapshot)=>{
            this.recipeList = snapshot.toJSON();
        })
    }
}
</script>

<style scoped>

</style>