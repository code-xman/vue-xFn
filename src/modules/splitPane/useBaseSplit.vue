<!-- Created by xj on 2021-04-26. useBaseSplit -->
<template>
  <div class='useBaseSplit'>
    <baseSplitPane @splitPaneWidth="splitPaneWidth">
      <template v-slot:leftContent>
        <detailForm
          ref="detailForm"
          :itemWidth="itemWidth"
          :list="list"
          :rules="rules"
          :valueObj.sync="valueObj"
        ></detailForm>
      </template>
      <template v-slot:rightContent></template>
    </baseSplitPane>
  </div>
</template>
<script>
import baseSplitPane from './baseSplitPane'
import detailForm from '@/globalComponents/detailForm'
export default {
  name: 'useBaseSplit',
  components: { baseSplitPane, detailForm },
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请填写姓名' }],
        gender: [{ required: true, message: '请填写性别' }]
      },
      itemWidth: '45%',
      list: this.getList(),
      valueObj: this.getValueObj(),
      // 拖动组件 各部分width
      splitPaneWidthObj: {
        leftWidth: 0,
        rightWidth: 0
      }
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
      // 返回验证结果和当前页面数据
      return { res, data: this.valueObj }
    },
    splitPaneWidth (data) {
      this.splitPaneWidthObj.leftWidth = data.leftWidth
      this.splitPaneWidthObj.rightWidth = data.rightWidth
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
    },
    // 监听拖动组件width 太小则将formDetail组件设置为每行一个item
    'splitPaneWidthObj.leftWidth': {
      handler (val) {
        // console.log('val :>> ', val)
        if (val < 880) {
          this.itemWidth = '100%'
        } else {
          this.itemWidth = '45%'
        }
      },
      immediate: true
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.useBaseSplit{
  height: 100%;
}
</style>
