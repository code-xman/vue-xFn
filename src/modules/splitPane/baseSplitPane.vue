<!-- Created by xj on 2021-04-26. baseSplitPane -->
<template>
  <div class='baseSplitPane'  ref="baseSplitPane" flex>
    <!-- 左侧部分及拖动线默认固定值，右侧flex-box="1"动态变化 -->
    <div
      ref="paneLeft"
      class="pane paneLeft"
      flex-box="0"
      :style="`width: ${paneLeftWidth}%`"
    >
      <slot name="leftContent"></slot>
    </div>
    <!-- 给拖动线绑定鼠标按下事件mousedown -->
    <div class="pane paneLine" flex-box="0" @mousedown="handleMouseDown"></div>
    <div ref="paneRight" class="pane paneRight" flex-box="1" >
      <slot name="rightContent"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'baseSplitPane',
  props: {
    // 左侧初始化值
    initPaneLeftWidth: {
      type: Number,
      default: 50
    },
    // 左侧最小值
    minPaneLeftWidth: {
      type: Number,
      default: 10
    },
    // 左侧最大值
    maxPaneLeftWidth: {
      type: Number,
      default: 90
    }
  },
  data () {
    return {
      splitPaneObj: {},
      paneLeftWidth: 10
    }
  },
  methods: {
    handleMouseDown () {
      // 鼠标按下后 进行监听 鼠标移动 和 鼠标松开 事件
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemove (e) {
      // 左侧模块宽度计算 鼠标距左侧距离e.pageX 减去 splitPane左侧距离
      const leftWidth = e.pageX - this.splitPaneObj.left
      // 左侧模块宽度百分比
      let newPaneLeftWidth = leftWidth / this.splitPaneObj.width * 100
      // 判断是否超出限制
      if (this.minPaneLeftWidth > newPaneLeftWidth) {
        newPaneLeftWidth = this.minPaneLeftWidth
      } else if (this.maxPaneLeftWidth < newPaneLeftWidth) {
        newPaneLeftWidth = this.maxPaneLeftWidth
      }
      this.paneLeftWidth = newPaneLeftWidth
    },
    handleMouseup () {
      // 松开鼠标后 移除监听事件
      document.removeEventListener('mousemove', this.handleMousemove)
      // 拖动结束后 把左右板块 width emit出去；提供给父级做相关的逻辑
      this.$emit('splitPaneWidth', {
        leftWidth: this.$refs.paneLeft.offsetWidth,
        rightWidth: this.$refs.paneRight.offsetWidth
      })
      console.log('拖动结束')
    }
  },
  mounted () {
    this.paneLeftWidth = this.initPaneLeftWidth
    // 获取 baseSplitPane 的位置信息
    this.splitPaneObj = this.$refs.baseSplitPane.getBoundingClientRect()
  }
}
</script>
<style lang="less" scoped>
.baseSplitPane{
  height: 100%;
  .pane {
    height: 100%;
  }
  .paneLeft {
    width: 50%;
    // background: #ffc347;
  }
  .paneLine {
    width: 10px;
    background: #d7e492;
    cursor: col-resize; // 拖动的鼠标样式
    user-select: none; // 禁止选中文字
  }
  .paneRight {
    background: #4898e7;
  }
}
</style>
