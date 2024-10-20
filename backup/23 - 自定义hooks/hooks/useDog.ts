
import {onMounted, reactive} from 'vue'
import axios from 'axios'    


export default function() {

    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/labradoodle/Cali.jpg'
    ])
    
    // https://dog.ceo/api/breeds/image/random
    
    // 方法
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    // 钩子
    onMounted(() => {
        getDog()
    })

    // 向外部提供任何东西
    return {dogList, getDog}
}


