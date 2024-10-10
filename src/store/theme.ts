import { defineStore } from 'pinia';


export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentColor: '#0090FF', // 初始主题色
    }),
    actions: {
        setThemeColor(color: string) {
            this.currentColor = color;
        },
    },
});