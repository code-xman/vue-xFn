<!-- Created by xj on 2021-02-02. 多位计算器 -->
<template>
  <div class="calculator" flex="dir:top">
    <div flex-box="1">
      <el-input v-model="numOne"></el-input>
      <el-button
        v-for="(item, index) in typeBtns"
        circle
        :key="index"
        :type="item.type"
        :icon="item.icon"
        @click="typeBtnsClick(item.typeName)"
      ></el-button>
      <el-input v-model="numTwo"></el-input>
    </div>
    <bottomBtn
      flex-box="0"
      :btnList="btnList"
      @bottomBtnClick="bottomBtnClick"
    ></bottomBtn>
  </div>
</template>

<script>
import bottomBtn from '@/globalComponents/bottomBtn'
export default {
  name: 'calculator',
  components: { bottomBtn },
  data () {
    return {
      numOne: '',
      numTwo: '',
      typeName: '',
      decCarryNum: 0,
      typeBtns: [
        {
          typeName: 'add',
          type: 'primary',
          icon: 'el-icon-plus'
        },
        {
          typeName: 'reduce',
          type: 'success',
          icon: 'el-icon-minus'
        },
        {
          typeName: 'multiplication',
          type: 'warning',
          icon: 'el-icon-close'
        },
        {
          typeName: '',
          type: 'danger',
          icon: 'el-icon-check'
        }
      ],
      btnList: [
        {
          type: 'equal',
          name: '等于'
        }
      ]
    }
  },
  methods: {
    typeBtnsClick (type) {
      this.typeName = type
    },
    bottomBtnClick (type) {
      switch (this.typeName) {
        case 'add':
          this.add()
          break
        case 'reduce':
          // reduce();
          break
        case 'multiplication':
          // multiplication();
          break
        case 'division':
          // division();
          break

        default:
          break
      }
    },
    add () {
      let dec
      let int
      let numOneArr = this.numOne.split('.')
      let numTwoArr = this.numTwo.split('.')
      this.decCarryNum = 0

      if (numOneArr.length === 1 && numTwoArr.length === 1) {
        dec = 0
      } else if (numOneArr.length === 2 && numTwoArr.length === 2) {
        dec = this.handleAdd(numOneArr[1], numTwoArr[1], 'dec')
      } else {
        dec = numOneArr[1] ? numOneArr[1] : numTwoArr[1]
      }
      int = this.handleAdd(numOneArr[0], numTwoArr[0], 'int') || 0

      console.log(`${int}.${dec}`)
      // res.text(`${int}.${dec}`)
    },
    handleAdd (numOne, numTwo, type) {
      if (type === 'dec') {
        let decLength =
          numOne.length > numTwo.length ? numOne.length : numTwo.length
        numOne = numOne.padEnd(decLength, '0')
        numTwo = numTwo.padEnd(decLength, '0')
      }

      // 预留新增最高位
      let firstNum = 0
      // 进位数
      let carryNum = 0
      // 结果数
      let resNum
      // 结果数数组
      let resArr = []
      // 切割两数字为数组，每一位为一项，颠倒顺序方便计算，后续会颠倒回来
      let numOneArr = numOne.split('').reverse()
      let numTwoArr = numTwo.split('').reverse()
      // 判断拥有最高位位数的数字
      let numArr =
        numOneArr.length > numTwoArr.length
          ? numOneArr.slice()
          : numTwoArr.slice()

      numArr.forEach((item, index) => {
        // 判断每位数是否需相加计算，否则需加进位数
        if (index === 0 && type === 'int') {
          numArr[index] =
            Number(numOneArr[index]) +
            Number(numTwoArr[index]) +
            this.decCarryNum
        } else if (numOneArr[index] && numTwoArr[index]) {
          numArr[index] =
            Number(numOneArr[index]) + Number(numTwoArr[index]) + carryNum
        } else {
          numArr[index] = Number(numArr[index]) + carryNum
        }
        // 结果每位数的计算
        resArr[index] = numArr[index] % 10
        // 清空进位数
        carryNum = 0
        // 通过位数进行判断，处理进位问题
        if (index === numArr.length - 1 && numArr[index] >= 10) {
          firstNum = parseInt(numArr[index] / 10)
        } else if (numArr[index] >= 10) {
          carryNum = parseInt(numArr[index] / 10)
        }
      })
      // 位数颠倒回来
      resArr = resArr.reverse()
      // console.log('resArr :>> ', resArr);
      // 处理整数是否增加最高位
      if (type === 'int') {
        resNum = firstNum || ''
      } else if (type === 'dec') {
        resNum = ''
        this.decCarryNum = firstNum
      }
      // 数字拼接
      resArr.forEach(item => {
        resNum += item.toString()
      })
      // console.log(resNum);
      // this.decCarryNum = 0
      return resNum
    }
  }
}
</script>

<style lang="less" scoped>
.calculator {
  height: 100%;
}
</style>
