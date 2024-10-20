<template>
    <div>
        <h2>一辆{{ car.brand }} 的价值是 {{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeCar">修改汽车</button>

        <hr>
        <h2>当前的求和为: {{ sum }}</h2>
        <button @click="addSum">点我sum+1</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { reactive, ref } from 'vue'

    let car = reactive({brand: "奔驰", price: 100})
    let sum = ref(0)

    function changePrice(){
        car.price += 10
    }

    function changeBrand(){
        car.brand = "宝马"
    }

    function changeCar() {
        // car = {brand: "奥拓", price: 1}              // incorrect
        // car = reactive({brand: "奥拓", price: 1})    // incorrect
        car = Object.assign(car, {brand: "奥拓", price: 1}) // correct
    }

    function addSum() {
        sum.value += 1
    }
</script>

<style>
</style>
