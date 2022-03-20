<script setup lang="ts">
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  User,
} from "@element-plus/icons-vue";
import { reactive } from "vue-demi";
const items = reactive([
  { name: "个人信息", url: "/user", icon: User },
  { name: "聊天室", url: "/chat", icon: Document },
]);
</script>

<template>
  <el-aside>
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <el-menu-item v-for="i in items" :key="i.url" :index="i.url">
          <template #title>
            <el-icon> <component :is="i.icon"></component> </el-icon>
            <span>{{ i.name }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-aside>
</template>

<style scoped>
.el-menu {
  height: 100vh;
}
.left_menu {
  height: 100vh;
}
</style>
