// request导出的时候没defualt，所以要花括号导入
import {request} from './request'
import mock from '@/mock'

export function getHomeMultidata(){
    return request({
        url:'http://123.207.32.32:8000/home/multidata',
        
    }) }
// export function getHomeGoods(type,page){
export function getHomeGoods(){
    return request({
        url:'/home/dataM',
        // params:{
        //    type,
        //    page
        // }
    })
}

export function getHomeGoodsdataN(){
    return request({
        url:'/home/dataN',
        // params:{
        //    type,
        //    page
        // }
    })
}

export function getHomeGoodsdataS(){
    return request({
        url:'/home/dataS',
        // params:{
        //    type,
        //    page
        // }
    })
}

