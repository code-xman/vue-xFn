<template>
  <!--
    v-bind="$attrs" 接收父组件传入的属性并进行绑定
    v-on="$listeners" 使触发的事件在父级内可监听
   -->
  <el-input
    class="v-input"
    placeholder="请输入"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-input>
</template>

<script>
export default {
  name: 'v-input',
  // inheritAttrs: false 传入数据不会覆盖本组件原有的属性，并获取到父组件传入的同名属性
  inheritAttrs: false,
  data () {
    return {}
  }
}
</script>

<style scoped></style>
