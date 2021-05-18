<!-- Created by xj on 2021-05-14. turnAround -->
<template>
  <div class="turnAround" flex>
    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
  </div>
</template>
<script>
export default {
  name: 'turnAround',
  setup () {}
}
</script>
<style lang="less" scoped>
.turnAround {
  img {
    width: 100px;
    height: 100px;
  }
  img:hover {
    transform: rotate(666turn);
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
    transition-delay: 1s;
  }
}
</style>
