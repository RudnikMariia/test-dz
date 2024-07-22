<template>
  <div class="inventory-layout container-fluid d-flex">
    <div class="orders-content w-100">
      <div class="filters d-flex justify-content-between mb-3 pt-4">
        <span class="orders-title">{{$t('orders')}} / 25</span>
      </div>
      <list-orders :selectedOrder="selectedOrder" :orders="orders"/>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import ListOrders from "@/components/ListOrders";

const store = useStore()

const orders = computed(() => store.getters['orders/allOrders'])
const selectedOrder = computed(() => store.getters['products/selectedProducts'])

store.dispatch('orders/fetchOrders')
</script>

<style scoped>
.inventory-layout {
  height: 100vh;
}

.orders-content {
  overflow-y: auto;
}

.filters {
  align-items: center;
}

.orders-title {
  font-size: 20px;
  margin-right: 15px;
  margin-bottom: 3px;
}
</style>
