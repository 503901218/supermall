<template>
    <div id="tab-bar">
      <slot ></slot>
    </div>
</template>

<script>
// import 

export default {
    name: 'TabBar',
    components: {
       
    }
}
</script>

<style scope>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

</style>