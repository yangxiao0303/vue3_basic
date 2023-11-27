<template>
  <div>
    <h1>组合式API之computed</h1>
    <h2>总和: {{ total }}</h2>
    <button @click="handler">点我修改总和</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const goodsArr = ref([
  { id: 1, skuName: "水杯", price: 20, skuNum: 2, },
  { id: 2, skuName: "衣服", price: 399, skuNum: 8, },
  { id: 3, skuName: "手机", price: 6999, skuNum: 1, },
  { id: 4, skuName: "鼠标", price: 299, skuNum: 1, },
]);

// 计算属性 computed
// 写法一: computed 函数执行,需要传递一个回调(回调函数执行:保证计算出来的数据在模板中被使用)
// 同时, 回调的 return 值即为 computed函数执行返回的结果(ref对象的value属性值)
const total = computed(() => {
  goodsArr.value.reduce((prev, next) => {
    prev += next.price * next.skuNum;
    return prev;
  }, 0)
});

const handle = () => {
  // total.value += 1 // 会报错, 因为这样写的computed 只有 getter 没有 setter,
  // 而改变 computed 数据的值要在 setter 内实现, ref对象的value属性的值 为 只读的
}


</script>

<style scoped></style>