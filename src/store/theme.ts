import { defineStore } from 'pinia';
import { useChangeColor } from '@/utils/theme/index'
const { getLightColor, getDarkColor } = useChangeColor()


export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentColor: '#FEA309', // 初始主题色
    }),
    actions: {
        setThemeColor(color: string) {
            this.currentColor = color;
            this.updateCSSVariables(color);
        },

        updateCSSVariables(color: string) {
            // document.documentElement.style.setProperty('--el-link-text-color', "#fff");
            document.documentElement.style.setProperty('--el-color-primary', color);
            document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(color, 0.1)}`)
            for (let i = 1; i <= 9; i++) {
                document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(color, i / 10)}`)
            }
        },
    },
});


