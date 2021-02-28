<template>
    <div class="tab-bar-item" @click="itemclick">

        <div :style="activeStyle">

            <slot name="tabslot"></slot>   
        </div>

        <div v-if="!isActive">
    
            <slot name="icontabslot"></slot>

        </div>

        <div v-else>

            <slot name="activeicontabslot"></slot>

        </div>

    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
    methods: {
        itemclick() {
            this.$router.replace(this.path)
        }
    },
}
</script>

<style scope>
.tab-bar-item {
    height: 49px;
    flex: 1;
    text-align: center;
}

</style>