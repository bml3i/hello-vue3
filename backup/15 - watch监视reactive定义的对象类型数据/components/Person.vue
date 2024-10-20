<template>
    <div>
        <h2>情况三: watch监视reactive定义的对象类型数据</h2>

        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>

        <button @click="changeName">修改Name</button>
        <button @click="changeAge">修改Age</button>
        <button @click="changePerson">修改人</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { reactive, watch } from 'vue'

    let person = reactive({
        name: '张三',
        age: 18
    })

    function changeName() {
        person.name += '~'
    }

    function changeAge() {
        person.age += 1
    }

    function changePerson(){
        // person = {name: '里斯本', age: 90} // not work

        Object.assign(person, {
            name: '里斯本', 
            age: 90
        })
    }

    // 默认已经开启深度监视的, 这种隐式的深层监听是关不掉的
    watch(person, (newValue, oldValue)=> {
        console.log('person变化了', newValue, oldValue)
    })

</script>

<style>
</style>
