<template>
<!-- 滚动更好体验 -->
<!-- ref获得确认对象 -->
<div class="btop" >
   <!-- <img src="assets/img/back.png" alt=""> -->
    <img src="../../../assets/img/back.png" alt="">
</div>
   
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'backTop',
  data(){
    return {
 
    }
  },
  components: {
   
  },
  props:{
     
     
  },
  mounted() {
 
  },
  // watch:{
  //   goods(val){
  //     this.localGoods = val
  //     console.log(this.localGoods)
  //   }
  // }
}
</script>

<style scope>
   .btop{
       position: fixed;
       right: 10px;
       bottom: 50px;
   }
   .btop img {
       width: 100%;
   }
</style>
