<template>
  <div class="header bg-light py-3 d-flex justify-content-between align-items-center">
    <div>
      <div class="logo font-weight-bold">INVENTORY</div>
    </div>
    <div class="text-right">
      <div class="datetime">
        <div class="weekday">{{ currentDay }}</div>
        <div class="d-flex align-items-center">
          {{ currentDate }} <img class="time-img" src="/time.png" alt="time"> {{ currentTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from 'vue';

const currentTime = ref<string>('');
const currentDate = ref<string>('');
const currentDay = ref<string>('');

const updateDateTime = () => {
  const now = new Date();
  currentDay.value = now.toLocaleDateString('uk-UA', {weekday: 'long'});
  currentDate.value = now.toLocaleDateString('uk-UA', {day: '2-digit', month: 'short', year: 'numeric'});
  currentTime.value = now.toLocaleTimeString('uk-UA', {hour: '2-digit', minute: '2-digit'});
};

onMounted(() => {
  updateDateTime();
  const interval = setInterval(updateDateTime, 1000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
.weekday {
  text-transform: capitalize;
}
.header {
  padding-left: 140px;
  padding-right: 100px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative;
}

.text-right {
  font-size: 12px;
}

.time-img {
  width: 12px;
  height: 12px;
  margin-right: 5px;
  margin-left: 10px;
}
</style>
