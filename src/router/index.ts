
import { createMemoryHistory, createRouter } from 'vue-router'
import Header from "@/views/nav/index.vue"
import Home from '@/views/home/index.vue'
const routes = [
    {
        path: "/",
        components: {
            header: Header,
            home: Home
        }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router