import { createApp, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js'

export default {
    template: 
    `
    <div>
        <div>我是Demo</div>
        <div>{{sum}}</div>
        <button @click="sum++">點擊</button>
    </div>
        `,
    setup() {
        console.log('---setup---')
        //数据
        let sum = ref(0)

        //通过组合式API的形式去使用生命周期钩子
        onBeforeMount(() => {
            console.log('---onBeforeMount---')
        })
        onMounted(() => {
            console.log('---onMounted---')

        })
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---')
        })
        onUpdated(() => {
            console.log('---onUpdated---')
        })
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---')
        })
        onUnmounted(() => {
            console.log('---onUnmounted---')
        })

        //返回一个对象（常用）
        return { sum }
    }
}