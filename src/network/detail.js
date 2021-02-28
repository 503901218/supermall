// request导出的时候没defualt，所以要花括号导入
import {request} from './request'
import mock from '@/mock'

// 请求mock路径/detail中的数据
export function getDetaildata(id) {
    return request({
        url: '/detail',
        // 默认为get
        // method:'get',
        data: {
            id: id
        },

    })
}



