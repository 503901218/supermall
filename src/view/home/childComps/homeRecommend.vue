<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recitem">
      <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>


export default {
  name: 'homeRecommend',
  props:{
      recommend:{
          type:Array,
          dafault(){
             return []
          }
      }
  },
  components: {
  
  }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 3vmin;
  padding: 15px 0 22px;
  border-bottom: 10px solid rgb(233, 233, 233);
}
  .recitem{
      flex: 1;
      /* margin: 0 auto; */
  }
.recitem img{
    width: 80%;
    margin-bottom: 5px;
}
</style>
