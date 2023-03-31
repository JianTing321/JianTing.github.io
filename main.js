const { reactive, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } = Vue;

export default {
    template: 
    `
    <div>
        <div>Demo</div>
        <div @click="sum++">{{sum}}</div>
        <el-button @click="sum++">點擊</el-button>
    </div>
        `,
    setup() {
        console.log('---setup---')
        //数据
        const sum = ref(1)

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