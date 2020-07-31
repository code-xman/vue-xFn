<template>
  <div class="">
    <div>
      <el-form ref="form" :model="formData" label-width="200px">
        <el-form-item
          v-for="(item, index) in sonData"
          :key="index"
          :label="
            item.date +
              '日(打卡' +
              item.attendance.length / 5 +
              '次,时间是' +
              item.times +
              ')'
          "
        >
          <el-radio-group v-model="formData[item.date]">
            <el-radio
              v-for="(option, key) in radioList"
              :key="key"
              :label="option.type"
              >{{ option.name }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="" flex="main:right">
      <el-button type="primary" @click="sendData">确 定</el-button>
      <el-button @click="closeFn">取 消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseType',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      sonData: [],
      radioList: [
        {
          type: 'lack',
          name: '缺卡'
        },
        {
          type: 'earlyGo',
          name: '提前下班'
        },
        {
          type: 'repeat',
          name: '多次打卡'
        },
        {
          type: 'todayAllNight',
          name: '当天加班超过24点'
        },
        {
          type: 'todayRest',
          name: '当天调休'
        },
        {
          type: 'predayAllNight',
          name: '前一天打卡后被迫加班过24点'
        }
      ],
      dialogVisible: true,
      formData: this.getFormData()
    }
  },
  methods: {
    getFormData () {
      let formData = {}
      this.data.map(item => {
        formData[item.date] = ''
      })
      return formData
    },
    closeFn () {
      this.$emit('closeFn')
    },
    sendData () {
      this.$emit('closeFn')
    }
  },
  mounted () {
    this.sonData = JSON.parse(JSON.stringify(this.data))
    this.sonData.map(item => {
      item.times = item.attendance
        .replace(/(.{5})/g, '$1/')
        .substring(0, item.attendance.length)
      return item
    })
    console.log(this.sonData)
  }
}
</script>

<style scoped></style>
