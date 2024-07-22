<template>
  <div
      class="d-flex align-items-center justify-content-between order-item mb-3 py-2 px-3"
  >
    <div class="order-name font-weight-bold" v-show="!selectedId">{{ order.name }}</div>
    <div @click="selectCard(order.id)" class="order-products d-flex align-items-center">
      <img src="/list.png" alt="icon" width="30" height="30">
      <div class="order-products-text d-flex flex-column">
        <span>{{ order.products_count }}</span>
        <span>{{ $t('product') }}</span>
      </div>
    </div>
    <div class="text-nowrap">{{ order.date }}</div>
    <div v-if="!selectedId" class="d-flex flex-column order-price text-nowrap">
      <div>{{ order.price_usd }}</div>
      <div>{{ order.price_uah }}</div>
    </div>
    <img class="delete-btn" @click="onDelete(order.id)" v-show="!selectedId" src="/delete.png" alt="delete" width="15" height="15">
    <img v-show="order.id == selectedId" src="/arrow.png" alt="right" width="15" height="15">
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { Order } from "@/types";

const props = defineProps<{
  selectedId: string;
  order: Order;
}>();

const emit = defineEmits({});

function selectCard(id: number) {
  emit('selectCard', { id, name: props.order.name });
}
function onDelete(id: number) {
  emit('onDelete', id)
}
</script>

<style scoped>
.delete-btn {
  cursor: pointer;
}

.order-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.order-name {
  text-decoration: underline;
  margin-right: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
