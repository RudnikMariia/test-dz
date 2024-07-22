import { Module } from 'vuex';
import { StateOrders as State, Order } from '@/types';

const state: () => State = () => ({
    orders: []
});

const getters = {
    allOrders: (state: State): Order[] => state.orders
};

const mutations = {
    setOrders(state: State, orders: Order[]) {
        state.orders = orders;
    }
};

const actions = {
    fetchOrders({ commit }: { commit: Function }) {
        const orders: Order[] = [
            {
                name: "Длинное предлинное длиннючее название прихода",
                id: 33,
                products_count: 22,
                date: "06 / Апр / 2017",
                price_usd: "2 500 $",
                price_uah: "250 000.50 UАН",
                status: "свободен"
            },
            {
                name: "Длинное предлинное длиннючее название прихода",
                products_count: 33,
                id: 22,
                date: "06 / Апр / 2017",
                price_usd: "2 500 $",
                price_uah: "250 000.50 UАН",
                status: "в ремонте"
            },
            {
                name: "Длинное предлинное длиннючее название прихода",
                products_count: 55,
                id: 11,
                date: "06 / Апр / 2018",
                price_usd: "2 500 $",
                price_uah: "250 000.50 UАН",
                status: "свободен"
            }
        ];
        commit('setOrders', orders);
    }
};

const ordersModule: Module<State, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default ordersModule;