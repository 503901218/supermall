module.exports={
  configureWebpack:{
      resolve:{
          alias:{
              'assets':'@/assets',
              'common':'@/common',
              'components':'@/components',
              'network':'@/network',
            //   'router':'@/router',
            //   'store':'@/store',
              'view':'@/view',

          }
      }
  },
  devServe:{
    hot:true,
    open:true,
    port:8080,
    
  }
}