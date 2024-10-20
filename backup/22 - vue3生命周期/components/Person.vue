<template>
    <div>
        <h2>sum: {{ sum }}</h2>
        <button @click="changeSum">Change Sum</button>
    </div>
</template>

<script setup lang="ts" name="Person">

    import {ref} from 'vue'
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

    console.log('类似:beforeCreate效果')

    let sum = ref(0)

    function changeSum() {
        sum.value += 1
    }

    console.log('类似:created效果')

    onBeforeMount(()=> {
        console.log("挂载前")
    })

    onMounted(()=> {
        console.log("子组件Person - 挂载完毕")
    })

    onBeforeUpdate(()=> {
        console.log("更新前")
    })

    onUpdated(()=> {
        console.log("更新完毕")
    })

    onBeforeUnmount(()=> {
        console.log("卸载前")
    })

    onUnmounted(()=> {
        console.log("卸载完毕")
    })

</script>

<style scoped>
</style>
