import router from "@/router";
router.beforeEach((to:any,from:any,next:any) =>{
  next();
});
router.afterEach((to:any) =>{
  document.title = to.meta.title;
})