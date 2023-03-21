import { createApp, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js'
// import { createApp, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import Demo from './Demo.js'
import Advice from './Advice.js'

export default {   
    template: `
    {{ text }}
    <Demo></Demo>
    <Advice></Advice>
    `,
    components: { Demo, Advice },
    setup() {
        const text = ref('你好啊')
       
        return {
            text
        }
    }
    
}