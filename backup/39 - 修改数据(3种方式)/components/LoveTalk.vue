<template>

    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="(item, index) in talkStore.talkList" :key="index">{{ item.title }}</li>
        </ul>
    </div>


</template>


<script setup lang="ts" name="LoveTalk">

import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/loveTalk';

const talkStore = useTalkStore()

// https://api.uomg.com/api/rand.qinghua?format=json

async function getLoveTalk() {
    // 连续解构赋值 + 重命名
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = { id: nanoid(), title }
    talkStore.talkList.unshift(obj)
}

</script>

<style scoped></style>