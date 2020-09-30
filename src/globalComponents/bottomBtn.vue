<template>
  <div class="bottomBtn" flex="main:right">
    <el-button
      v-for="(item, index) in btnList"
      :key="index"
      v-bind="item.options"
      @click="btnClick(item.type)"
    >
      {{ item.name }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'bottomBtn',
  props: {
    btnList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    btnClick (type) {
      this.$emit('bottomBtnClick', type)
    }
  }
}
</script>

<style scoped>
.bottomBtn {
  margin-top: 10px;
  border-top: 2px solid #ebeef5;
  padding-top: 10px;
}
</style>
