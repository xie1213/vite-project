<template>
    <div class="content custom-class">
        <el-form :model="form" label-width="auto" style="max-width: 800px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
                <span>--</span>
                <el-input v-model="form.name" />
                <span>--</span>
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>

            <el-button type="primary" @click="test()">ssdsd</el-button>
        </el-form>
        <img src="" alt="" />
    </div>
</template>

<script setup lang="ts">
    const form = reactive({
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
    });

    const onSubmit = () => {
        console.log("submit!");
    };

    import { useThemeStore } from "@/store/theme";

    const themeStore = useThemeStore();

    const test = () => {
        themeStore.setThemeColor("#9A783D"); // 更新颜色并同步 CSS 变量
    };
</script>

<style scoped lang="scss">
    .el-input {
        width: 180px;
    }
</style>
