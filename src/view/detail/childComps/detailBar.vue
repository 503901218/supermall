<template>
  <!-- 滚动更好体验 -->
  <!-- ref获得确认对象 -->
  <div id="detailBarBot">
       <span class="cub1">
           <img src="../../../assets/img/per.png" alt="">
           <div>客服</div>
         <!-- <span>客服</span> -->
       </span>
    <span class="cub1">
           <img src="../../../assets/img/house.png" alt="">
           <div>店铺</div>
      <!-- <span>客服</span> -->
       </span>
    <span class="cub1">
           <img src="../../../assets/img/star.png" alt="">
           <div>收集</div>
      <!-- <span>客服</span> -->
       </span>
    <span class="cub1 cubCli1">
           <!-- <img src="../../../assets/img/per.png" alt=""> -->
           <div class="cubCli11" @click="addCli">加入购物车</div>
      <!-- <span>客服</span> -->
       </span>
    <span class="cub1 cubCli1">
           <!-- <img src="../../../assets/img/per.png" alt=""> -->
           <div class="cubCli22">购买</div>
      <!-- <span>客服</span> -->
       </span>

  </div>

</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'detailBar',
  data() {
    return {}
  },

  components: {},
  props: {},
  mounted() {

  },
  methods: {
    addCli() {
      this.$emit("addCli")
    }
  },

}

</script>

<style scope>
#detailBarBot {
  bottom: 0;
  z-index: 9;
  height: 44px;
  position: fixed;
  background-color: white;;
  display: flex;
  width: 100%;
  /* padding:3px 0; */
  color: rgb(110, 110, 110);
  font-size: 12px;
}

#detailBarBot img {
  width: auto;
  height: 20px;
  margin-top: 5px;
}

.cub1 {
  /* display: flex; */
  /* align-self: center; */
  flex: 1;
  text-align: center;
}

.cubCli1 {
  background-color: rgb(255, 164, 52);
  color: white;
  height: 44px;
  line-height: 44px;
  margin: 0 auto;
}

.cubCli22 {
  background-color: rgb(209, 74, 85);
}
</style>
