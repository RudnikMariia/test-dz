<template>
  <div class="header bg-light py-3 d-flex justify-content-between align-items-center">
    <div>
      <div class="logo font-weight-bold">INVENTORY</div>
    </div>
    <div class="text-right">
      <div class="datetime">
        <div>Вторник</div>
        <div class="d-flex align-items-center">06 Апр, 2017 <img class="time-img" src="/time.png" alt="time"> 17:20</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
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
