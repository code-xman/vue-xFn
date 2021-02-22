<!-- Created by xj on 2021-02-03. cavans -->
<template>
  <div class="cavansOne" flex="dir:top">
    <div class="cavansOne-box" flex-box="1">
      <canvas id="myCavans" ref="myCavans" width="900" height="500"></canvas>
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
  name: 'cavansOne',
  components: { bottomBtn },
  data () {
    return {
      btnList: [
        {
          type: 'draw',
          name: '绘制'
        }
      ]
    }
  },
  methods: {
    bottomBtnClick (type) {
      switch (type) {
        case 'draw':
          this.drawFn()
          break

        default:
          break
      }
    },
    drawFn () {
      const canvas = this.$refs.myCavans
      // 获取canvas渲染上下文
      const ctx = canvas.getContext('2d')
      // 设置线条样式
      ctx.strokeStyle = 'rgba(81, 160, 255,1)'
      ctx.lineWidth = 3
      // 创建路径
      ctx.beginPath()
      // 移动笔触到(100,100)坐标处
      ctx.moveTo(100, 100)
      // 把线连接到(700,700)这个位置
      ctx.lineTo(700, 400)
      // 把刚刚的路径绘制出来
      ctx.stroke()
    }
  }
}
</script>

<style lang="less" scoped>
.cavansOne {
  height: 100%;
}
.cavansOne-box {
  overflow-y: auto;
}
</style>
