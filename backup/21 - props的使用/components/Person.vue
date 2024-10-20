<template>
    <div>
        <h2>{{ a }}</h2>
        
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }} - {{ p.age }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">

    import { withDefaults } from 'vue'
    import { type Persons } from '@/types';

    // 只接收a和list
    // defineProps(['a', 'list'])

    // 接收a和list, 同时将props保存起来
    // let x = defineProps(['a', 'list'])
    // console.log("x", x)

    //接收list + 限制类型
    // defineProps<{list: Persons, a:string}>()

    //接收list + 限制类型 + 必要性
    //defineProps<{list?: Persons, a:string}>()

    //接收list + 限制类型 + 必要性 + 制定默认值
    withDefaults(defineProps<{list?: Persons, a:string}>(), {
        list: () => [{id: 'default01', name: '康师傅*王麻子*特仑苏', age: 100}]
    })

</script>

<style scoped>
</style>
