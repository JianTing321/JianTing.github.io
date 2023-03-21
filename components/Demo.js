import { createApp, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js'

export default {
    name: 'Demo',
    template: 
    `
    <div>我是Demo</div>
    <div>{{sum}}</div>
    <button @click="sum++">點擊</button>    
   
    <el-switch v-model="value1" />
    <el-switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />

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
    },
    //通过配置项的形式使用生命周期钩子
    //#region 
    beforeCreate() {
        console.log('---beforeCreate---')
    },
    created() {
        console.log('---created---')
    },
    beforeMount() {
        console.log('---beforeMount---')
    },
    mounted() {
        console.log('---mounted---')
    },
    beforeUpdate() {
        console.log('---beforeUpdate---')
    },
    updated() {
        console.log('---updated---')
    },
    beforeUnmount() {
        console.log('---beforeUnmount---')
    },
    unmounted() {
        console.log('---unmounted---')
    },
    //#endregion
}