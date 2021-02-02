<!-- Created by xj on 2021-02-02. 马拉车算法 找最长回文字符串 -->
<template>
  <div class="manacher" flex="dir:top">
    <div flex-box="1">
      <el-input type="textarea" v-model="content"></el-input>
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
  name: 'manacher',
  components: { bottomBtn },
  data () {
    return {
      content: '',
      btnList: [
        {
          type: 'findlongPlaStr',
          name: '获取数据'
        }
      ],
      resData: {}
    }
  },
  methods: {
    bottomBtnClick (type) {
      switch (type) {
        case 'findlongPlaStr':
          this.resData = this.longestPalindrome()
          console.log('this.resData :>> ', this.resData)
          break

        default:
          break
      }
    },
    longestPalindrome () {
      let str = '$#' // 预处理字符串
      let mid = 0 // 当前回文字符串中心
      let right = 0 // 当前最右边界
      let maxLen = 0 // 最长回文字符串length
      let maxLenMid = 0 // 最长回文字符串中心
      let itemLen = [] // 存储各回文字符串长度
      let longStr = '' // 原字符串中最长字符串

      // 预处理字符串
      for (let j = 0; j < this.content.length; j++) {
        str += this.content[j] + '#'
      }

      // 遍历字符串每个字符
      for (let i = 0; i < str.length; i++) {
        // 判断是否超出最右边界，判断字符的最小回文
        itemLen[i] = i < right ? Math.min(itemLen[2 * mid - i], right - i) : 1

        // 判断字符回文长度
        while (
          str[i + itemLen[i]] &&
          str[i - itemLen[i]] &&
          str[i + itemLen[i]] === str[i - itemLen[i]]
        ) {
          itemLen[i]++
        }
        // 判断是否需要更新最右边界和回文中心
        if (right < i + itemLen[i]) {
          right = i + itemLen[i]
          mid = i
        }
        // 更新最长回文位置和长度
        if (itemLen[i] > maxLen) {
          maxLen = itemLen[i]
          maxLenMid = i
        }
      }
      // 还原字符串
      longStr = str
        .substring(maxLenMid - maxLen + 1, maxLenMid + maxLen)
        .replace(/#/g, '')
      return {
        str,
        mid,
        right,
        maxLen,
        maxLenMid,
        itemLen,
        longStr
      }
    }
  }
}
</script>

<style lang="less" scoped>
.manacher{
  height: 100%;
}
</style>
