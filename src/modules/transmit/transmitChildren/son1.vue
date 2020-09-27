<!-- Created by xj on 2020-09-21. 子1 -->
<template>
  <div class="SonOne">
    我是子组件content:{{ content }}
    <el-input
      v-model="showValue"
      placeholder="请输入内容"
      @input="handleInput"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'SonOne',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped></style>
