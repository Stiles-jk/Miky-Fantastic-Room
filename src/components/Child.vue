<script setup lang="ts">
import { ref } from "@vue/reactivity";

const props = defineProps({
  num: Number,
  count: Number,
  arr: {
    type: Array,
    default: () => [1, 1, 1, 1],
  },
});

const emit = defineEmits<{
  (e: "c-emit", n: number): void;
  (e: "emit-1"): void;
}>();
const numRef = ref(props.num);
const countRef = ref(props.count);
const emitVarToFather = () => {
  console.log("emit");
  emit("c-emit", 0);
};

function test() {
  console.log("emit-1");
  emit("emit-1");
}
</script>

<template>
  <div>
    <div>
      <el-tag :key="i" v-for="i in arr">{{ i }}</el-tag>
    </div>
    <div>
      <button @click="emitVarToFather">to Zero</button>
      <button @click="test">to Test</button>
    </div>
  </div>
</template>

<style scoped></style>
