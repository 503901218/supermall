export default {
    // context上下文
    addCart(context, payload) {
        //    1、检查是否加入购物车
        // 查找当前数据数组中是否有传入的商品id find返回bool
        console.log(context.state.cartList);
        console.log(payload.id)
        let pro = context.state.cartList.find(item => item.id === payload.id)
        console.log(pro)
        if (pro) {
            //  有，数量加1，commit到mutation中修改
            context.commit('addCounter', payload)
        } else {
            context.commit('addToCart', payload)
        }
    }
}