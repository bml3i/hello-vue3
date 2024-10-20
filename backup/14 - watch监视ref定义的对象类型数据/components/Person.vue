<template>
    <div>
        <h2>情况二: watch监视ref定义的对象类型数据</h2>

        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>

        <button @click="changeName">修改Name</button>
        <button @click="changeAge">修改Age</button>
        <button @click="changePerson">修改人</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref, watch } from 'vue'

    let person = ref({
        name: '张三',
        age: 18
    })

    function changeName() {
        person.value.name += '~'
    }

    function changeAge() {
        person.value.age += 1
    }

    function changePerson(){
        person.value = {name: '里斯本', age: 90}
    }

    // 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视deep
    //- 若修改的是ref定义的对象中的属性，newValue和oldValue都是新值，因为他们是同一个对象
    //- 若修改的是ref定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了

    // watch的第一个参数: 被监视的数据
    // watch的第二个参数: 监视的回调
    // watch的第三个参数: 配置对象 (deep, immediate等等)
    
    watch(person, (newValue, oldValue)=> {
        console.log('Person变化了', newValue, oldValue)
    }, {deep: true, immediate: true})


</script>

<style>
</style>
