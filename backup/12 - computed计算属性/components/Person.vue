<template>
    <div>
        <h2>First Name: <input type="text" v-model="firstName"></h2> 
        <br>
        <h2>Last Name: <input type="text" v-model="lastName"></h2> 
        <h2>Full Name: {{ fullName }}</h2>
        <button @click="changeFullName">Change Full Name</button>

    </div>
</template>

<script setup lang="ts" name="Person234">

    import { ref, computed } from 'vue'

    let firstName = ref("leo")
    let lastName = ref("bi")

    // let fullName = computed(()=>{
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + " " + lastName.value
    // })

    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + " " + lastName.value
        },
        set(val) {
            console.log('set', val)
            const [str1, str2] = val.split(' ')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        fullName.value = "Li Si"
    }

</script>

<style>
</style>
