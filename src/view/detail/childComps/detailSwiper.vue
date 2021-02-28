<template>
   <div id="detailSwiper">
      <img :src="Swiper.img" alt="">
  </div>
</template>

<script>

// 功能
export default {
  name: 'detailSwiper',
 data(){
    return {}
  },
  components: {

  },
  props:{
     Swiper:{
         type:Object,
         default(){
             return {}
         }
     }
  },
  created(){




  },
  methods:{
    // goodsitemClick(){
    //   console.log("进入详情页")
    // }
  }
}
</script>

<style scope>
#detailSwiper img{
    width: 100%;
    /* height: -webkit-fill-available; */
}


</style>
