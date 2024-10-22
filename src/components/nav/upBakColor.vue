<template>
    <div class="top-rt">
        <el-link
            :underline="false"
            type="primary"
            v-for="(title, index) in rightSpan"
            class="menu-item font"
            :class="{ color: colorIndex === index || colorHoverIndex === index }"
            @mouseleave="colorHoverIndex = null"
            @mouseenter="colorHoverIndex = index"
            @click="updateBackground(index)"
            :key="index">
            <svg-icon v-if="colorIndex === index" :width="15" name="adopt"></svg-icon>
            {{ title }}
        </el-link>
        <span>234567</span>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useThemeStore } from "@/store/theme";
    const themeStore = useThemeStore();

    const rightSpan = ["明亮", "复古", "护眼", "海天", "深度", "暗黑", "自动"];

    const bagColors = ["#ffffff", "#F2EFDD", "#C7EBCA", "#DCE2F1", "#16202f", "#171717", "#ffffff"]; // 背景颜色数组
    const btnColors = ["#50a1ff", "#CDC27D", "#65C86E", "#7D94CB", "#50a1ff", "#50a1ff", "#50a1ff"];

    const colorIndex = ref(0);
    const colorHoverIndex = ref<number | null>(null);
    const btn_color = ref("");

    const updateBackground = (i: number) => {
        colorIndex.value = i; // 更新选中的索引

        let bg_color = bagColors[i];
        btn_color.value = btnColors[i];

        const topBar = document.getElementById("topBar");

        document.body.style.backgroundColor = bg_color; // 更改 body 的背景颜色
        if (topBar) {
            topBar.style.backgroundColor = i == 0 ? "black" : bg_color;
            topBar.style.color = i === 0 ? "#fff" : "black";
        }
        themeStore.setThemeColor(btn_color.value);
        // updateFontColors();
        // updateFontColors();
    };
    // const updateFontColors = () => {
    //     const fontList = document.getElementsByClassName("font");

    //     // 将 HTMLCollection 转换为数组以便于迭代
    //     const fontArray: HTMLElement[] = Array.from(fontList) as HTMLElement[];

    //     const font_color = btn_color.value == "#50a1ff" ? "#d4d4d5" : "#54544c";

    //     // const font_color = "#d4d4d5";
    //     // const font_color = "#54544c";

    //     fontArray.forEach((element) => {
    //         // 设置初始颜色
    //         element.style.color = font_color;

    //         // 添加悬浮效果
    //         element.addEventListener("mouseover", () => {
    //             element.style.color = btn_color.value; // 悬浮时颜色
    //         });

    //         element.addEventListener("mouseout", () => {
    //             // // 仅当该元素未被点击时，才恢复到默认颜色
    //             // if (!element.classList.contains("clicked")) {
    //             //     element.style.color = font_color; // 撤销悬浮时颜色
    //             // }
    //             element.style.color = font_color; // 撤销悬浮时颜色
    //         });

    //         // 添加点击效果
    //         element.addEventListener("click", () => {
    //             // 重置所有其他元素的颜色
    //             fontArray.forEach((el) => {
    //                 el.style.color = font_color; // 恢复默认颜色
    //                 el.classList.remove("clicked"); // 移除已点击状态
    //             });

    //             // 设置当前元素为点击状态，并更改其颜色
    //             element.classList.add("clicked");
    //             element.style.color = btn_color.value; // 点击后颜色
    //         });
    //     });
    // };
    // 调用函数以初始化字体颜色
</script>

<style scoped lang="scss">
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

    // .menu-item {
    //     // color: white; /* 默认文字颜色为黑色 */
    // }

    // .menu-item.color {
    //     /* 当选中或悬浮时，颜色由动态样式控制 */
    // }
</style>
