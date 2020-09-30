<template>
  <div class="v-date-picker">
    <el-date-picker v-bind="$attrs" v-on="$listeners"> </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'v-date-picker',
  inheritAttrs: false,
  data () {
    return {}
  }
}
</script>

<style scoped></style>
