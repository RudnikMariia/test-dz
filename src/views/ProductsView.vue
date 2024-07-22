<template>
  <div class="inventory-layout container-fluid">
    <b-row>
      <b-col class="main-content pt-4">
        <div class="filters d-flex mb-3">
          <span class="product-title">{{ $t('products') }} / 25</span>
          <span class="product-type d-flex align-items-center">
            <label for="type-select">{{ $t('type') }}:</label>
            <b-form-select id="type-select" class="d-inline-block product-select">
              <option>Moni I</option>
            </b-form-select>
          </span>
          <span class="d-flex align-items-center">
            <label for="specification-select">{{ $t('specification') }}:</label>
            <b-form-select id="specification-select" class="d-inline-block product-select">
              <option>Moni I</option>
            </b-form-select>
          </span>
        </div>
        <div class="product-list">
          <b-card v-for="product in products" :key="product.id" class="product-item mb-3 fit-content">
            <product-item :product="product" @onDelete="onDelete"></product-item>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-modal
        size="lg"
        hide-footer
        v-model="isShow"
        id="modal-delete"
        title-class="modal-title"
        :title="$t('deleteConfirm')"
    >
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
        <div class="btn-cansel" @click="hideModal">{{ $t('cansel') }}</div>
        <div class="btn-delete"><img class="delete-btn" src="/delete-red.png" alt="delete" width="15" height="15">{{ $t('delete') }}</div>
      </div>
    </b-modal>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import ProductItem from "@/components/ProductItem";
const store = useStore()

store.dispatch('products/fetchProducts')

const products = computed( () => store.getters['products/allProducts'] )

let isShow = ref(false);

let selectProduct = null;

const onDelete = (product) => {
  isShow.value = true;
  selectProduct = {...product};
};

function hideModal() {
  isShow.value = false;
}

</script>

<style scoped>
.fit-content {
  min-width: fit-content;
  width: 100%;
}
.product-list {
  font-size: 14px;
  width: fit-content;
}
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
