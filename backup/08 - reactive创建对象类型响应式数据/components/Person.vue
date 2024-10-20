<template>
    <div>
        <h2>一辆{{ car.brand }} 的价值是 {{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>

        <br>

        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.name }}
            </li>
        </ul>

        <button @click="changeFirstGame">Change Game Name</button>

        <br>

        <h2>测试 {{ obj.a.b.c }}</h2>
        <button @click="changeObject">Change Object</button>
    </div>
</template>

<script setup lang="ts" name="Person234">

    import { reactive } from 'vue'

    let car = reactive({brand: "奔驰", price: 100})

    let games = reactive([
        {id: 'asdwrgwrf01', name: '石器时代'},
        {id: 'asdwrgwrf02', name: '红警2'},
        {id: 'asdwrgwrf03', name: '原神'},
    ])

    let obj = reactive({
        a: {
            b: {
                c: 666
            }
        }
    })

    console.log(car)

    function changePrice(){
        car.price += 10

    }

    function changeFirstGame() {
        games[0].name = '三国志'
    }

    function changeObject() {
        obj.a.b.c = 888
    }

</script>

<style>
</style>
