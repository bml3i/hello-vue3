<template>
    <div>
        ???
    </div>
</template>

<script setup lang="ts" name="Person">

    import { type PersonInter, type Persons } from '@/types'

    let person:PersonInter = {id: 'asdawfwr01', name: 'zhang san', age: 12}

    let personList:Array<PersonInter> = [
        {id: 'asdawfwr01', name: 'zhang san', age: 12},
        {id: 'asdawfwr02', name: 'LI san', age: 20},
        {id: 'asdawfwr03', name: 'WANG san', age: 99}
    ]

    let personList2:Persons = [
        {id: 'asdawfwr01', name: 'zhang san', age: 12},
        {id: 'asdawfwr02', name: 'LI san', age: 20},
        {id: 'asdawfwr03', name: 'WANG san', age: 99}
    ]

</script>

<style scoped>
</style>
