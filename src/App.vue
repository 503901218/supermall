<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 让详情页实时获取更新数据exclude="detail" -->
    <keep-alive exclude="detail,cart">
      <router-view v-if="isRouterAlive"></router-view>

    </keep-alive>
    <mainTabar/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mainTabar from './components/contect/mainTabbar/mainTar'

export default {
  name: 'App',
  components: {
    mainTabar
  },
  provide() {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true                    //控制视图是否显示的变量
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      })
    }
  },


}
</script>

<style>
@import "./assets/css/base.css";


</style>
