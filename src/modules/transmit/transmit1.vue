<!-- Created by xj on 2020-09-21. 组件传值 -->
<template>
  <div class="transmitOne">
    我是爷组件
    <DadOne></DadOne>
  </div>
</template>

<script>
import DadOne from './transmitChildren/Dad1'
export default {
  name: 'transmitOne',
  components: {
    DadOne
  }
}
</script>

<style></style>
