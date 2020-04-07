import { postCart } from '@/api/cart'

const cart = {
    state: {
        shops: []
    },
    getters: {
        shopsSum: state => {
            return state.shops.length;
        }
    },
    mutations: {
        joinCart(state, shop) {
            state.shops.push(shop)
        }
    },
    actions: {
        requestJoinCart({ commit }, shop) {
            postCart(shop).then(res => {
                console.log(res.data);
                commit('joinCart', res.data)
            });
        }
    }
}

export default cart