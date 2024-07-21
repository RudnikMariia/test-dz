const state = () => ({
    orders: []
});

const getters = {
    allOrders: (state) => state.orders
};

const mutations = {
    setOrders(state, orders) {
        state.orders = orders;
    }
};

const actions = {
    fetchOrders({ commit }) {
        const orders = [
            {
                    "name": "Длинное предлинное длиннючее название прихода",
                    "id": 33,
                    "products_count": 22,
                    "date": "06 / Апр / 2017",
                    "price_usd": "2 500 $",
                    "price_uah": "250 000.50 UАН",
                    "status": "свободен"
            },
            {
                    "name": "Длинное предлинное длиннючее название прихода",
                    "products_count": 33,
                    "id": 22,
                    "date": "06 / Апр / 2017",
                    "price_usd": "2 500 $",
                    "price_uah": "250 000.50 UАН",
                    "status": "в ремонте"
            },
            {
                    "name": "Длинное предлинное длиннючее название прихода",
                    "products_count": 55,
                    "id": 11,
                    "date": "06 / Апр / 2018",
                    "price_usd": "2 500 $",
                    "price_uah": "250 000.50 UАН",
                    "status": "свободен"
            }
        ];
        commit('setOrders', orders);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
