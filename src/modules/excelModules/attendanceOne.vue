<template>
  <div class="attendanceOne">
    <div class="btnList">
      <el-button
        type="primary"
        v-for="(btn, index) in btnList"
        :key="index"
        @click="btnClick(btn.type)"
        >{{ btn.name }}</el-button
      >
      <input
        type="file"
        ref="imFile"
        style="display: none"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        @change="readFile(this)"
      />
    </div>
    <el-form
      :model="person"
      :inline="true"
      ref="personForm"
      label-width="100px"
    >
      <span class="person-info">员工信息</span>
      <el-form-item
        label="姓名"
        prop="name"
        :rules="[{ required: true, message: '姓名不能为空' }]"
      >
        <el-input type="age" v-model="person.name"></el-input>
      </el-form-item>
      <el-form-item
        label="工号"
        prop="num"
        :rules="[{ required: true, message: '工号不能为空' }]"
      >
        <el-input type="age" v-model="person.num"></el-input>
      </el-form-item>
    </el-form>
    <!-- 确认非正常工作日情况 -->
    <el-dialog
      title="请确定非正常工作日情况"
      :visible.sync="dialogVisible"
      width="60%"
    >
      <ChooseType :data="unnormalDay" @closeFn="closeFn"></ChooseType>
    </el-dialog>
  </div>
</template>

<script>
// 引入xlsx
import XLSX from 'xlsx'
import ChooseType from './chooseType'
export default {
  name: 'AttendanceOne',
  components: { ChooseType },
  data () {
    return {
      // 按钮
      btnList: [
        {
          name: '导入考勤',
          type: 'import'
        },
        {
          name: '导出餐补表格',
          type: 'food'
        },
        {
          name: '导出车补表格',
          type: 'taxi'
        }
      ],
      // 人员数据
      person: {
        name: '向杰',
        num: '72'
      },
      // excel数据
      jsonData: [],
      dateObj: [], // 日期
      weekObj: [], // 星期
      attendanceObj: [], // 考勤
      newArr: [], // 处理后的数据
      restDay: [], // 休息期
      workDay: [], // 工作期
      normalDay: [], // 正常工作期
      unnormalDay: [], // 非正常工作期
      foodDay: [], // 餐饮福利日
      taxiDay: [], // 打车福利日
      noWelfareDay: [], // 无福利日
      // 非正常工作日弹框
      dialogVisible: false
    }
  },
  methods: {
    // 导入文件
    importFile () {
      // 清空数据
      if (this.$refs.imFile.value) {
        this.$refs.imFile.value = ''
      }
      this.$refs.imFile.click()
    },
    // 读取本地excel文件
    readFile () {
      let _this = this
      let file = this.$refs.imFile.files[0]
      console.log(file)
      if (!file) {
        return
      }
      let reader = new FileReader()
      reader.onload = function (e) {
        let data = e.target.result
        let workbook = XLSX.read(data, { type: 'binary' })
        _this.jsonData = XLSX.utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        )
        _this.handleData()
      }
      reader.readAsBinaryString(file)
    },
    // 数据处理 得到newArr date--日期，week--星期， Attendance--考勤
    handleData () {
      this.dateObj = this.jsonData[2]
      this.weekObj = this.jsonData[3]
      let personIndex =
        this.jsonData.findIndex(item => item.__EMPTY_9 === this.person.name) + 1
      this.attendanceObj = this.jsonData[personIndex]
      let keyArr = Object.keys(this.dateObj)
      this.newArr = keyArr.map((key, index) => {
        let newItem = {}
        newItem.date = this.dateObj[key]
        newItem.week = this.weekObj[key]
        if (this.attendanceObj[key]) {
          newItem.attendance = this.attendanceObj[key]
        } else {
          newItem.attendance = ''
        }
        return newItem
      })
      // console.log(this.newArr)
      this.sortData()
    },
    // 数据分类
    sortData () {
      // 分 工/休
      this.newArr.forEach(item => {
        if (!item.attendance) {
          this.restDay.push(item)
        } else {
          item.lastHour = Number(item.attendance.slice(-5, -3))
          this.workDay.push(item)
        }
      })
      // 工作期分 正常、非正常
      this.workDay.forEach(item => {
        if (item.lastHour >= 18 && item.attendance.length === 10) {
          this.normalDay.push(item)
        } else {
          this.unnormalDay.push(item)
        }
      })
      // 正常工作期 算餐补、车补
      this.normalDay.forEach(item => {
        // 周一到周五 20：00 后下班餐补
        if (item.lastHour >= 20 && !['六', '日'].includes(item.week)) {
          this.foodDay.push(item)
        }
        // 22：00 后下班车补
        if (item.lastHour >= 22) {
          this.taxiDay.push(item)
        }
      })
      if (this.unnormalDay.length > 0) {
        this.dialogVisible = true
      }
      console.log({ '正常:': this.normalDay, '非正常:': this.unnormalDay })
      console.log({ '餐补:': this.foodDay, '车补:': this.taxiDay })
    },
    // 按钮功能
    async btnClick (type) {
      switch (type) {
        case 'import': // 导入考勤
          await this.$refs.personForm.validate(valid => {
            if (valid) {
              this.importFile()
            } else {
              return false
            }
          })
          break
        case 'food': // 导出餐补表格
          break
        case 'taxi': // 导出车补表格
          break
        default:
          break
      }
    },
    closeFn () {
      this.dialogVisible = false
    }
  },
  mounted () {}
}
</script>

<style scoped>
.attendanceOne {
  height: 100%;
}
.person-info {
  height: 34px;
  line-height: 34px;
  font-size: 16px;
}
</style>
