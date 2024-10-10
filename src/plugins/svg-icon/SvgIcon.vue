<template>
    <svg aria-hidden="true" :width="width" :height="height">
        <use :xlink:href="symbolId" :fill="fill" />
    </svg>
</template>
<script setup lang="ts">
    const props = withDefaults(
        defineProps<{
            name: string;
            width?: number;
            height?: number;
            fill?: string;
        }>(),
        {
            width: 19,
            height: 19,
            fill: "#ffffff",
        }
    );

    // 获取svg图标名称，需要和vite.config.ts中的配置保持一致
    const symbolId = computed(() => `#${props.name}`);
</script>
