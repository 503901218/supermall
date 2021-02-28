<template>
  <div id="addList">
    <!--    {{ this.$store.state.cartList }}-->
    <addListItem v-for="item in cartList" :product="item" :key="item.id"></addListItem>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import addListItem from './addListItem.vue'

export default {
  name: 'addList',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    addListItem,
  },
  props: {},

  mounted() {
    // 各组件的顶部位置获取

    // console.log(this.$refs.detailBase)
    // console.log(this.$refs.detailBase.$el)
    // console.log(this.$refs.detailBase.$el.OffsetTop)

    // this.NabClick.push(0);
    // this.NabClick.push(this.$refs.detailBase.$el.OffsetTop);
    // this.NabClick.push(this.$refs.detailCom.$el.OffsetTop);
    // this.NabClick.push(this.$refs.goodslist.$el.OffsetTop);
    // console.log(this.cartList)
  },


  methods: {}
}
</script>

<style scope>

#addList {
  position: relative;
  margin-top: 44px;
  margin-bottom: 44px;
}


</style>
