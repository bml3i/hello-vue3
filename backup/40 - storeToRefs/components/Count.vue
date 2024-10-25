<template>

    <div class="count">
        <h2>当前求和为: {{ sum }}</h2>
        <h3>欢迎来到: {{ school }}, 坐落于 {{ address }}</h3>
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

import { ref, toRefs } from 'vue'
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';

const countStore = useCountStore()

// 可以实现，但不建议使用，代价太高
//const {sum, school, address} = toRefs(countStore)

// 最好用storeToRefs，它只会关注store中的数据，不会对方法进行ref包裹
const {sum, school, address} = storeToRefs(countStore)

console.log("@1", countStore.sum)
console.log("@2", countStore.$state.sum)

let n = ref(1)

function add() {
    // 第三种方式
    countStore.increment(n.value)
}

function minus() {
    countStore.sum -= n.value
}


</script>

<style scoped></style>