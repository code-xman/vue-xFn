<template>
  <div class="detailForm">
    <el-form
      ref="form"
      class="form"
      :rules="rules"
      :model="valObj"
      flex="main:justify"
    >
      <template v-for="(item, index) in list">
        <!-- el-form-item prop需绑定对应字段 否则form验证无效 -->
        <el-form-item
          class="item"
          :key="index"
          :prop="item.name"
          :label="item.label"
          flex="main:left box:first"
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

<style scoped>
.form {
  margin: 20px;
}
.item {
  width: 50%;
  padding: 0 20px;
}
</style>
