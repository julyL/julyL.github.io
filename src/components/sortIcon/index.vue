<!-- 排序组件 -->
<template>
  <span class="c-sortable">
    <span class="c-sortable__up" :class="sortType ? '' : 'active'"></span>
    <span class="c-sortable__down" :class="sortType ? 'active' : ''"></span>
  </span>
</template>

<script>
export default {
  props: {
    // true： 递减
    sortType: Boolean
  }
};
</script>

<style lang="scss">
.c-sortable {
  display: inline-block;
}
.c-sortable__up {
  width: 0;
  height: 0;
  border-width: 0 4px 4px;
  border-style: solid;
  border-color: transparent transparent #bfbfbf;
  &.active {
    border-color: transparent transparent #000;
  }
  display: block;
  margin: 0 auto 2px;
}
.c-sortable__down {
  display: block;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-width: 4px 4px 0;
  border-style: solid;
  border-color: #bfbfbf transparent transparent;
  &.active {
    border-color: #000 transparent transparent;
  }
}
</style>
