import request from './request.js'

export function postCart(data) {
    return request({
        url: 'product/cart',
        method: 'post',
        data: {
            shop: data
        }
    })
}