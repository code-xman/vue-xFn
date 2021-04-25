<!-- Created by xj on 2021-04-23. splitPane -->
<template>
  <div class="splitPane" ref="splitPane" flex>
    <div
      class="pane paneLeft"
      flex-box="0"
      :style="`width: ${paneLeftWidth}%`"
    ></div>
    <div class="pane paneLine" flex-box="0" @mousedown="handleMouseDown"></div>
    <div class="pane paneRight" flex-box="1" ></div>
  </div>
</template>
<script>
export default {
  name: 'splitPane',
  data () {
    return {
      splitPaneObj: {},
      paneLeftWidth: 50,
      minPaneLeftWidth: 10,
      maxPaneLeftWidth: 90
    }
  },
  methods: {
    handleMouseDown () {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemove (e) {
      const leftWidth = e.pageX - this.splitPaneObj.left
      let newPaneLeftWidth = leftWidth / this.splitPaneObj.width * 100
      if (this.minPaneLeftWidth > newPaneLeftWidth) {
        newPaneLeftWidth = this.minPaneLeftWidth
      } else if (this.maxPaneLeftWidth < newPaneLeftWidth) {
        newPaneLeftWidth = this.maxPaneLeftWidth
      }
      this.paneLeftWidth = newPaneLeftWidth
    },
    handleMouseup () {
      document.removeEventListener('mousemove', this.handleMousemove)
      console.log('拖动结束')
    }
  },
  mounted () {
    console.log('object :>> ', this.$refs.splitPane.getBoundingClientRect())
    this.splitPaneObj = this.$refs.splitPane.getBoundingClientRect()
  }
}
</script>
<style lang="less" scoped>
.splitPane {
  height: 100%;
  .pane {
    height: 100%;
  }
  .paneLeft {
    width: 50%;
    background: #ffc347;
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
