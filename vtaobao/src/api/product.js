import request from './request.js'

export function getProductList() {
    return request({
        url: 'product/productList',
        method: 'get'
    })
}