<!-- Created by xj on 2020-09-25. select -->
<template>
  <el-select
    class="v-select"
    placeholder="请选择"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-option
      v-for="(item, index) in optionsList"
      :key="index"
      :value="item.value"
      :label="item.label"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'v-select',
  inheritAttrs: false,
  props: {
    optionsList: {
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
