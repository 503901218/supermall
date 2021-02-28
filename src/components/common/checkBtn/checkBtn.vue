<template>

    <!-- <div class="check" :class="{isActive:isChecked}" @click="checkBtnCli"> -->
    <div class="check" :class="{isActive:isChecked}" >
      √
    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'scroll',
  inject: ['reload'],
  data() {
    return {
    //   isActives: this.product.checked
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
    // ...mapGetters
    // checkBtnCli() {
    //   this.product.checked = !this.product.checked
    //   this.isActives = !this.isActives
    //   console.log(this.product)
    // }
  },
  props: {
    isChecked:{
       type:Boolean,
       default:false
    }
  },
  mounted() {
    console.log(this.isChecked)

  }
}
//  document.getElementById('addListItem').contentWindow.location.reload(true); 
</script>

<style scope>


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


</style>
