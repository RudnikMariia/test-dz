<template>
  <div
        class="d-flex align-items-center justify-content-between order-item mb-3 py-2 px-3"
    >
    <transition name="fade">
    <div class="order-name font-weight-bold" v-show="!selectedId">{{ order.name }}</div>
    </transition>
      <div @click="selectCard(order.id)" class="order-products d-flex align-items-center">
        <img src="/list.png" alt="icon" width="30" height="30">
        <div class="order-products-text d-flex flex-column">
          <span>{{ order.products_count }}</span>
          <span>{{$t('product')}}</span>
        </div>
      </div>
      <div class="text-nowrap">{{ order.date }}</div>
    <transition name="fade">
    <div v-if="!selectedId" class="d-flex flex-column order-price text-nowrap">
      <div>{{ order.price_usd }}</div>
      <div>{{ order.price_uah }}</div>
    </div>
    </transition>
      <transition name="fade">
        <img class="delete-btn" v-show="!selectedId" src="/delete.png" alt="delete" width="15" height="15">
      </transition>
      <transition name="fade">
        <img v-show="order.id === selectedId" src="/arrow.png" alt="right" width="15" height="15">
      </transition>

    </div>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue'

const props = defineProps({
  selectedId: {
    type: String
  },
  order: {
    type: Object
  }
})

const emit = defineEmits(['onDelete'])

function selectCard(id) {
  emit('selectCard', {id, name: props.order.name})
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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