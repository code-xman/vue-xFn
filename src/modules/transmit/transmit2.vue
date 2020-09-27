<template>
  <div class="transmitTwo">
    <DadTwo :valueObj.sync="valueObj" :list="list"></DadTwo>
    <div class="btnBox" flex="main:right">
      <el-button @click="getData">获取数据</el-button>
    </div>
  </div>
</template>

<script>
import DadTwo from './transmitChildren/Dad2'

export default {
  name: 'transmitTwo',
  components: { DadTwo },
  data () {
    return {
      valueObj: {
        inputVal: '',
        selectVal: ''
      },
      list: [
        {
          label: '输入框',
          tag: 'v-input',
          name: 'inputVal'
        },
        {
          label: '下拉框',
          tag: 'v-select',
          name: 'selectVal',
          options: {
            optionsList: [
              { label: '选项一', value: 'item1' },
              { label: '选项二', value: 'item2' },
              { label: '选项三', value: 'item3' }
            ]
          }
        }
      ]
    }
  },
  methods: {
    getData () {
      console.log(this.valueObj)
    }
  }
}
</script>

<style scoped>
.btnBox {
  margin-right: 40px;
}
</style>
