<template>
   
   <div id="cart">
        <!-- 导航栏 使用Navbar封装的代码，选择某个插槽-->
        <Navbar key="cartNavbar" class="cartNavbar" style="z-index:9999!important；text-align: center!important;">
            <!-- 购物车数量计算属性获取getter cartLength-->
             <div slot="centerslot" class="centers">购物车({{cartLength}})</div>
        </Navbar>
         <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scrol="BScroll"
            @pollingUp="pollingUp">

            <!-- 商品列表 -->
            <addList></addList>
           
        </scroll>
        <!-- 总价 -->
        
          <!-- 返回顶部按钮 ，组件不能直接监听原生函数，需要加.native修饰符 -->
        <backTop @click.native="baclick" v-show="showBackTop"/> 
        <cartBottmBar></cartBottmBar>
       
   </div>

</template>

<script>
import Navbar from '../../components/common/navbar/navbar.vue'
import {mapGetters} from 'vuex'
import addList from '../cart/childComs/addList.vue'
import scroll from '../../components/common/betterscorll/scorll'
import backTop from '../../components/common/backTop/backTop'
import cartBottmBar from '../cart/childComs/cartBottmBar.vue'

export default {
    name: 'cart',
   data() {
       return {
            showBackTop:false,
       }
   },
    components: {
        Navbar,
        addList,
        scroll,
        backTop,
        cartBottmBar,
    
    },
    computed: {
        // allcart(){
        //     // return  this.$store.state.cartList.length
        //     return  this.$store.getters.cartLength
        // }
        // 获取vuex的getter的方法
        ...mapGetters(['cartList','cartLength'])
    },
    methods: {
        // 组件不能直接监听，返回顶部按钮要加.native
        baclick() 
        {
            // 获取滑动组件的内容，$refs获取scroll,
            // 返回顶部用better-scroll对象scorll的scrollTo方法
           console.log(this.$refs.scroll)
           this.$refs.scroll.scorll.scrollTo(0,0,600);
           console.log(this.$refs.scroll.scorll)
        },

        BScroll(position)
        {
        //   显示或者隐藏按钮
           this.showBackTop=(-position.y)>400
        },

        // 上拉加载更多
        pollingUp(){
            console.log("加载更多")
         
            console.log("加载更多成功")
        }
    },
    mounted() {
        console.log( this.cartList)
    },
}
</script>

<style scope>
.cartNavbar{
    background-color: var(--color-tin);
    color: #fff;
   position: fixed;
   width: 100%;
   z-index:9999!important;
   text-align: center!important;
}
/* 滚动可视区 */
.content{
    position: fixed;
  
}

</style>