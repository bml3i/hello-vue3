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
        data() {
            return {
                name: 'zhang san',
                age: 18,
                tel: '13899900999'
            }
        },
        methods: {
            showTel(){
                alert('Contact Info:' + this.tel)
            },
            changeName() {
                this.name = 'Li Si'
            },
            changeAge() {
                this.age += 1
            }
        }
    }
</script>

<style>
</style>
