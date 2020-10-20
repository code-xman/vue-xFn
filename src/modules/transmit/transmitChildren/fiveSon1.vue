<template>
  <div class="fiveSon1">
    <detailForm
      ref="detailForm"
      :list="list"
      :rules="rules"
      :valueObj.sync="valueObj"
    ></detailForm>
  </div>
</template>

<script>
import detailForm from '@/globalComponents/detailForm'
export default {
  components: { detailForm },
  props: {
    tabDataName: {
      type: String,
      required: true
    }
  },
  // inject 获取父组件provide里的数据；使用方法同data(eg. this.tabData)
  inject: ['tabData'],
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请填写姓名' }],
        gender: [{ required: true, message: '请填写性别' }]
      },
      list: this.getList(),
      valueObj: this.getValueObj()
    }
  },
  methods: {
    getList () {
      return [
        {
          name: 'name',
          label: '姓名',
          tag: 'v-input'
        },
        {
          name: 'gender',
          label: '性别',
          tag: 'v-select',
          options: {
            optionsList: this.$store.state.assetsData.GENDER_TYPE
          }
        },
        {
          name: 'birthday',
          label: '出生日期',
          tag: 'v-date-picker',
          options: {
            type: 'date',
            placeholder: '选择日期',
            'value-format': 'timestamp'
          }
        },
        {
          name: 'genderContent',
          label: '性别描述',
          tag: 'v-input',
          options: {
            disabled: true
          }
        },
        {
          name: 'vocation',
          label: '职业',
          tag: 'v-radio',
          options: {
            radioList: this.$store.state.assetsData.VOCATION
          }
        }
      ]
    },
    getValueObj () {
      let obj = {}
      this.getList().forEach(item => {
        obj[item.name] = ''
      })
      return obj
    },
    async validate () {
      const res = await this.$refs.detailForm.validate()
      if (res) {
        this.tabData[this.tabDataName] = this.$utils.copy(this.valueObj)
      }
      return res
    }
  },
  watch: {
    'valueObj.gender': {
      handler (val) {
        if (val === 'male') {
          this.valueObj.genderContent = '哦，上帝，这是个帅气的男孩！'
        } else if (val === 'female') {
          this.valueObj.genderContent = '哦，上帝，这是个漂亮的女孩！'
        } else {
          this.valueObj.genderContent = ''
        }
      }
    }
  }
}
</script>

<style scoped></style>
