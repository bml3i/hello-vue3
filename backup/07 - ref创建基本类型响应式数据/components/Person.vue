<template>
    <div>
        <h2>Name: {{ name }}</h2>
        <h2>Age: {{ age }}</h2>

        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <button @click="showTel">Show Contact Info</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import {ref} from 'vue'

    let name = ref('zhang san')
    let age = ref(18)
    let tel = '13812345678'

    console.log(1, name)
    console.log(2, age)
    console.log(3, tel)

    // function
    function changeName() {
        name.value += '1'
        console.log(1, name)
    }

    function changeAge() {
        age.value += 1
        console.log(2, age)
    }

    function showTel() {
        alert("Tel: " + tel)
        console.log(3, tel)
    }
</script>

<style>
</style>
