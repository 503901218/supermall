<template>
   <div id="detailcom" key="detailcom"  name="detailcom">
       <div class="cutCom"></div>
       <div class="Comtitle">
           <span class="usercom">用户评价</span>
           <span class="usermore"><a href="#">更多</a></span> 
       </div>
        <div class="logo2">
            <img :src="detailBase.logo" alt="">  
            <span> {{detailBase.name}}</span>
        </div>
        <div class="comm">
            {{detailBase.Comments}}
        </div>
        <div class="tim">
            <span>{{detailBase.time}}</span>
            <span>颜色：{{detailBase.sty}}</span>
            <span>尺码：{{detailBase.siz}}</span>
        </div>

        <div class="showimg">
            <span   v-for="item in detailBase.userimg">
                <img :src="item" alt="">
            </span>
        </div>

           <div class="cutCom"></div>
  </div>
</template>

<script>

// 功能
export default {
  name: 'detailcom',
 data(){
    return {}
  },
  components: {

  },
  props:{
    detailBase:{
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
.cutCom{
    width: 100%;
    height: 5px;
    margin: 15px 0;
    background-color: #e6e6e6;
}
.Comtitle,
.tim,.comm,.showimg
{
    margin: 5px 10px;
}
.Comtitle {
    left: 0;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}
.Comtitle  .usercom{
    position: relative;

}
.Comtitle .usermore {
   position: relative;
   right:-67%
}
.logo2{
    /* display: inline-block; */
    margin: 0 auto;
    display: flex;
}
.logo2 span{
    align-self: center;
}
.logo2 img{
    border-radius: 50%;
    margin: 10px 10px;
    width: 50px;
}

.logo2{
    color: black;
    font-size: 14px;
}
.comm{
    font-size: 14px;
    color: #7e7e7e;
}
.tim span{
    margin:  0 5px;
}
.tim{
    font-size: 12px;
    color: #a5a5a5;
}

/* 图片 */
.showimg{
    display: flex;
}
.showimg img{
   display: inline-block;
   margin: 0 5px;
}

</style>
