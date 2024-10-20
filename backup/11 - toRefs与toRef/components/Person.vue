<template>
    <div>
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}, {{ nl }}</h2>

        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup lang="ts" name="Person234">

    import { reactive, toRefs, toRef } from 'vue'

    let person = reactive({
        name: 'Zhang Sane',
        age: 18
    })

    let {name, age} = toRefs(person)
    let nl = toRef(person, 'age')
    console.log(name, age)
    console.log(nl)


    function changeName() {
        name.value += '~'
    }

    function changeAge() {
        age.value += 1
    }

</script>

<style>
</style>
