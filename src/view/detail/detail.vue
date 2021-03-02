<template>
  <div id="detail" key="detail" name="detail">


    <!-- 导航栏 使用Navbar封装的代码，选择某个插槽-->
    <!-- 导航栏传出的数据，接收方法detailNabClick  -->
    <detailNab class="homeNavbar" ref="detailNab"></detailNab>
    <!-- 轮播图位置 实现scroll可以监听probeType=3 scrol是scroll传出的方法-->
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scrol="BScroll">
      <detailSwiper :Swiper="dat" ref="detailSwiper"></detailSwiper>
      <!-- 基本信息 -->
      <detailBase :detailBase="dat" ref="detailBase"/>

      <!-- 评价 -->
      <detailCom :detailBase="dat" ref="detailCom"></detailCom>


      <!-- 推荐信息 -->
      <goodslist :goods="goods[goodstate].list" ref="goodslist"></goodslist>
    </scroll>
    <detailBar @addCli="addBtnCli">

    </detailBar>
    <!-- {{$store.cartList[0]}} -->
    <!-- 返回顶部 组件不能直接监听原生函数，需要加.native修饰符-->
    <backTop @click.native="baclick" v-show="showBackTop"/>
    <!-- message传入子组件 -->
    <toast :message="Tmessage" :Tshow="Tshow"></toast>
  </div>
</template>

<script>

// 功能
import detailNab from '../detail/childComps/detailNab.vue'
import {getDetaildata} from '../../network/detail'
// 导入方法, 在创建页面时就请求数据
import {getHomeGoods} from '../../network/homerequest'
import mock from '@/mock'
import backTop from '../../components/common/backTop/backTop'

import scroll from '../../components/common/betterscorll/scorll.vue'
import goodslist from '../../components/contect/goods/goods.vue'
import toast from '../../components/common/toast/toast.vue'

import detailSwiper from './childComps/detailSwiper.vue'
import detailBase from './childComps/detailBase.vue'
import detailCom from './childComps/detailCom.vue'
import detailBar from './childComps/detailBar.vue'


export default {
  name: 'detail',
  data() {
    return {
      // 用porps属性要用this
      id: '',
      dat: {},
      Swiper: '',
      showBackTop: false,
      goods: {
        'pop': {page: 0, list: []},
      },
      goodstate: 'pop',
      NabClick: [0, 500, 600, 650, Number.MAX_VALUE],
      Tmessage:'as',
      Tshow:false


    }
  },
  components: {
    detailNab,
    detailSwiper,
    detailBase,
    scroll,
    backTop,
    goodslist,
    detailCom,
    detailBar,
    toast
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    },


  },
  created() {
    // console.log(this.$route)
    //   1、获取id
    this.id = this.$route.params.id

    //   2、请求数据 
    getDetaildata(this.id).then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if (this.id === res.data[i].id) {
          this.dat = res.data[i]
        }
      }
    }).catch(err => {
      console.log(err)
    })

    // 推荐
    getHomeGoods().then(res => {
      // 数据加入用push
      this.goods['pop'].list.push(...res.data)
      // this.goods['pop'].list=res.data;
      // console.log(this.goods['pop'].list)
      // this.$refs.scroll.scorll.finishPullUp()
    })
    // console.log(this.dat, this.goodsitem)
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
    // console.log(this.NabClick)
  },


  methods: {
    // 导航
    BScroll(position) {
      //   显示或者隐藏按钮
      this.showBackTop = (-position.y) > 400
      var POY = -position.y
      var L = this.NabClick

      for (var i = 0; i < L.length; i++) {
        // console.log(this.$refs.detailNab.currentIndex)
        if (this.$refs.detailNab.currentIndex !== i && (
            (i < L.length - 1 && POY >= L[i] && POY < L[i + 1]))) {
          this.$refs.detailNab.currentIndex = i
          // console.log(this.$refs.detailNab.currentIndex)
        }

      }

    },
    // 组件不能直接监听，返回顶部按钮要加.native
    baclick() {
      // 获取滑动组件的内容，$refs获取scroll,
      // 返回顶部用better-scroll对象scorll的scrollTo方法
      // console.log(this.$refs.scroll)
      this.$refs.scroll.scorll.scrollTo(0, 0, 600);
      // console.log(this.$refs.scroll.scorll)
    },

    // 导航联动
    // detailNClick(index){
    //   // this.$refs.scrollA.scorll.scrollTo(0,this.NabClick[index],100)

    //    for(var i=0 ;i<this.NabClick.length;i++){
    //      if(this.currentIndex!==i&&){

    //      }
    //    }
    //    this.$refs.scroll.scorll.scrollTo(0,500,100)
    // },

    // 加购物车
    addBtnCli() {
      // addCart mutation内定义
      console.log(this.dat)
      // 加入购物车用actions操作用dispatch
      this.$store.dispatch('addCart', this.dat).then(res=>{
        // this.Tmessage=res
        // this.Tshow=true
        // setTimeout(()=>{
        //   // 显示时间到后复原toast内容
        //   this.Tshow=false
        //    this.Tmessage=''
        // },1500)
        this.$toast.Tshow(res,1500)
        console.log(res)
      })
      
      // console.log(this.$store.state.cartList)
    }
  }
}
</script>

<style scope>
#detail {
  z-index: 9;
  background-color: white;
  height: 800px;
  position: relative;
}


.homeNavbar {
  width: 100%;
  z-index: 999999 !important;
  position: fixed;
  background-color: white;
}

/* 滚动可视区 */
.content {

  position: fixed;
  margin-top: 22px;
}


</style>
