<template>
  <div>
    <h1 @click="count++">生命周期函数{{ count }}</h1>
    <Child v-if="count % 2 == 0" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';
// 引入子组件
import Child from './components/Child.vue';
// 定义一般类型数据 ref 对象数据
const count = ref(1);
console.log('初始化阶段钩子: setup');
// 初始化阶段,挂载之前
onBeforeMount(() => {
  console.log('初始化阶段: onBeforeMount');

})
//初始化阶段挂载完毕
onMounted(() => {
  console.log('初始化阶段:onMounted');
})
/**********************************************更新阶段******************************/
onBeforeUpdate(() => {
  console.log('更新阶段:onBeforeUpdate');
})
onUpdated(() => {
  console.log('更新阶段:onUpdated');
})

</script>

<style scoped></style>