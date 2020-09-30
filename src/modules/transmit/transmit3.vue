<template>
  <div class="transmitThree" flex="dir:top">
    <div class="detail-form-box" flex-box="1">
      <detailForm
        :list="list"
        :rules="rules"
        :valueObj.sync="valueObj"
      ></detailForm>
    </div>
    <bottomBtn
      flex-box="0"
      :btnList="btnList"
      @bottomBtnClick="bottomBtnClick"
    ></bottomBtn>
  </div>
</template>

<script>
import detailForm from '@/globalComponents/detailForm'
import bottomBtn from '@/globalComponents/bottomBtn'

export default {
  name: 'transmitThree',
  components: { detailForm, bottomBtn },
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请填写姓名' }],
        gender: [{ required: true, message: '请填写性别' }]
      },
      list: this.getList(),
      valueObj: this.getValueObj(),
      btnList: [
        {
          name: '获取数据',
          type: 'getData',
          options: {
            type: 'primary'
          }
        },
        {
          name: '重置',
          type: 'rest'
        }
      ]
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
          name: 'date',
          label: '日期',
          tag: 'v-date-picker',
          options: {
            type: 'date',
            placeholder: '选择日期',
            'value-format': 'timestamp'
          }
        },
        {
          name: 'daterange',
          label: '一段日期',
          tag: 'v-date-picker',
          options: {
            type: 'daterange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            'value-format': 'timestamp'
          }
        },
        {
          name: 'datetime',
          label: '精确时间',
          tag: 'v-date-picker',
          options: {
            type: 'datetime',
            placeholder: '选择时间',
            'value-format': 'timestamp'
          }
        },
        {
          name: 'datetimerange',
          label: '一段时间',
          tag: 'v-date-picker',
          options: {
            type: 'datetimerange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            'value-format': 'timestamp'
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
    bottomBtnClick (type) {
      switch (type) {
        case 'getData':
          console.log('this.valueObj :>> ', this.valueObj)
          break

        default:
          console.log('type :>> ', type)
          break
      }
    }
  }
}
</script>

<style scoped>
.transmitThree {
  height: 100%;
}
.detail-form-box {
  overflow: auto;
  border: 1px solid #ebeef5;
}
</style>
