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

<style scoped></style>
