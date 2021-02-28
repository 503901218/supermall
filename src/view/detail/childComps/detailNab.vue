<template>
   <div key="detailBar" id="detailBar">
         <!-- 导航栏 使用Navbar封装的代码，选择某个插槽-->
    <Navbar  style="z-index:9999" >
        <div slot="leftslot" @click="backNab"><img src="../../../assets/img/backNab.png" alt=""></div>
        <div slot="centerslot" class="center">
            <!-- active:index===currentIndex获取当前点击的对象 -->
            <div v-for="(item,index) in title"
                 class="centerItenm"
                 :class="{active:index===currentIndex}"

                 @click="clickNab(index)"
                 :key="index"
            >{{item}}</div>
        </div>
        <!-- <div slot="rightslot">购物街</div> -->
    </Navbar> 
  </div>
</template>

<script>

// 功能
import Navbar from '../../../components/common/navbar/navbar.vue'

export default {
  name: 'detailNab',
   data(){
    return {
        // 用porps属性要用this
        title:['商品','参数','  评论','推荐'],
        currentIndex:0
    }  
  },
  components: {
     Navbar
  },
  props:{

     
  },
 
  methods:{
   clickNab(index){
       this.currentIndex=index;
       this.$emit('detailNabClick',index)
   },
   backNab(){
    //    路由的方法
       this.$router.back(-1);
   }
  }
}
</script>

<style scope>
#detailBar img{
 width: 30%;
 margin-top: 15px;
}
.center{
    display: flex;
}
.centerItenm{
    flex: 1;
    font-size: 13px;
}
.active{
    color:var(--color-tin);
    font-weight: 700;
}
</style>
