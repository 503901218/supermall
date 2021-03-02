import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        // 购物车 数据从detail调用addCart传入
        cartList: [],
        selectAll:true,
        //    引入的变量mutations。。。，在下面也要有mutations声明。。
        mutations,
        actions,
        getters,
    },
//    修改变量mutation中一次只改一个地方 调用需要commit
    mutations,
//    统一数据入口，调用需要dispatch  
    actions,
    getters

})

export default store