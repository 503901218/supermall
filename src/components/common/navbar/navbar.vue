<template>
    <div class="navbar">
     <div class="left"><slot name="leftslot"></slot></div>
     <div class="center"><slot  name="centerslot"></slot></div>
     <div class="right"><slot  name="rightslot"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style >
    .navbar{
        height: 44px;
        line-height: 44px;
        display: flex;
        text-align: center;
        box-shadow: 0 1px 1px rgb(100,100,100,0.1);
}
    .left,.right{
        width: 60px;
        /* background-color: aquamarine; */
    }
    .center{
        flex: 1;
        text-align:center!important;
    }
</style>

