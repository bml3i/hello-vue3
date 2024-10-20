<template>
    <div>
        <h2>情况四: watch监视ref或reactive定义的对象类型数据中的某个属性</h2>

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

    // getter函数: 能返回一个值的函数

    // watch监视响应式对象中的某个属性，且该属性为基本类型的，要写成函数式
    watch(() => person.name, (newValue, oldValue) => {
        console.log('person.name变化了', newValue, oldValue)
    })

    // watch监视响应式对象中的某个属性，且该属性为对象类型的，建议写成函数式(若需关注对象内部细节变化，需配合deep:true)
    watch(() => person.car, (newValue, oldValue) => {
        console.log('person.car变化了', newValue, oldValue)
    }, {deep: true})


</script>

<style>
</style>
