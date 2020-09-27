<!-- Created by xj on 2020-09-21. 父1 -->
<template>
  <div class="DadOne">
    我是父组件content:{{ content }}
    <SonOne :content="content" @input="val => sendContent(val)"></SonOne>
  </div>
</template>

<script>
import SonOne from './Son1'
export default {
  name: 'DadOne',
  components: { SonOne },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendContent (val) {
      this.$emit('update:content', val)
    }
  }
}
</script>

<style></style>
