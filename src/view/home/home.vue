<template>
  <div id="home"> 
      <!-- 导航栏 使用Navbar封装的代码，选择某个插槽-->
    <Navbar key="homeNavbar" class="homeNavbar" style="z-index:9999!important；text-align: center!important;">
       <div slot="centerslot" class="centers">购物街</div>
    </Navbar>

    <!-- 可滚动区域 scrol是子组件传出的事件-->
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scrol="BScroll"
            @pollingUp="pollingUp"
    >

        <div style="height:100%">
                    <a :href="link" >
            <img :src="img1" alt="" style="padding-top: 44px;" >
        </a>   
        <!--推荐列表 这是子组件，recommend（在子组件中props中已经声明）引用父组件中的recommend数据 -->
        <homeRecommend :recommend="recommend"></homeRecommend>
        
        <div style="text-align:center;margin:8px;color:var(--color-tin);font-weight: 700;">今 日 推 荐</div>
        
        <feature></feature>
        
 
        <tabcontrol class="tabcontrol" :titles="['流行','新款','推荐']" @tabclick="tabclick"></tabcontrol>

        <goodslist :goods="goods[goodstate].list"></goodslist>
      
        </div>

     </scroll>
     <!-- 返回顶部按钮 ，组件不能直接监听原生函数，需要加.native修饰符 -->
    <backTop @click.native="baclick" v-show="showBackTop"/>

</div>
</template>

<script>

// 子组件
import homeRecommend from '../home/childComps/homeRecommend'
import feature from '../home/childComps/feature'


// 功能
import Navbar from '../../components/common/navbar/navbar.vue'
import tabcontrol from '../../components/contect/tabControl/tabControl'
import goodslist from '../../components/contect/goods/goods.vue'
import scroll from '../../components/common/betterscorll/scorll'
import backTop from '../../components/common/backTop/backTop'


// 导入方法, 在创建页面时就请求数据
import {getHomeMultidata,getHomeGoods,getHomeGoodsdataN,getHomeGoodsdataS} from '../../network/homerequest'
// import {getHomeData} from  '../../network'


export default {
    name: 'cart',
    data() {
        return {     
            banner:[],
            recommend:[],
            keywords:[],
            img1:'',
            link:'',
            // 获取信息
            first:0,
            goods:{
                'pop':{page:0,list:[]},
                'news':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
             goodstate:'pop',
             showBackTop:false,

            
        }
    },
    components: {
        Navbar,
        homeRecommend,
        feature,
        tabcontrol,  goodslist,
        scroll,
        backTop
        
    },
    // 生命周期函数
    created() {
        // 一创建就发送网络请求
        // 1、请求多个数据
        getHomeMultidata().then(res=>{
             console.log(res.data.data)
            // 将内容保存下来
            this.banner=res.data.data.banner.list
            this.recommend=res.data.data.recommend.list
            this.keywords=res.data.data.keywords.list

            this.img1=this.banner[2].image
            this.link=this.banner[2].link
        })
        // 2请求数据 getHomeData（type,page）
        // getHomeGoods('pop',1).then(res=>{
        //    console.log(res)
        // })
           getHomeGoods().then(res=>{
              // 数据加入用push
              this.goods['pop'].list.push(...res.data)
              // this.goods['pop'].list=res.data;
              console.log(this.goods['pop'].list)
              this.$refs.scroll.scorll.finishPullUp()
          })
          getHomeGoodsdataN().then(res=>{  
               this.goods['news'].list.push(...res.data)
               console.log(this.goods['news'].list)
          })
         getHomeGoodsdataS().then(res=>{  
               this.goods['sell'].list.push(...res.data)
               console.log(this.goods['sell'].list)
          })
    },

    methods:{
        tabclick(index){
            switch(index){
                case 0:this.goodstate='pop';break;
                case 1:this.goodstate='news';break;
                case 2:this.goodstate='sell';break;
            }
        },
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

    }
}
</script>

<style scope>
#home{
  padding-bottom: 50px;
}
#home .homeNavbar{
    background-color: var(--color-tin);
    color: #fff;
   position: fixed;
   width: 100%;
   z-index:9999!important;
   text-align: center!important;
}
.centers {
    text-align: center!important;
    margin: 0 auto;
}
img{
    width: 100%;
    
    /* height: 100px; */
}
.tabcontrol{
     /* position: -webkit-sticky; */
    /* position: sticky; */
    top:44px;
}

/* 滚动可视区 */
.content{
    position: fixed;
}

</style>