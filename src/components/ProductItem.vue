<template>
  <b-card-body class="d-flex align-items-center text-nowrap fit-content">
    <div
        class="status-indicator mr-3"
        :class="{
                  'bg-danger': product.status === 'в ремонте'
                }"
        style="width: 10px; height: 10px; border-radius: 50%;"
    ></div>
    <div>
      <img class="product-img" src="/product.png" alt="product" width="50">
    </div>
    <div class="product-name-wrap">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-text">{{ product.serial_number }}</div>
    </div>
    <div class="mx-4 product-status-wrap" :class="{'color-green': product.status === 'свободен'}">
      {{ product.status }}
    </div>
    <div class="product-date-wrap">
      <p>с {{ product.start_date }}</p>
      <p>по {{ product.end_date }}</p>
    </div>
    <div class="product-condition mx-4">{{ product.condition }}</div>
    <div class="product-price-wrap">
      <p class="product-text-min">{{ product.price }}</p>
      <p class="product-price-grn">{{ product.price_uah }}</p>
    </div>
    <div class="product-text-big mx-4">{{ product.group_name }}</div>
    <div class="product-employee">{{ product.author ? product.author : '-' }}</div>
    <div class="product-text-big mx-4">{{ product.arrival_name }}</div>
    <div class="product-date-wrap">
      <p class="product-text-min">{{ product.arrival_date_max }}</p>
      <p>{{ product.arrival_date }}</p>
    </div>
    <div @click="onDelete(product)">
      <img class="delete-btn" src="/delete.png" alt="delete" width="15" height="15">
    </div>
  </b-card-body>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  product: {
    type: Object
  }
})
const emit = defineEmits(['onDelete'])

function onDelete(product) {
  emit('onDelete', product)
}
</script>

<style scoped>
.product-price-wrap {
  width: 120px;
}
.product-date-wrap {
  width: 100px;
}
.product-status-wrap {
  width: 70px;
}
.product-name-wrap {
  width: 370px;
}
.product-employee {
  width: 190px;
  font-size: 15px;
  white-space: normal;
}
p {
  margin: 0;
}
.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  min-width: 10px;
  background: #42b983;
  margin-right: 5px;
}
.product-img {
  height: fit-content;
  margin: 0 10px 0 5px;
}
.product-name {
  text-decoration: underline;
}
.product-text {
  font-size: 13px;
  font-weight: 300;
}
.color-green {
  color: #42b983;
}
.product-text-min {
  font-size: 10px;
  font-weight: 300;
}
.product-text-big {
  font-size: 15px;
  text-decoration: underline;
  width: 250px;
  white-space: normal;
}
.product-condition {
  width: 120px;
}
.delete-btn {
  cursor: pointer;
  margin-left: 15px;
}
.card-body {
  padding: 0;
}
</style>