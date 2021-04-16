<!-- Created by xj on 2021-04-15. echartsOne -->
<template>
  <div class="container" flex="dir:top">
    <div id="main1" class="box" flex-box="1"></div>
    <bottomBtn
      flex-box="0"
      :btnList="btnList"
      @bottomBtnClick="bottomBtnClick"
    ></bottomBtn>
  </div>
</template>
<script>
import bottomBtn from '@/globalComponents/bottomBtn'

// echarts 按需引入
let echarts = require('echarts/lib/echarts')

// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  name: 'echartsOne',
  components: {bottomBtn},
  data () {
    return {
      btnList: [
        {
          type: 'draw',
          name: '图表'
        }
      ]
    }
  },
  methods: {
    initChart () {
      let myChart1 = echarts.init(document.getElementById('main1'))
      myChart1.setOption(this.setOption('局部按需引入'))
    },
    setOption (title) {
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      return option
    },
    bottomBtnClick () {
      this.initChart()
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  position: relative;
  margin: 0;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
.box {
  border: 2px solid #000;
}
</style>
