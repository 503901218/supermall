<template>
<!-- 粉色切换按钮 -->
  <div class="tabControl">
      <div v-for="(item,index) in titles" class="tabControlItem" 
           :class="{active:index===currentIndex}"
           @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  data() {
      return {
        //   获取当前点击的对象
          currentIndex:0
      }
  },
  props:{
    titles:{
        type:Array,
        dafault(){
            return []
        }
    }
  },
  methods:{
      itemClick(index){
          this.currentIndex=index
        //   子组件 向父组件传递  在父组件home中方法名@tabclick，子组件传递的参数index
          this.$emit('tabclick',index)
      }
  }
}
</script>

<style>
.tabControl{
    display: flex;
    text-align: center;
     height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.tabControlItem{
    flex: 1;
}
.tabControlItem span{
    padding: 5px;
}
.active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tin);
}
</style>
