<template>
    <div>
        <h2>情况五: watch监视上述多个数据</h2>

        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>
        <h2>Car 1: {{ person.car.c1 }}</h2>
        <h2>Car 2: {{ person.car.c2 }}</h2>

        <button @click="changeName">修改Name</button>
        <button @click="changeAge">修改Age</button>
        <button @click="changeCar1">修改car1</button>
        <button @click="changeCar2">修改car2</button>
        <button @click="changeCar">修改car</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { reactive, watch } from 'vue'

    let person = reactive({
        name: '张三',
        age: 18, 
        car: {
            c1: '奔驰',
            c2: '宝马'
        }
    })

    function changeName() {
        person.name += '~'
    }

    function changeAge() {
        person.age += 1
    }

    function changeCar1() {
        person.car.c1 = '奥迪'
    }

    function changeCar2() {
        person.car.c2 = '大众'
    }

    function changeCar() {
        person.car = {
            c1: '雅迪',
            c2: '爱玛'
        }
    }

    // watch监视多个数据
    // 第一台车 + 姓名
    watch([() => person.name, () => person.car.c1], (newValue, oldValue) => {
        console.log('person.name / car.c1变化了', newValue, oldValue)
    })


</script>

<style>
</style>
