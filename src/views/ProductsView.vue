<template>
  <div class="inventory-layout container-fluid">
    <b-row>
      <b-col class="main-content pt-4">
        <div class="filters d-flex mb-3">
          <span class="product-title">Продукты / 25</span>
          <span class="product-type d-flex align-items-center">
            <label for="type-select">Тип:</label>
            <b-form-select id="type-select" class="d-inline-block product-select">
              <option>Moni I</option>
            </b-form-select>
          </span>
          <span class="d-flex align-items-center">
            <label for="specification-select">Спецификация:</label>
            <b-form-select id="specification-select" class="d-inline-block product-select">
              <option>Moni I</option>
              <!-- Add more options as needed -->
            </b-form-select>
          </span>
        </div>
        <list-products @onDelete="onDelete" :products="products"/>
      </b-col>
    </b-row>
  </div>
  <b-modal size="lg" hide-footer v-model="isShow" id="modal-delete">
    <div v-if="selectProduct" class="d-flex align-items-center">
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
      <div>ОТМЕНИТЬ</div>
      <div class="btn-delete"><img class="delete-btn" src="/delete-white.png" alt="delete" width="15" height="15"> УДАЛИТЬ</div>
    </div>
  </b-modal>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import ListProducts from "@/components/ListProducts";
const store = useStore()

store.dispatch('products/fetchProducts')

const products = computed( () => store.getters['products/allProducts'] )

let isShow = ref(false);

let selectProduct = null;

const onDelete = (product) => {
  isShow.value = true;
  selectProduct = {...product};
  console.log(selectProduct)
};


</script>

<style scoped>
.footer-modal {
  background: #87BF48;
  color: white;
  height: 80px;
  font-size: 12px;
}
.btn-delete {
  background: white;
  color: #dc3545;
  border-radius: 50px;
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
  margin: 0 60px 0 5px;
}
.product-name {
  text-decoration: underline;
}
.product-text {
  font-size: 13px;
  font-weight: 300;
}
.inventory-layout {
  height: 100vh;
}

.main-content {
  overflow-y: auto;
}

.filters {
  align-items: center;
}

.product-title {
  font-size: 20px;
  margin-right: 30px;
  margin-bottom: 3px;
  white-space: nowrap;
}
.product-type {
  margin-right: 30px;
}
label {
  font-size: 12px;
  font-weight: 300;
  margin-right: 15px;
}
.product-select {
  height: 30px;
  width: 200px;
  border-radius: 0;
  font-size: 12px;
}
</style>
