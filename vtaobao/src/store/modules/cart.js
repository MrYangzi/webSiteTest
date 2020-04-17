import { postCart } from '@/api/cart'

const cart = {
    state: {
        shops: JSON.parse(sessionStorage.getItem('cart-shops')) || []
    },
    getters: {
        shopsSum: state => {
            return state.shops.length;
        }
    },
    mutations: {
        joinCart(state, shop) {
            state.shops.push(shop);
            sessionStorage.setItem('cart-shops', JSON.stringify(state.shops));
        }
    },
    actions: {
        requestJoinCart({ commit }, shop) {
            postCart(shop).then(res => {
                commit('joinCart', res.data)
            });
        }
    }
}

export default cart