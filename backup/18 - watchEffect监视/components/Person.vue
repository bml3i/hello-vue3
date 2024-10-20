<template>
    <div>
        <h2>需求: 当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
        <h2>当前水温: {{ temp }} 摄氏度</h2>
        <button @click="changeTemp">Change Temp + 10</button>

        <h2>当前水位: {{ height }} cm</h2>
        <button @click="changeHeight">Change Height + 10</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref, watch, watchEffect } from 'vue'

    let temp = ref(10)
    let height = ref(0)

    function changeTemp() {
        temp.value += 10
    }

    function changeHeight() {
        height.value += 10
    }

    // 实现1 - watch - 说监视谁，就监视谁，不告诉他就不监视
    watch([temp, height], (newValue)=> {
        let [currentTemp, currentHeight] = newValue

        if(currentTemp >= 60 || currentHeight >= 80) {
            console.log('实现1 - 警报: ', currentTemp, currentHeight)
        }
    })

    // 实现2 - watchEffect - 不用指名道姓，函数中用到哪些属性，就监视哪些属性
    watchEffect(()=> {
        if(temp.value >= 60 || height.value >= 80) {
            console.log('实现2 - 警报: ', temp.value, height.value)
        }
    })


</script>

<style>
</style>
