<!-- Created by xj on 2020-09-21. 组件传值 -->
<template>
  <div class="transmitOne">
    我是爷组件content:{{ content }}
    <DadOne :content.sync="content"></DadOne>
  </div>
</template>

<script>
import DadOne from './transmitChildren/Dad1'
export default {
  name: 'transmitOne',
  components: {
    DadOne
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style></style>
