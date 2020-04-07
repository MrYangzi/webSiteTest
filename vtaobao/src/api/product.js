import request from './request.js'

export function getProductList() {
    return request({
        url: 'product/productList',
        method: 'get'
    })
}

export function getShopDetail(data) {
    return request({
        url: 'product/productDetail',
        method: 'get',
        data
    })
}