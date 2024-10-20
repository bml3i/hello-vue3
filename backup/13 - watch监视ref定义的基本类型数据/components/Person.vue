<template>
    <div>
        <h2>情况一: watch监视ref定义的基本类型数据</h2>
        <h2>sum: {{ sum }}</h2>
        <button @click="changeSum">Change Sum</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref, watch } from 'vue'

    let sum = ref(0)

    function changeSum() {
        sum.value += 1
    }

    // watch(sum, (newValue, oldValue) => {
    //     console.log('sum changed', newValue, oldValue)
    // })

    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum changed', newValue, oldValue)

        if(newValue >= 10) {
            stopWatch()
        }
    })

</script>

<style>
</style>
