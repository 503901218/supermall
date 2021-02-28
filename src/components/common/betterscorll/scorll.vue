<template>
<!-- 滚动更好体验 -->
<!-- ref获得确认对象 -->
<div>
<div id="wrapper" class="wrapper" ref="wrapper">
     <div id="content" class="content" ref="content">
         <slot></slot>
     </div>
  </div>
</div>
   
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  data(){
    return {
     scorll:'',
    }
  },

  components: {
   
  },
  props:{
     probeType:{
       type:Number,
       default:0
     }
     
  },
  mounted() {
    // 1、创建对象
      this.scorll=new BScroll(this.$refs.wrapper,{
        // 滚动参数,页面链接可点击  
        click:true,
        // 根据页面传参判断是否获取当前位置 默认0、1不获取，2、3获取
        probeType:this.probeType,
        pullUpLoad:true
      })
      // 2、实时监听scroll.on(事件名，回调函数)
     this.scorll.on('scroll',(position)=>{
      //  将获取的位置传出去,scrol是在父组件内实现绑定的方法名
     
       this.$emit('scrol',position)
     
     })

      //  3、上拉加载更多
       this.scorll.on('pullingUp',()=>{
      //  将获取的位置传出去,pollingUp是在父组件内实现绑定的方法名
       this.$emit('pollingUp')
     })
      // 页面加载图片不全问题需要刷新
       this.scorll.refresh()
  },

}

</script>

<style scope>
.wrapper{
    height: 99vh;
}
  
.content{
  /* height: calc(-2px) */
  /* overflow: hidden; */
  height: 1000vh;
}
</style>
