<template>
    <!-- //导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <div class="flex-grow" style="max-width: 250px" />
        <el-menu-item index="0">
            <img style="width: 100px" src="https://element-plus.org/images/element-plus-logo.svg" alt="Element logo" />
        </el-menu-item>
        <div class="flex-grow" style="max-width: 10px;" />
        <el-sub-menu index="1">
            <template #title>心理测评</template>
            <el-menu-item index="1-1">MBTI</el-menu-item>
            <el-menu-item index="1-2">抑郁症</el-menu-item>
            <el-menu-item index="1-3">焦虑度</el-menu-item>
        </el-sub-menu>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="2">申请帮扶</el-menu-item>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="3">法律知识测验</el-menu-item>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="4">联系心理咨询师及志愿者</el-menu-item>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="5">习惯打卡</el-menu-item>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="6">志愿招募</el-menu-item>
        <div class="flex-grow" style="max-width: 15px;" />
        <el-menu-item index="10"></el-menu-item>

        <div class="flex-grow" />
        <el-menu-item index="7">Processing Center</el-menu-item>
        <el-sub-menu index="8">
            <template #title>Workspace</template>
            <el-menu-item index="8-1">item one</el-menu-item>
            <el-menu-item index="8-2">item two</el-menu-item>
            <el-menu-item index="8-3">item three</el-menu-item>
            <el-sub-menu index="8-4">
                <template #title>item four</template>
                <el-menu-item index="8-4-1">item one</el-menu-item>
                <el-menu-item index="8-4-2">item two</el-menu-item>
                <el-menu-item index="8-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <div class="flex-grow" style="max-width: 100px" />
    </el-menu>
    <!-- 内容栏 -->
    <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
.el-menu-demo {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}
</style>