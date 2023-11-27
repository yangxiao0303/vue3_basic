<template>
  <div>
    <h1>computed第二种写法:count {{ count }}</h1>
    <h1>计算属性:dbCount{{ dbCount }}</h1>
    <button @click="add">点我修改count的数值</button>
    <button @click="update">点我修改dbCount的数值</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
// 使用ref函数定义一个动态数据
const count = ref(10);
// 事件的回调
const add = () => {
  count.value += 1;
}
// computed的第二种写法: 配置对象
const dbCount = computed({
  // getter
  get() {
    return count.value * 2;
  },
  // setter
  set(newVal: number) {
    count.value = newVal / 2;
  }
});

const update = () => {
  // computed计算属性的第二种写法可以直接改变 ref 对象的数据
  dbCount.value = 44;
}
</script>

<style scoped></style>