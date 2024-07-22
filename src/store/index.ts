import { createStore } from 'vuex'
import orders from './modules/orders';
import products from './modules/products';

export default createStore({
  modules: {
    orders,
    products
  }
})
