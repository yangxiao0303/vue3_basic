<template>
  <div class="box">

  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onUnmounted } from 'vue';
onBeforeUnmount(() => {
  console.log('死亡之前')
});
onUnmounted(() => {
  console.log('死亡结束')
})
</script>

<style scoped>
.box {
  width: 100vw;
  height: 300px;
  background-color: skyblue;
}
</style>