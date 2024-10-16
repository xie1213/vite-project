<template>
    <div class="top-rt">
        <el-link
            :underline="false"
            type="primary"
            v-for="(title, index) in rightSpan"
            class="menu-item"
            :class="{ color: colorIndex === index }"
            @mouseleave="colorHoverIndex = null"
            @click="updateBackground(index)"
            :key="index">
            <svg-icon v-if="colorIndex === index" :width="15" name="adopt"></svg-icon>
            {{ title }}
        </el-link>
    </div>
</template>

<script setup lang="ts">
    import { useThemeStore } from "@/store/theme";
    const themeStore = useThemeStore();

    const rightSpan = ["明亮", "复古", "护眼", "海天", "深度", "暗黑", "自动"];

    const bagColors = ["#ffffff", "#F2EFDD", "#C7EBCA", "#DCE2F1", "#16202f", "#171717", "#ffffff"]; // 背景颜色数组
    const btnColors = ["#50a1ff", "#CDC27D", "#65C86E", "#7D94CB", "#50a1ff", "#50a1ff", "#50a1ff"];

    const colorIndex = ref(0);
    const colorHoverIndex = ref<number | null>(null);

    const updateBackground = (i: number) => {
        colorIndex.value = i; // 更新选中的索引

        let bg_color = bagColors[i];

        let btn_color = btnColors[i];
        //let ft_color = fontColors[index];
        const topBar = document.getElementById("topBar");

        document.body.style.backgroundColor = bg_color; // 更改 body 的背景颜色
        if (topBar) {
            topBar.style.backgroundColor = i == 0 ? "black" : bg_color;
            topBar.style.color = i === 0 ? "#fff" : "black";
        }
        themeStore.setThemeColor(btn_color);
    };
</script>

<style scoped lang="scss">
    /* $ 定义变量  mixin 定义宏  @include 使用宏 */
    @mixin flex-row {
        display: flex;
        flex-direction: row;
    }

    @mixin conter {
        align-items: center;
        justify-content: center;
    }

    .top-rt {
        @include flex-row;
        gap: 15px; /* 间距 */
        & span {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
</style>
