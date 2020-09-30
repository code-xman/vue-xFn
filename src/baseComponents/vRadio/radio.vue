<template>
  <el-radio-group class="v-radio" size="small" v-bind="$attrs" v-on="$listeners">
    <el-radio-button
      v-for="(item, index) in radioList"
      :key="index"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: 'v-radio',
  props: {
    radioList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>
