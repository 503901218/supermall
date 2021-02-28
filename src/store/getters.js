// getter属性类似computed

export default{
    cartLength(state){
        console.log(state.cartList)
        return state.cartList.length
    },
    cartList(state){
        console.log(state.cartList)
        return state.cartList
    }
}