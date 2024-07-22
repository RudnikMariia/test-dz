<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item py-2">
      <div class="d-flex align-items-center justify-content-between product-item-wrap">
        <div
            class="status-indicator mr-3"
            :class="{
            'bg-danger': product.status === 'в ремонте'
          }"
        ></div>
        <img class="product-img" src="/product.png" alt="product" width="50">
        <div class="product-name font-weight-bold">{{ product.name }}</div>
        <div
            class="product-status mx-2"
            :class="{
            'product-status-danger': product.status === 'в ремонте'
          }"
        >
          {{ product.status }}
        </div>
        <img @click="onDeleteProduct(product)" class="delete-btn" src="/delete.png" alt="delete" width="15" height="15">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { Product } from "@/types";
import {defineEmits} from "vue/dist/vue";

defineProps<{
  products: Product[];
}>();

const emit = defineEmits({});

function onDeleteProduct(product: Product) {
  emit('onDeleteProduct', product);
}
</script>

<style scoped>
.delete-btn {
  cursor: pointer;
}

.product-name {
  margin-left: 5px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  min-width: 10px;
  background: #42b983;
  margin-right: 5px;
}

.product-item {
  border-top: 1px solid #dddddd;
  font-size: 14px;
}

.product-img {
  height: fit-content;
}

.product-status {
  text-transform: capitalize;
  color: #42b983;
  white-space: nowrap;
}

.product-status-danger {
  color: #dc3545;
}

.product-item-wrap {
  margin: 0 15px 0 20px;
}
</style>
