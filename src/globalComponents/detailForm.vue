<template>
  <div class="detailForm">
    <el-form
      ref="form"
      class="form"
      :rules="rules"
      :model="valObj"
      :label-width="labelWidth"
      flex="main:justify"
    >
      <template v-for="(item, index) in list">
        <!-- el-form-item prop需绑定对应字段 否则form验证无效 -->
        <el-form-item
          class="item"
          :key="index"
          :prop="item.name"
          :label="item.label"
        >
          <!--
            tag 基础组件名
            options 用v-bind绑定传入基础组件
            @input 接收子组件传来的值，存入valObj,然后emit修改valueObj
           -->
          <component
            :is="item.tag"
            :clearable="true"
            v-bind="item.options"
            :value="valObj[item.name]"
            @input="val => valChange(val, item.name)"
          ></component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'detailForm',
  props: {
    valueObj: {
      type: Object,
      default: () => {}
    },
    list: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  watch: {
    valueObj: {
      handler () {
        this.valObj = this.$utils.copy(this.valueObj)
      }
    }
  },
  data () {
    return {
      valObj: this.$utils.copy(this.valueObj)
    }
  },
  methods: {
    valChange (val, name) {
      this.valObj[name] = val
      this.$emit('update:valueObj', this.valObj)
    }
  }
}
</script>

<style lang="less" scoped>
// .detailForm {
//   border: 1px solid #ebeef5;
// }
.form {
  margin: 20px;
  flex-wrap: wrap;
}
.item {
  width: 45%;
  padding: 0 20px;
}

/deep/ .el-select--small,
/deep/ .el-date-editor {
  width: 100%;
}
</style>
