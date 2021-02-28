<template>
   <div @click="goodsitemClick" class="goodsItem">
          <img :src="imgurl" alt="" class="imgclass"/>
          <!-- <div class="imgnameclass">{{imgname}}</div>  -->
          <div>{{imgtitle}}</div>
          <div class="fon">
            <span class="price">￥{{imgprice}}</span>
            <span>{{goodsitem.star}}</span>
          </div>
         
  </div>
</template>

<script>

export default {
  name: 'goodsitem',
   data(){
    return {
        // 用porps属性要用this
        imgurl:this.goodsitem.img,
        imgname:this.goodsitem.name,
        imgtitle:this.goodsitem.title,
        imgprice:this.goodsitem.price
    }  
  },
  components: {
   
  },
  props:{
     goodsitem:{
        type:Object,
        default(){
            return {}
        }
      }
     
  },
  methods:{
    goodsitemClick(){
      // push可以返回  传递获取id
      this.$router.push('/detail/'+ this.goodsitem.id)

    }
  }
}
</script>

<style scope>
.goodsItem{
      display: inline-block;
      margin-left: 3.3%;
    width: 45%;
    /* word-break: break-all; */
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    font-size: 12px;

}
.fon{
  text-align: center;
   align-self: center;
}
.price{
  color: var(--color-tin);
  font-weight: 600;
  font-size: 14px;
  align-self: center;
}
  
</style>
