<template>
    <div class="toast" v-show="Tshow">
       <div>{{message}}</div> 
    </div>
</template>
<script>
export default {
    name:"Toast",
    props:{
        // message:{
        //     type:String,
        //     default:''
        // },
        // Tshow:{
        //     type:Boolean,
        //     default:false
        // }
    },
    data() {
        return {
            message:'',
            Tshowmess:false
        }
    },
    // 封装方法输出信息，持续时间
    methods: {
        Tshow(message="默认文字",durTime="2000"){
            this.message=message
            this.Tshowmess=true
            setTimeout(() => {
                this.message=''
                this.Tshowmess=false
            }, durTime);
        }
    },
}
</script>
<style scope>
    .toast{
        position:fixed;
        top: 50%;
        left:50%;
        transform:translate(-50%,-50%);
        color: white;
        background-color: rgba(0,0,0,0.7);
        margin: 5px 10px;
       z-index: 992929;
    }
</style>