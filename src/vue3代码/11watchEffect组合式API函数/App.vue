<template>
  <div>
    <h1>{{ msg }}---{{ count }}</h1>
    <button @click="msg += '!'">更新</button>
    <button @click="count++">点击我修改数量</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const msg = ref('我真的真的好困啊!');
const count = ref(1);
// watch - watchEffect 区别
// 确定数据源 -- 不确定
// 惰性监听,数据变化,回调执行 -- 开始就监听一次
// 可知新旧值 -- watchEffect回调不注意新旧数值
watchEffect(() => {
  // 回调中使用谁,谁就是数据来源,其发生变化就会被监听到
  console.log(msg.value);
  console.log(count.value);
  
})
</script>

<style scoped></style>