<template>
  <div id="cartBottmBar">
    <div class="cartBtmLeft">
      <div class="check" :class="{isActive:isActives}" @click="checkBtnCliAll">
        √
      </div>
      <div>全选</div>
    </div>

    <div class="allmoney">合计：{{ totalPrice }}</div>
    <div class="calmoney">去计算({{ calprice }})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'cartBottmBar',
  data() {
    return {
      isActives: true,
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    // 总价 filters过滤器  reduce计算数组总价（前一次的价，计算值）
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {

        return item.checked
      }).reduce((Allprice, item) => {
        return Allprice + item.newprice * item.count
      }, 0)
      //    console.log(this.$store.state.cartList)
    },
    //计算商品数量
    calprice() {
      // console.log(this.cartList[0].count)
      console.log(this.cartList[0])
      //  return this.cartList.filter(item=>{
      //      console.log(item)
      //      return item.checked
      //      }).length

      var len = 0
      for (var i = 0; i < this.cartList.length; i++) {

        if (this.cartList[i].checked) {
          len++
        }
      }
      console.log(len)
      return len
    },

    // 全选
    checkBtnCli() {
      // chooseAll
      // this.product.checked=!this.product.checked
      if (this.$store.state.cartList.length === 0) {
        this.isActives = false
      }
      // else{
      //   this.isActives=!this.isActives
      // }
      
      // if(this.$store.state.cartList.filter(item=> item.checked).length)
      //   this.isActive=!this.isActive
      //console.log(this.$store.state.cartList)
      //   var fla=false
      for(var i=0;i<this.$store.state.cartList.length;i++){
           if(!this.$store.state.cartList[i].checked){
             this.isActives=false
           }
      }
        return this.isActives
      // if(this.isActives){
      //     for(var i=0;i<this.$store.state.cartList.length;i++){
      //         this.$store.state.cartList[i].checked=true
      //     }
      // }
      // return this.isActives = !this.$store.state.cartList.find(item => !item.checked)
     
    },
  },
  components: {},
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }


  },

  mounted() {
    // 各组件的顶部位置获取

    // console.log(this.$refs.detailBase)
    // console.log(this.$refs.detailBase.$el)
    // console.log(this.$refs.detailBase.$el.OffsetTop)

    // this.NabClick.push(0);
    // this.NabClick.push(this.$refs.detailBase.$el.OffsetTop);
    // this.NabClick.push(this.$refs.detailCom.$el.OffsetTop);
    // this.NabClick.push(this.$refs.goodslist.$el.OffsetTop);

  },





  methods: {        // if(this.isActives){
        //     this.cartList.forEach(item=>{item.checked=false})
        // }else{
        //       this.cartList.forEach(item=>{item.checked=true})
        // }
     checkBtnCliAll(){
       console.log(this.isActives,this.$store.state.cartList.length)
       if (this.$store.state.cartList.length === 0) {
        this.isActives = false
       }
        else{
           
          this.isActives=!this.isActives
        
        }
       var flag=true
      if(this.isActives)   {
        // 判断上方按钮是否全选中
        for(var i=0;i<this.$store.state.cartList.length;i++){
          if(!this.$store.state.cartList[i].checked) {
              flag=false
              this.isActives=flag
          }
        }
      }
       console.log(this.isActives)
     // if(flag){ this.isActives =true}

        this.$store.commit('checkBtnCliAll',this.isActives)

        console.log(this.$store.state.cartList,this.isActives)
    }
  }
}
</script>

<style scope>
#cartBottmBar {
  display: flex;
  align-items: center;
  z-index: 9999;
  position: relative;
  position: fixed;
  /* margin-bottom: 19px; */
  /* line-height: 30px; */
  bottom: 44px;
  width: 100%;
  background-color: #f2f2f2;
  height: 30px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-around;
}

.isActive {
  border: 2px solid pink;
  background-color: pink;
}

.cartBtmLeft {
  display: flex;
  align-items: center;
  width: 100%;
}

.allmoney {

  width: 100%;
}

.calmoney {
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  line-height: 30px;
  text-align: center;
  /* line-height: ; */
}


</style>
