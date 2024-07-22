<template>
  <div class="d-flex">
    <div class="orders-list" :class="{'orders-list-min': selectedOrder && selectedId}">
      <div v-for="order in orders" :key="order.id">
        <order-item @onDelete="onDelete" :order="order" @selectCard="selectCard" :selectedId="selectedId"/>
      </div>
    </div>
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
        <list-select-products @onDeleteProduct="onDeleteProduct" :products="selectedOrder" />
      </div>
    </div>
    <b-modal
        size="lg"
        hide-footer
        v-model="isShow"
        id="modal-delete"
        title-class="modal-title"
        :title="$t('deleteConfirm')"
    >
      <div v-if="selectProduct.orderId" class="d-flex align-items-center">
        <div
            class="status-indicator mr-3"
            :class="{
                  'bg-danger': selectProduct.status === 'в ремонте'
                }"
            style="width: 10px; height: 10px; border-radius: 50%;"
        ></div>
        <div>
          <img class="product-img" src="/product.png" alt="product" width="50">
        </div>
        <div class="product-name-wrap">
          <div class="product-name">{{ selectProduct.name }}</div>
          <div class="product-text">{{ selectProduct.serial_number }}</div>
        </div>
      </div>
      <div class="footer-modal d-flex justify-content-end align-items-center">
        <div class="btn-cansel" @click="hideModal">{{ $t('cansel') }}</div>
        <div class="btn-delete"><img class="delete-btn" src="/delete-red.png" alt="delete" width="15" height="15">{{ $t('delete') }}</div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps } from 'vue';
import { useStore } from 'vuex';
import ListSelectProducts from '@/components/ListSelectProducts.vue';
import OrderItem from '@/components/OrderItem.vue';
import {Order, Product} from "@/types";

defineProps<{
  selectedOrder: Order[];
  orders: Order[];
}>();

const selectedId = ref<string>('');
const selectedOrderName = ref<string>('');

const store = useStore();

function selectCard({ id, name }: { id: number; name: string }) {
  selectedOrderName.value = name;
  selectedId.value = id.toString();
  store.dispatch('products/fetchProductsByIdOrder', id);
}

function clearSelected() {
  selectedId.value = '';
}

let isShow = ref(false);

let selectProduct = ref<object>({});

const onDelete = (id: number) => {
  isShow.value = true;
  console.log(id)
};

const onDeleteProduct = (product: Product) => {
  isShow.value = true;
  console.log(product)
  selectProduct.value = {...product};
}

function hideModal() {
  isShow.value = false;
}

watch(selectedId, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});
</script>

<style scoped>
.btn-cansel {
  cursor: pointer;
}
.footer-modal {
  background: #87BF48;
  color: white;
  height: 80px;
  font-size: 11px;
  font-weight: 500;
  margin: 20px -16px -16px;
}
.btn-delete {
  background: white;
  color: #E8364F;
  align-items: center;
  display: flex;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 0 40px 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.delete-btn {
  margin-right: 6px;
}
.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  min-width: 10px;
  background: #87BF48;
  margin-right: 5px;
}
.product-img {
  height: fit-content;
  margin: 0 60px 0 20px;
}
.product-name {
  text-decoration: underline;
  font-size: 14px;
}
.product-text {
  font-size: 12px;
  font-weight: 300;
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
</style>
