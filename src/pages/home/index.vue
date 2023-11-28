<template>
  <div class="home">
    <!-- 导航区域 -->
    <div class="nav">
      <router-link to="/home/news">news</router-link>
      <router-link to="/home/message">message</router-link>
    </div>
    <!-- 内容区域 二级内容展示区域 news|message -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
}

a {
  color: black;
}

.content {
  background-color: #eee;
}
</style>