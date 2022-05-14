<template>
  <div class="bus-item" @click="$emit('popup')" >
    <div class="bus-tag" :class="{active: store.isActive}">
      {{ index+1 }}
    </div>
    {{ store['醫事機構名稱'] }} ({{ store['快篩試劑截至目前結餘存貨數量']}}組)
  </div>
</template>

<script>
export default {
  name: 'Covid19Item',
  props: ['store', 'index'],
};
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';
.bus-item {
  display: flex;
  .bus-tag {
    background-color: $mainColor;
    color: $color_white;
    width: 40px;
    margin-right: 1rem;
    padding: 0 0.5rem;
    &.active {
      background-color: $color_tomato;
    }
  }
}
</style>
