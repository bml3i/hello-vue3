<template>

    <div class="count">
        <h2>当前求和为: {{ countStore.sum }}</h2>
        <h3>欢迎来到: {{ countStore.school }}, 坐落于 {{ countStore.address }}</h3>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>


</template>


<script setup lang="ts" name="Count">

import { ref } from 'vue'
import { useCountStore } from '@/store/count';

const countStore = useCountStore()
console.log("@1", countStore.sum)
console.log("@2", countStore.$state.sum)

let n = ref(1)

function add() {
    // 第一种方式
    // countStore.sum += n.value
    //countStore.school = '尚硅谷'
    //countStore.address = '北京'

    // 第二种方式
    // countStore.$patch({
    //     school: '尚硅谷',
    //     address: '北京'
    // })

    // 第三种方式
    countStore.increment(n.value)

}

function minus() {
    countStore.sum -= n.value
}


</script>

<style scoped></style>