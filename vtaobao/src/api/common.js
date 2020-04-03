import Cookie from 'js-cookie'

const TokenKey = 'Access-Token';

export function getToken() {
    return Cookie.get(TokenKey);
}

export function setToken(val) {
    Cookie.set(TokenKey, val);
}

export function removeToken() {
    Cookie.remove(TokenKey);
}