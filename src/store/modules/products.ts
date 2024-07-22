import { Module } from 'vuex';
import { StateProducts as State, Product } from '@/types';

const state: () => State = () => ({
    products: [],
    selectedProducts: []
});

const getters = {
    allProducts: (state: State): Product[] => state.products,
    selectedProducts: (state: State): Product[] => state.selectedProducts,
};

const mutations = {
    setProducts(state: State, products: Product[]) {
        state.products = products;
    },
    setSelectedProducts(state: State, products: Product[]) {
        state.selectedProducts = products;
    },
};

const actions = {
    fetchProducts({ commit }: { commit: Function }) {
        const products: Product[] = [
            {
                name: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                serial_number: "SN-12.3456789",
                status: "свободен",
                status_indicator: "green",
                orderId: 12,
                start_date: "06/04/2017",
                end_date: "06/08/2025",
                condition: "новый",
                price: "2 500 $",
                price_uah: "250 000. 50 UАН",
                group_name: "Длинное предлинное длиннючее название группы",
                arrival_name: "Длинное предлинное длиннючее название прихода",
                arrival_date_max: "06/12",
                arrival_date: "06/12/2017",
                delete_icon: "present",
                author: null
            },
            {
                name: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                serial_number: "SN-12.3456789",
                status: "в ремонте",
                status_indicator: "black",
                start_date: "06/04/2017",
                end_date: "06/08/2025",
                condition: "новый",
                price: "2 500 $",
                price_uah: "250 000. 50 UАН",
                orderId: 12,
                group_name: "Длинное предлинное длиннючее название группы",
                arrival_name: "Длинное предлинное длиннючее название прихода",
                arrival_date_max: "06/12",
                arrival_date: "06/12/2017",
                delete_icon: "present",
                author: "Ім'я Автора"
            },
            {
                name: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                serial_number: "SN-12.3456789",
                status: "в ремонте",
                status_indicator: "black",
                orderId: 12,
                start_date: "06/04/2017",
                end_date: "06/08/2025",
                condition: "новый",
                price: "2 500 $",
                price_uah: "250 000. 50 UАН",
                group_name: "Длинное предлинное длиннючее название группы",
                arrival_name: "Длинное предлинное длиннючее название прихода",
                arrival_date_max: "06/12",
                arrival_date: "06/Сен/2017",
                delete_icon: "present",
                author: "Христорождественский Александр"
            },
        ];
        commit('setProducts', products);
    },
    fetchProductsByIdOrder({ commit }: { commit: Function }, idOrder: number) {
        const products: Product[] = [
            {
                name: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                serial_number: "SN-12.3456789",
                status: "свободен",
                status_indicator: "green",
                start_date: "06/04/2017",
                end_date: "06/08/2025",
                condition: "новый",
                price: "2 500 $",
                orderId: idOrder,
                price_uah: "250 000. 50 UАН",
                group_name: "Длинное предлинное длиннючее название группы",
                arrival_name: "Длинное предлинное длиннючее название прихода",
                arrival_date: "06/12/2017",
                delete_icon: "present",
                author: null
            },
            {
                name: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                serial_number: "SN-12.3456789",
                status: "в ремонте",
                status_indicator: "black",
                start_date: "06/04/2017",
                end_date: "06/08/2025",
                condition: "новый",
                price: "2 500 $",
                orderId: idOrder,
                price_uah: "250 000. 50 UАН",
                group_name: "Длинное предлинное длиннючее название группы",
                arrival_name: "Длинное предлинное длиннючее название прихода",
                arrival_date: "06/12/2017",
                delete_icon: "present",
                author: "Ім'я Автора"
            },
        ];
        commit('setSelectedProducts', products);
    },
};

const productsModule: Module<State, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default productsModule;