<!-- Created by xj on 2021-01-25. VDOM更新原理 查找保留数据 -->
<template>
  <div class="findStayOne" flex="dir:top">
    <div flex-box="1">
      <p>原数组值</p>
      <el-input
        v-model="oldArrStr"
      ></el-input>
      <p>新数组值</p>
      <el-input
        v-model="newArrStr"
      ></el-input>
      <p>按序最多保留数据/最长公共子序列</p>
      <el-input
        disabled
        v-model="stayDataStr"
      ></el-input>
    </div>
    <div class="btnBox" flex="main:right" flex-box="0">
      <el-button class="btn" @click="findStayData">查找保留数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'findStayOne',
  data () {
    return {
      oldArrStr: '1,2,3,A,5,b,7',
      oldArr: [],
      newArrStr: '',
      newArr: [],
      stayData: []
    }
  },
  computed: {
    stayDataStr () {
      return this.stayData.join(',')
    }
  },
  methods: {
    findStayData () {
      this.oldArr = this.oldArrStr.split(',')
      this.newArr = this.newArrStr.split(',')
      this.stayData = []

      this.handleData()
    },
    handleData () {
      // 获取 新数组 各项在原数组的index， 新元素则为 -1
      let indexArr = this.newArr.map(item => {
        return this.oldArr.indexOf(item)
      })
      console.log('indexArr :>> ', indexArr)

      // 仅需length
      let arrlen = []
      // 二维数据
      let arr2D = []
      // 最 大/右 数据的index
      let rightItemIndex = 0

      // 边界判断
      if (indexArr.length < 1) {
        return
      }

      if (indexArr.length === 1) {
        this.stayData = this.newArr
        return
      }

      indexArr.forEach((item, index) => {
        // 原数组未有值 直接return
        if (item < 0) {
          return
        }
        // data未有值 / item大于data数组的最大值 ；直接push进数组
        if (!arrlen.length || arrlen[rightItemIndex] < item) {
          arrlen.push(item)
          rightItemIndex = arrlen.length - 1
        } else {
          // 替换数据
          // 找到替换数据的index data数据中的第一个大于item的index
          let replaceIndex = arrlen.findIndex(rItem => rItem > item)
          arrlen[replaceIndex] = item
        }
      })
      // console.log('arrlen :>> ', arrlen)

      this.newArr.forEach((nItem, nIndex) => {
        arr2D[nIndex] = []
        this.oldArr.forEach((oItem, oIndex) => {
          if (nIndex === 0) {
            if (nItem === oItem) {
              arr2D[nIndex][oIndex] = 1
            } else {
              arr2D[nIndex][oIndex] = oIndex - 1 >= 0 ? arr2D[nIndex][oIndex - 1] : 0
            }
            return
          }
          if (oIndex === 0) {
            if (nItem === oItem) {
              arr2D[nIndex][oIndex] = 1
            } else {
              arr2D[nIndex][oIndex] = arr2D[nIndex - 1][oIndex]
            }
            return
          }

          let addNum = 0
          if (nItem === oItem) {
            addNum = 1
          }
          arr2D[nIndex][oIndex] =
          arr2D[nIndex][oIndex - 1] > arr2D[nIndex - 1][oIndex]
            ? arr2D[nIndex][oIndex - 1] + addNum
            : arr2D[nIndex - 1][oIndex] + addNum
        })
      })
      console.log('arr2D :>> ', arr2D)
      let i = arr2D.length - 1
      let j = arr2D[0].length - 1
      while (i >= 0 && j >= 0) {
        if (this.newArr[i] === this.oldArr[j]) {
          this.stayData.push(this.newArr[i])
          i -= 1
          j -= 1
          continue
        }

        if (i === 0) {
          j -= 1
          continue
        }
        if (j === 0) {
          i -= 1
          continue
        }

        if (arr2D[i][j - 1] >= arr2D[i - 1][j]) {
          j -= 1
        } else {
          i -= 1
        }
      }
      console.log('this.stayData :>> ', this.stayData.reverse())
    }
  }
}
</script>

<style lang="less" scoped>
.findStayOne{
  height: 100%;
}
.btnBox{
  margin-top: 10px;
  border-top: 2px solid #ebeef5;
  .btn{
    margin-top: 10px;
  }
}
</style>
