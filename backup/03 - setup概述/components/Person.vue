<template>
    <div>
        <h2>Name: {{ name }}</h2>
        <h2>Age: {{ age }}</h2>

        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <button @click="showTel">Show Contact Info</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',
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
