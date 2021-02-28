<template>
     <TabBar>  
           <TabBarItem path="/home"> 
             <div slot='tabslot'>首页1</div>
             <div slot='icontabslot'>初始图片1</div>
             <div slot='activeicontabslot'>活跃图片1</div>
           </TabBarItem>
            <TabBarItem path="/cart" > 
             <div slot='tabslot'>購物車</div>
             <div slot='icontabslot'>初始图片1</div>
             <div slot='activeicontabslot'>活跃图片1</div>
           </TabBarItem>
             <TabBarItem path="/category"> 
             <div slot='tabslot'>category</div>
             <div slot='icontabslot'>初始图片1</div>
             <div slot='activeicontabslot'>活跃图片1</div>
           </TabBarItem>
             <TabBarItem path="/profile"> 
             <div slot='tabslot'>分類</div>
             <div slot='icontabslot'>初始图片1</div>
             <div slot='activeicontabslot'>活跃图片1</div>
           </TabBarItem>
        </TabBar>
</template>

<script>
import TabBar from '../../common/tabbar/tabbar'
import TabBarItem from '../../common/tabbar/tabbarItem'


export default {
    name: 'MianTab',

    
    data() {
        return {
            // isActive: false
        }
    },
    computed: {

    },
    methods: {
      
    }, 
     components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scope>


</style>