<template>
    <div>
        <h2>sum: {{ sum }}</h2>
        <h2>big sum: {{ bigSum }}</h2>
        <button @click="changeSum">Change Sum</button>

        <br>
        <br>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="">

        <br>
        <button @click="getDog">再来一支狗</button>
        <br>

    </div>
</template>

<script setup lang="ts" name="Person">

    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

    const { sum, bigSum, changeSum } = useSum()
    const { dogList, getDog } = useDog()

</script>

<style scoped>
    img {
        height: 100px;
        margin-right: 10px;
    }
</style>
