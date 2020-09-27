<template>
  <div class="transmitThree" flex="dir:top">
    <detailForm
      flex-box="1"
      :list="list"
      :rules="rules"
      :valueObj.sync="valueObj"
    ></detailForm>
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
      console.log('type :>> ', type)
    }
  }
}
</script>

<style scoped>
.transmitThree {
  height: 100%;
}
</style>
