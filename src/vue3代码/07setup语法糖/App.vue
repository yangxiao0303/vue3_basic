<template>
  <div>setup语法糖: setup另一种写法</div>
  <div @click="handler">{{ count }}</div>
  <div @click="grow">{{ xiaoming }}</div>
  <div @click="xiaomei.age += 1">{{ xiaoming }}</div>
</template>

<!-- 将setup写在 script 开始标签上, 可以认为整个script中间都在setup内 -->
<!-- setup即为这是API函数入口 -->
<script setup lang="ts">
// 按需引入
import { ref, reactive } from 'vue';
// 使用ref定义一个一般类型的常量
const count = ref(1);
// 使用ref也可以定义一个引用类型的常量
const xiaoming = ref({ name: "xiaoming", age: 18, hobby: ['吃', '喝', '玩'] });
// 使用reactive来定义一个引用类型的常量
const xiaomei = reactive({ name: "xiaomei", age: 19 });
// handler的回调
const handler = () => {
  count.value += 1;
}
// grow的回调
const grow = () => {
  xiaoming.value.age += 1;
}

</script>

<style scoped></style>