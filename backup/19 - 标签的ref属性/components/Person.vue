<template>
    <div>
        <h1>中国</h1>
        <h2 ref="title2">济南</h2>
        <h3>软件园</h3>
        <button @click="showTitle2">Show Title 2</button>
    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref, defineExpose } from 'vue'

    let title2 = ref()

    let a = ref(1)
    let b = ref(2)
    let c = ref(3)

    function showTitle2() {
        console.log(title2.value)
    }

    defineExpose({a, b, c})

</script>

<style scoped>
</style>
