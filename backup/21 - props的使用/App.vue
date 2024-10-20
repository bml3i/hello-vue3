<template>
    <h2 a="1+1" :b="1+1" c="x" :d="x">view me</h2>
    <Person a="haha" b="heihei" :list="personList"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'

    import { reactive, ref } from 'vue'

    import { type Persons } from './types';

    let x = 9

    let personList = reactive<Persons>([
        {id: 'asdasd01', name: "zhang san", age: 13},
        {id: 'asdasd02', name: "li san", age: 20},
        {id: 'asdasd03', name: "wang san", age: 10}
    ])

    console.log(personList)

</script>

<style>
</style>
