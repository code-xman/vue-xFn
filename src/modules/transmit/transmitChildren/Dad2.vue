<template>
  <div class="DadTwo">
    <el-form class="form" :model="valObj" flex="main:justify">
      <template v-for="(item, index) in list">
        <el-form-item
          class="item"
          :key="index"
          :label="item.label"
          flex="main:left box:first"
        >
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
  name: 'DadTwo',
  props: {
    valueObj: {
      type: Object,
      default: () => {}
    },
    list: {
      type: Array,
      default: () => []
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
