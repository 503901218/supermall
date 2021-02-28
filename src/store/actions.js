export default{
    // context上下文
       addCart(context,payload){
        //    1、检查是否加入购物车
         // 查找当前数据数组中是否有传入的商品id find返回bool
         let pro=context.state.cartList.find(item=>item.id===payload.id)
         if(pro){
            //  有，数量加1，commit到mutation中修改
            context.commit('addCounter',payload)
         }
         else{
            //  没有，加入购物车
             payload.count=1
             context.commit('addToCart',payload)
         }
       }
   }