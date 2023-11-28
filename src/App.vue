<template>
  <div class="main">
    <div class="page-header col-xs-offset-2 col-xs-8">
      <h2>Vue路由测试</h2>
    </div>
    <!-- 导航区域 -->
    <div class="col-xs-2 col-xs-offset-2">
      <router-link to="/home" class="list-group-item" active-calss="active">home</router-link>
      <router-link to="/about" class="list-group-item" active-calss="active">about</router-link>
    </div>
    <!-- 一级路由内容区域 home|about -->
    <!-- <div>
      <router-view>这里是内容展示的地方</router-view>
      <router-view></router-view>
    </div> -->
    <div class="col-xs-6 panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
  overflow: hidden;
}
</style>