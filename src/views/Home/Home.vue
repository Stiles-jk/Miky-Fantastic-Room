<script setup lang="ts">
import MySideBar from "../../layout/components/sidebar/MySideBar.vue";
import MyHeader from "../../layout/components/sidebar/MyHeader.vue";
import { ref } from "vue";
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <my-header />
      <el-container direction="horizontal">
        <my-side-bar />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-container {
  height: 100%;
}
</style>
