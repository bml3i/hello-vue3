<template>
    <Person v-if="isShow"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'

    import { ref, onMounted } from 'vue'

    let isShow = ref(true)

    onMounted(()=> {
        console.log("父组件App - 挂载完毕")
    })

</script>

<style>
</style>
