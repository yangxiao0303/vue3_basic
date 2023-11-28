//创建应用的方法
import { createApp } from "vue";
//引入根组件
import App from './App.vue';
// 引入路由器
import router from "./router";
// 引入element-plus
import ElementPlus from'element-plus';
import 'element-plus/dist/index.css';
// 引入路由鉴权
import '@/permission';
//创建应用挂载到挂载点上
const app = createApp(App);
// 安装路由器
app.use(router);
// 安装elementPlus
app.use(ElementPlus);
// mount 要最后写
app.mount('#app');
