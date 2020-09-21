<!-- Created by xj on 2020-09-21. 父1 -->
<template>
  <div class="DadOne">
    我是父组件
    <SonOne></SonOne>
  </div>
</template>

<script>
import SonOne from './Son1'
export default {
  name: 'DadOne',
  components: { SonOne }
}
</script>

<style></style>
