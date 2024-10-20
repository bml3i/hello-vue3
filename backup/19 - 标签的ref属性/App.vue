<template>
    <h2 ref="title2">App组件的h2</h2>
    <button @click="showTitle2">Show Title 2</button>
    <button @click="showRen">Show Ren</button>
    <br>
    <Person ref="ren"></Person>
    
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { ref } from 'vue';

    let title2 = ref()
    let ren = ref()

    function showTitle2() {
        console.log(title2.value)
    }

    function showRen() {
        console.log(ren.value)
    }

</script>

<style>
</style>
