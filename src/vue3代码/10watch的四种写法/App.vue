<template>
  <div>
    <h1>Ref对象: {{ count }}</h1>
    <h1>代理对象{{ xiaoming }}</h1>
    <button @click="count += 1">修改Ref对象数据</button>
    <button @click="xiaoming.age++">修改小明的年纪</button>
    <button @click="updateHooby">修改小明的爱好</button>

  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue';
// 基本类型数据Ref
const count = ref(66);
// 引用类型数据--代理对象(proxy)
const xiaoming = reactive({ name: 'xiaoming', age: 18, hobby: ['eat', 'drink', 'sleep'] });

// watch第一种写法-->监听ref基本数据类型
// 第一参数: 被监听的数据源 ---- required
// 第二参数: 监听的回调函数 ---- required
// 第三参数: 监听的配置对象 ---- optional
// watch函数 return 一个箭头函数 , 此 函数执行可以停止数据源监听
/* const stop = watch(count, (newVal, oldVal) => {
  // 回调第一个参数 newVal --> 监听后最新数据
  console.log(newVal);
  // 回调第二个参数 oldVal --> 监听更新前数据
},

  {
    immediate: true, // 立即监听
    deep: true // 深度监听
  }
); */

/* // watch第二种写法-->监听代理对象引用数据类型
watch(xiaoming,(newVal) =>{
  console.log(newVal);//监听到数据的变化
  // 注意, 没有 oldVal 这个参数, 因为不查看不会监听
});
  const updateHooby = () =>{
    xiaoming.hobby[1] = '学习';
  } */

// watch第三种写法-->监听数值的变化,箭头函数写法
// 第一参数: 数据源
// 如果第一参数: count,监听数据源对象,对象没有变化过-> 监听不到(徐开启深度监听来监听到)
/*  watch(()=> count,()=>{
   console.log(123);
   
 },{
   deep: false
 })
 // 监听 value 属性 可以成功
 watch(()=> count.value, (newVal,oldVal)=>{
   console.log(newVal,oldVal);
 });
 // 监听 age 属性 可以成功
 watch(()=>xiaoming.age,()=>{
   console.log(456);
   
 }) */

// watch第四种写法-->数组内部书写前面三种写法
watch([count, () => xiaoming], () => {
  console.log(123);
},{
  deep: true
})
</script>

<style scoped></style>