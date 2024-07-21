<template>
  <div class="inventory-layout container-fluid d-flex">
    <div class="orders-content w-100">
      <div class="filters d-flex justify-content-between mb-3 pt-4">
        <span class="orders-title">Продукты / 25</span>
      </div>
      <div class="d-flex">
        <div class="orders-list" :class="{'orders-list-min': selectedOrder && selectedId}">
          <div v-for="order in orders" :key="order.id">
            <div
                class="d-flex align-items-center justify-content-between order-item mb-3 py-2 px-3"
            >
              <div class="order-name font-weight-bold" v-if="!selectedId">{{ order.name }}</div>
              <div @click="selectCard(order.id)" class="order-products d-flex align-items-center">
                <img src="/list.png" alt="icon" width="30" height="30">
                <div class="order-products-text d-flex flex-column">
                  <span>123</span>
                  <span>Продукта</span>
                </div>
              </div>
              <div>{{ order.date }}</div>
              <div v-if="!selectedId" class="d-flex flex-column order-price">
                <div>{{ order.price_usd }}</div>
                <div>{{ order.price_uah }}</div>
              </div>
              <img class="delete-btn" v-if="!selectedId" src="/delete.png" alt="delete" width="15" height="15">
              <img v-if="order.id === selectedId" src="/arrow.png" alt="right" width="15" height="15">
            </div>
          </div>
        </div>
        <div class="products-list" v-if="selectedOrder && selectedId">
          <div class="product-items pt-3">
            <div class="close-btn d-flex align-items-center justify-content-center" @click="clearSelected">
              <img src="/close.png" alt="close" width="15" height="15">
            </div>
            <h3 class="products-title mb-4 mx-4">Длинное предлинное длиннючее длиннючее название прихода</h3>
            <div class="add-products d-flex align-items-center mx-4">
              <div class="add-products-btn d-flex align-items-center justify-content-center">+</div>
              <span>Добавить продукт</span>
            </div>
            <list-select-products :products="selectedOrder" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, watch} from 'vue';
import {useStore} from 'vuex';
import ListSelectProducts from '@/components/ListSelectProducts';

const store = useStore()

const orders = computed(() => store.getters['orders/allOrders'])
const selectedOrder = computed(() => store.getters['products/selectedProducts'])
const selectedId = ref('')


function selectCard(id) {
  store.dispatch('products/fetchProductsByIdOrder', id)
  selectedId.value = id
}

function clearSelected () {
  selectedId.value = ''
}

watch(selectedId, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})

store.dispatch('orders/fetchOrders')
</script>

<style scoped>
.delete-btn {
  cursor: pointer;
}
.add-products {
  font-size: 14px;
  color: #42b983;
  margin-bottom: 15px;
  cursor: pointer;
}
.add-products-btn {
  background: #42b983;
  color: white;
  border-radius: 50px;
  height: 18px;
  width: 18px;
  margin-right: 8px;
}
.products-title {
  font-size: 18px;
}

.orders-list-min {
  width: 40% !important;
  min-width: 300px;
  margin-right: 30px;
}

.orders-list {
  width: 100%;
}

.products-list {
  margin-right: 15px;
  width: 100%;
}

.close-btn {
  background: #ffff;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  position: absolute;
  right: -15px;
  top: -17px;
  cursor: pointer;
}

.product-items {
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
}

.inventory-layout {
  height: 100vh;
}

.orders-content {
  overflow-y: auto;
}

.filters {
  align-items: center;
}

.order-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.orders-title {
  font-size: 20px;
  margin-right: 15px;
  margin-bottom: 3px;
}

.order-name {
  text-decoration: underline;
  margin-right: 15px;
}

.order-products {
  margin-right: 15px;
  cursor: pointer;
}

.order-price {
  margin-left: 15px;
  cursor: pointer;
}

.order-products-text {
  margin-left: 15px;
}
</style>
