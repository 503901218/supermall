<template>
   <div id="detailBase" key="detailBase" name="detailBase">
      <!-- {{detailBase}} -->
      <div class="title">【{{detailBase.name}}】{{detailBase.title}}</div>
      <div class="price" style="margin:5px">
          <span class="newprice">   ￥{{detailBase.newprice}} </span>
      
          <span class="oldprice"> <del>{{detailBase.oldprice}}</del> </span>

          <span class="discountprice">{{detailBase.discountprice}} </span>
      </div>
       <div class="tra">
          <span class="sell"> 销量：{{detailBase.sell}} </span>
      
          <span class="collect">收藏： {{detailBase.collect}} </span>

          <!-- <span class="discountprice">{{detailBase.discountprice}} </span> -->
       </div>
       <div class="backprice">
          <span> <img src="../../../assets/img/right.png" alt="" key="rightimg1">{{detailBase.backprice2}}</span>
           <span> <img src="../../../assets/img/right.png" alt="" key="rightimg2">{{detailBase.backprice}}</span>
       </div>


    <!-- 商家信息 -->
        <div class="seller">
          <div class="logo">
            <img :src="detailBase.logo" alt="">  
           <span> {{detailBase.name}}</span>
            </div>
            
            <span> </span>
           <div class="message">
             <div class="alldata">
                <div class="alldata-son son1">
                    <div class="allnum">
                        {{detailBase.allsell}}万
                    </div>
                    <div class="allname">
                        总销量
                    </div>

                </div>
                <div class="alldata-son son2">
                    <div class="allnum">
                        {{detailBase.allgoods}}万
                    </div>
                    <div class="allname">
                        全部宝贝
                    </div>

                </div>
                    <div class="alldata-son2">
                        <div class="son-row">
                            <span class="row1">描述相符</span> 
                            <span class="row1 row2" :style="testcolor(detailBase.point1).res.color">{{detailBase.point1}}</span>
                            <span class="row1 row3" :style="testcolor(detailBase.point1).res.bgc">{{testcolor(detailBase.point1).res.HorL}}</span>
                        </div>
                          <div class="son-row">
                            <span class="row1">描述相符</span> 
                            <span class="row1 row2" :style="testcolor(detailBase.point2).res.color">{{detailBase.point2}}</span>
                            <span class="row1 row3" :style="testcolor(detailBase.point2).res.bgc">{{testcolor(detailBase.point2).res.HorL}}</span>
                        </div>
                          <div class="son-row">
                            <span class="row1">描述相符</span> 
                           <span class="row1 row2" :style="testcolor(detailBase.point3).res.color">{{detailBase.point3}}</span>
                            <span class="row1 row3" :style="testcolor(detailBase.point3).res.bgc">{{testcolor(detailBase.point3).res.HorL}}</span>
                        </div>
                    </div>
                </div>
                
             </div>
        </div>

   
    <!-- 商品详情 -->
    <div class="imgs">
        <div v-for="item in detailBase.imgs"> 
            <img :src="item" alt="">
           
        </div>
    </div>

  </div>
</template>

<script>

// 功能


export default {
  name: 'detailBase',
   data(){
    // detailBasedata:{}
    return {
        // HorL:''
    }
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
//   computed:{
//      testcolor(res){
//          if(res.point1>4.5) {
//          return {
//              "background-color":"red"
//          } 
//      }
//      else {
//          return {}
//      }
//      }
//   },
  created(){

  },
  methods: {
      testcolor(res){
        if(res>4.5) {
            return {
               res:{
                   "color":"color:red",
                   "HorL":"高",
                   "bgc":"background-color:red"
               } 
              
            } 
        }
        else {
            return {
                res:{
                   "color":"color:cadetblue;",
                   "HorL":"低",
                   "bgc":"background-color:cadetblue;"
               } 
            }
        }
     }
  },


}
</script>

<style scope>
.title,
.tra,
.price{
    margin: 10px 5px;
}

.title{
    /* font-weight: 700; */
    color: black;
    font-size: 14px;
      
}
.newprice{
font-size: 18px;
color: var(--color-tin);
 margin: 5px;
 font-weight: 700;
}
.oldprice{
    font-size: 12px;
    color: rgb(121, 121, 121);
}
.discountprice{
    padding: 2px 8px;
    background-color: var(--color-tin);
    color: aliceblue;
    border-radius: 10px;
    font-size: 12px;
    margin: 5px;
}
.tra{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
.tra span{
    flex: 1;
    text-align: center;
    color: rgb(163, 163, 163);
    font-size: 12px;


}
.backprice{
     display: flex;margin: 0 5px;
    border-bottom: 1px solid #ccc;
    /* box-shadow: 3px #ccc; */
    padding-bottom: 10px;
}
.backprice img{
    margin-bottom:-2px;
    margin-right: 5px;
    width: 14px;
}
.backprice span{
    flex: 1;
    text-align: center;
    color: rgb(163, 163, 163);
    font-size: 12px;
}
.logo{
    /* display: inline-block; */
    margin: 0 auto;
    display: flex;
}
.logo span{
    align-self: center;
}
.logo img{
    border-radius: 50%;
    margin: 20px 10px;
    width: 50px;
}

.alldata{
 display: flex;  
 color: black;
 text-align: center;
}
.alldata-son{
    width: 25%;
}
.alldata-son2{
    width: 50%;
}
.allnum{
    font-weight: 500;
    font-size: 16px;
    margin-bottom:  10px;
}
.alldata{
    font-size: 10px;
}
.son1{
    margin-right: 5px;
    align-self: center;
}
.son2{
    border-right: 1px solid #ccc;
    margin-right: 5px;
    align-self: center;
}
.row1{
    margin: 0 4px;
}

.row3{
    color: white;
}
.son-row{
    padding: 3px;
}

.imgs img{

   width:calc(100% - 20px) ;
   margin:0  10px;
}
</style>
