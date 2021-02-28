<template>
  <div id="addListItem" :key="product.name">
    <!-- {{product}} -->
    <div class="check" :class="{isActive:isActives}" @click="checkBtnCli">
      √
    </div>

    <img class="proImg" :src="product.img" alt="">
    <div id="proInner">
      <div class="proName">{{ product.name }}</div>
      <div class="proTitle">{{ product.title }}</div>
      <div class="proPrice">
        <span class="proPrice1"> ￥{{ product.newprice }}</span>
        <span class="proPrice2"> X{{ product.count }}</span>
      </div>
    </div>
    <!-- {{cartList.id}} -->
  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'scroll',
  inject: ['reload'],
  data() {
    return {
      isActives: this.product.checked
    }
  },
  computed: {
    // 获取vuex的getter的方法

  },
  components: {},
  created() {

  },
//   updated() {
//       console.log( this.product)
//   },
  methods: {

    checkBtnCli() {
      this.product.checked = !this.product.checked
      this.isActives = !this.isActives
      console.log(this.product)
    }
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log(this.product)

  }
}
//  document.getElementById('addListItem').contentWindow.location.reload(true); 
</script>

<style scope>
#addListItem {
  border-bottom: 1px solid rgb(223, 223, 223);
  padding: 5px;
  width: 100vh;
  display: flex;
}

.check {
  color: white;
  align-self: center;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 10px;

  /* margin: 0 auto; */
  padding-left: 1px;
  font-weight: 700;
  border: 2px solid #ccc;
  background-color: white;
}

.isActive {
  border: 2px solid pink;
  background-color: pink;
}

.proImg {
  width: 70px;
  height: 80px;
  border-radius: 5px;
}

#proInner {
  margin: 5px;
  width: 210px;
}

.proTitle {
  color: rgb(156, 156, 156);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  margin: 10px 0;
  overflow: hidden;
}

.proPrice1 {
  float: left;
  font-weight: 600;
  color: rgb(245, 150, 26);
}

.proPrice2 {
  float: right;
}
</style>
