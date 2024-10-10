
import { createMemoryHistory, createRouter } from 'vue-router'
import Header from "@/views/nav/index.vue"
const routes = [
    {
        path: "/",
        components: {
            header: Header
        },
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router