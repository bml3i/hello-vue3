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

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref } from 'vue'

    let car = ref({brand: "奔驰", price: 100})

    let games = ref([
        {id: 'asdwrgwrf01', name: '石器时代'},
        {id: 'asdwrgwrf02', name: '红警2'},
        {id: 'asdwrgwrf03', name: '原神'},
    ])

    console.log(car)

    function changePrice(){
        car.value.price += 10

    }

    function changeFirstGame() {
        games.value[0].name = '三国志'
    }

</script>

<style>
</style>
