<template>
  <div class="c-memberType">
    <img
      :src="
        isAdult
          ? '../../assets/images/icon-children@2x.png'
          : '../../assets/images/icon-women@2x.png'
      "
      alt=""
      class="c-memberType__icon"
    />
    <div class="c-memberType__text">
      {{ isAdult ? '成年学员' : '少儿学员' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAdult: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss"></style>
