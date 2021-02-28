export default {
    // 第一个默认参数 第二个传入参数 这个修改函数从detail传入
    //  addCart(state,payload){
    //     // -----写法一：-----
    //     //  let flagPro=null
    //     //  state.cartList.push(payload)
    //     // //  添加新商品
    //     //  for(let item of state.cartList){
    //     //      if(item.id===payload.id){
    //     //         flagPro=item
    //     //      }
    //     //  }
    //     // //  判断商品是否加入
    //     // if(flagPro!=null){
    //     //     flagPro.count+=1
    //     // }
    //     // else{
    //     //    state.cartList.push(payload)
    //     //    flagPro.count=1
    //     // }
    //     // console.log(state.cartList)
    //     // console.log(flagPro)

    //     // ----------写法二----------
    //     let flagPro=null
    //     // 查找当前数据数组中是否有传入的商品id find返回bool
    //     let produce=state.cartList.find(item=>item.id===payload.id)
    //     if(produce){
    //         // 新加属性 count
    //         payload.count+=1
    //     }
    //     else{
    //         payload.count=1
    //         state.cartList.push(payload)
    //     }
    //     for(var i =0;i<state.cartList.length;i++){
    //         console.log(state.cartList)
    //     }

    //  },
    //  数量+1
    addCounter(state, payload) {
        let index;
        let cartList = state.cartList;
        cartList.forEach((item, index) => {
            if (item.id === payload.id) {
                state.cartList[index].count = state.cartList[index].count + 1
            }
        })
    },
    //  addTocart加入购物车
    addToCart(state, payload) {
        payload.checked = true
        payload.count = 1;
        state.cartList.push(payload)
    },
    // 单选按钮点击
    updateCheck(state,product){
      for(var i=0;i<state.cartList.length;i++){
        if(state.cartList[i].id==product.id){
          state.cartList[i].checked=product.checked
        }
      }
      console.log(state.cartList)
    },
    // 全选按钮
    checkBtnCliAll(state,isActive){
      var flag=true
      // 判断上方按钮是否全选中
      for(var i=0;i<state.cartList.length;i++){
        if(!state.cartList[i].checked) {
            flag=false
        }
      }
      if(flag){isActive=true}

      // 判断全选按钮是否选中
      if(isActive){
        for(var i=0;i<state.cartList.length;i++){
          state.cartList[i].checked=true
        }
      }
      else{
        isActive=false
      }
      console.log(state.cartList)
    }
}