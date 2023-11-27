<template>
  <div>
    <h1>计数器{{ proxy }}</h1>
    <button @click="handler">点我+1</button>
  </div>
</template>

<script lang="ts">
// 按需引入
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const target = { a: 1, b: 2 };
    const proxy: any = reactive(target);
    return {
      proxy,
      handler() {
        proxy.a++;
      }
    }
  }
})
</script>

<style scoped></style>