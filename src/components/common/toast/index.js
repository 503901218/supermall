import Toast from './toast.vue'

const obj={}
 //在mian里面vue.use之后执行这里的install
obj.install=function(Vue){
//    1、创建组件对象extend
    const ToastContrustor=Vue.extend(Toast)
//    2、new创建组件对象
    const toast =new ToastContrustor
// 3、手动挂载在某一元素上$mount
    toast.$mount(document.createElement('div'))
    // 4、toast.$el就是上面的div(el指根)，加入页面
    document.body.appendChild(toast.$el)

   //默认传入Vue，prototype用于定义原型对象（前面创建的对象）  接下来可在全局使用this.$toast
    Vue.prototype.$toast=toast
}
export default obj