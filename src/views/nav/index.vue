<template>
    <div class="top" id="topBar">
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
        <upBakColor class="top-rt"></upBakColor>
    </div>
</template>

<script setup lang="ts">
    const leftSpan = ["装机必备", "提交应用", "留言反馈", "优惠正版", "哲风壁纸", "打赏"];

    import upBakColor from "@/components/nav/upBakColor.vue";
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
        color: white;
        background-color: black;
        justify-content: space-between; /* 左右分开 */
        align-items: center; /* 垂直居中对齐 */
        margin-bottom: 20px;
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
    }
</style>
