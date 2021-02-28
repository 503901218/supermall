<template>
   <div >
      <!-- {{goods}} -->
      <goodsitem v-for="item in goods" :goodsitem="item" :key="item.name">
       
      </goodsitem>
      
  </div>
</template>

<script>

import goodsitem from './goodsitem.vue'

export default {
  name: 'goods',
  data(){
    return {
      // localGoods:this.goods
    }
  },
  components: {
     goodsitem
  },
  props:{
      goods:{
        type:Array,
        default(){
            return []
        }
      }
     
  },
  // watch:{
  //   goods(val){
  //     this.localGoods = val
  //     console.log(this.localGoods)
  //   }
  // }
}
</script>

<style>

  

</style>
