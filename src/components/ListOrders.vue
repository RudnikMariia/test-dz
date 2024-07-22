<template>
  <div class="d-flex">
    <div class="orders-list" :class="{'orders-list-min': selectedOrder && selectedId}">
      <div v-for="order in orders" :key="order.id">
        <order-item :order="order" @selectCard="selectCard" :selectedId="selectedId"/>
      </div>
    </div>
    <transition name="fade">
      <div class="products-list" v-if="selectedOrder && selectedId">
        <div class="product-items pt-3">
          <div class="close-btn d-flex align-items-center justify-content-center" @click="clearSelected">
            <img src="/close.png" alt="close" width="15" height="15">
          </div>
          <h3 class="products-title mb-4 mx-4">{{ selectedOrderName }}</h3>
          <div class="add-products d-flex align-items-center mx-4">
            <div class="add-products-btn d-flex align-items-center justify-content-center">+</div>
            <span>{{ $t('addProduct') }}</span>
          </div>
          <list-select-products :products="selectedOrder" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {defineProps, ref, watch} from 'vue'
import {useStore} from 'vuex';
import ListSelectProducts from '@/components/ListSelectProducts';
import OrderItem from '@/components/OrderItem';

defineProps({
  selectedOrder: {
    type: Array
  },
  orders: {
    type: Array
  }
})

const selectedId = ref('')
const selectedOrderName = ref('')

watch(selectedId, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})

const store = useStore()

function selectCard({id, name}) {
  selectedOrderName.value = name
  selectedId.value = id;
  store.dispatch('products/fetchProductsByIdOrder', id)
}

function clearSelected () {
  selectedId.value = ''
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 1s ease-out;
}

.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
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
  transition: width 4s ease;
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
</style>