<template>

    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="(item, index) in talkList" :key="index">{{ item.title }}</li>
        </ul>
    </div>


</template>


<script setup lang="ts" name="LoveTalk">

import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/loveTalk';
import { storeToRefs } from 'pinia';

const talkStore = useTalkStore()
const { talkList } = storeToRefs(talkStore)

// https://api.uomg.com/api/rand.qinghua?format=json

async function getLoveTalk() {
    talkStore.getOneTalk()
}

</script>

<style scoped></style>