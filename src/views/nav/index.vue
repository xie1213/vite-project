<template>
    <div class="top" :style="{ backgroundColor: topBackgroundColor, color: topFontColor }">
        <div class="top-lf">
            <span
                v-for="(title, index) in leftSpan"
                class="menu-item"
                :class="{ selected: selectedIndex === index }"
                @mouseover="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
                @click="selectItem(index)"
                :key="index">
                {{ title }}
            </span>
        </div>
        <div class="top-rt">
            <span
                v-for="(title, index) in rightSpan"
                class="menu-item"
                :class="{ color: colorIndex === index }"
                @mouseover="onMouseEnter(index)"
                @mouseleave="colorHoverIndex = null"
                @click="updateBackground(index)"
                :key="index">
                <svg-icon v-if="colorIndex === index" :width="15" name="adopt"></svg-icon>
                {{ title }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const leftSpan = ["装机必备", "提交应用", "留言反馈", "优惠正版", "哲风壁纸", "打赏"];

    const rightSpan = ["明亮", "复古", "护眼", "海天", "深度", "暗黑", "自动"];

    import { colorIndex, colorHoverIndex, updateBackground, topBackgroundColor, onMouseEnter, topFontColor } from "@/method/nav/upBakColor";
    const selectedIndex = ref<number | null>(null); // 选中的索引
    const hoveredIndex = ref<number | null>(null);

    const selectItem = (index: number) => {
        selectedIndex.value = index; // 更新选中的索引
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

    .top {
        padding: 10px 12%;
        display: flex;
        // flex-direction: ;
        justify-content: space-between; /* 左右分开 */
        align-items: center; /* 垂直居中对齐 */

        .top-lf {
            @include flex-row;
            gap: 15px; /* 间距 */
        }

        .menu-item {
            cursor: pointer;
            transition: color 0.5s; /* 过渡效果 */
            font-size: 12px;
            // @include hover-selected-style;
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
    }
</style>
