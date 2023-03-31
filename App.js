const { reactive, ref } = Vue;

import Main from './Main.js'

const app = Vue.createApp({
    components: {
        Main
    },
    template: `
        <div>
            <Main></Main>
            <button @click="sum++">{{sum}}</button>
        </div>
     `,
    setup() {
        const sum = ref(0)
        return {
            sum,
        }
    },
}).use(ElementPlus).mount('#app')