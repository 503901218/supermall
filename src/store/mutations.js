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
     addCounter(state,payload){
        payload.count++
        console.log(state.cartList)
     },
    //  addTocart加入购物车
    addToCart(state,payload){
      // 用于判断在购物车中是否选中
      payload.checked=true
      state.cartList.push(payload)
      console.log(state.cartList)
    }
   }