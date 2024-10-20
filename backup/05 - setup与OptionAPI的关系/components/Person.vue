<template>
    <div>
        <h2>Name: {{ name }}</h2>
        <h2>Age: {{ age }}</h2>

        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <button @click="showTel">Show Contact Info</button>

        <br>

        <h2>a: {{ a }}</h2>
        <h2>c: {{ c }}</h2>
        <button @click="b">Test B</button>
        

    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',

        data(){
            return {
                a: 100, 
                c: this.name
            }
        },
        methods: {
            b() {
                console.log("b")
            }
        },
        setup(){
            // data
            let name = 'zhang san 999'
            let age = 18
            let tel = '13812345678'

            // function
            function changeName() {
                name = 'Li Si'
            }

            function changeAge() {
                age += 1
            }

            function showTel() {
                alert("Tel: " + tel)
            }

            //return {a:name, b:age}
            return {name, age, changeName, changeAge, showTel}
        }
    }
</script>

<style>
</style>
