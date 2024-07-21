const state = () => ({
    products: [],
    selectedProducts: []
});

const getters = {
    allProducts: (state) => state.products,
    selectedProducts: (state) => state.selectedProducts,
};

const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setSelectedProducts(state, products) {
        state.selectedProducts = products;
    },
};

const actions = {
    fetchProducts({ commit }) {
        const products = [
            {
                "name": "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                "serial_number": "SN-12.3456789",
                "status": "свободен",
                "status_indicator": "green",
                "orderId": 12,
                "start_date": "06/04/2017",
                "end_date": "06/08/2025",
                "condition": "новый",
                "price": "2 500 $",
                "price_uah": "250 000. 50 UАН",
                "group_name": "Длинное предлинное длиннючее название группы",
                "arrival_name": "Длинное предлинное длиннючее название прихода",
                "arrival_date_max" : "06/12",
                "arrival_date": "06/12/2017",
                "delete_icon": "present",
                "author": null
            },
            {
                "name": "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                "serial_number": "SN-12.3456789",
                "status": "в ремонте",
                "status_indicator": "black",
                "start_date": "06/04/2017",
                "orderId": 12,
                "end_date": "06/08/2025",
                "condition": "новый",
                "price": "2 500 $",
                "price_uah": "250 000. 50 UАН",
                "group_name": "Длинное предлинное длиннючее название группы",
                "arrival_name": "Длинное предлинное длиннючее название прихода",
                "arrival_date_max" : "06/12",
                "arrival_date": "06/12/2017",
                "delete_icon": "present",
                "author": "Ім'я Автора"
            },
            {
                "name": "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                "serial_number": "SN-12.3456789",
                "status": "в ремонте",
                "status_indicator": "black",
                "orderId": 12,
                "start_date": "06/04/2017",
                "end_date": "06/08/2025",
                "condition": "новый",
                "price": "2 500 $",
                "price_uah": "250 000. 50 UАН",
                "group_name": "Длинное предлинное длиннючее название группы",
                "arrival_name": "Длинное предлинное длиннючее название прихода",
                "arrival_date_max" : "06/12",
                "arrival_date": "06/Сен/2017",
                "delete_icon": "present",
                "author": "Христорождественский Александр"
            },
        ];
        commit('setProducts', products);
    },
    fetchProductsByIdOrder({ commit }, idOrder) {
        // example
        const products = [
            {
                "name": "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                "serial_number": "SN-12.3456789",
                "status": "свободен",
                "status_indicator": "green",
                "start_date": "06/04/2017",
                "end_date": "06/08/2025",
                "condition": "новый",
                "price": "2 500 $",
                "orderId": idOrder,
                "price_uah": "250 000. 50 UАН",
                "group_name": "Длинное предлинное длиннючее название группы",
                "arrival_name": "Длинное предлинное длиннючее название прихода",
                "arrival_date": "06/12/2017",
                "delete_icon": "present",
                "author": null
            },
            {
                "name": "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
                "serial_number": "SN-12.3456789",
                "status": "в ремонте",
                "status_indicator": "black",
                "start_date": "06/04/2017",
                "end_date": "06/08/2025",
                "condition": "новый",
                "price": "2 500 $",
                "orderId": idOrder,
                "price_uah": "250 000. 50 UАН",
                "group_name": "Длинное предлинное длиннючее название группы",
                "arrival_name": "Длинное предлинное длиннючее название прихода",
                "arrival_date": "06/12/2017",
                "delete_icon": "present",
                "author": "Ім'я Автора"
            },
        ];
        commit('setSelectedProducts', products);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
