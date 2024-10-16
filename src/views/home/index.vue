<template>
    <div class="content">
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
</script>

<style scoped lang="scss">
    .el-form-item {
        // &.el-input {
        //     width: 80px;
        // }
    }

    :deep(.el-form-item__content) {
        // display: flex;
        // flex-direction: row;
        border: 1px solid red;
    }

    .el-input {
        width: 180px;
    }
</style>
