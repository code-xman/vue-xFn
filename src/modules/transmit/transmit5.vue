<template>
  <div class="transmitFive" flex="dir:top">
    <p class="color-text" flex-box="0">多层组件传值,provide/inject解决方案</p>
    <div class="tabs-box" flex-box="1">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(tabItem, index) in tabList"
          :key="index"
          :label="tabItem.label"
          :name="tabItem.name"
        >
          <fiveSonOne :ref="tabItem.ref" :tabDataName="tabItem.ref" />
        </el-tab-pane>
      </el-tabs>
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
import fiveSonOne from './transmitChildren/fiveSon1'
export default {
  name: 'transmitFive',
  components: { bottomBtn, fiveSonOne },
  // provide 声明子组件可获取并使用的数据；
  // 但只有其是可监听的对象(eg.this.tabData)时才会动态响应，否则(eg.'aaa')不会。
  provide () {
    return {
      tabData: this.tabData
    }
  },
  data () {
    return {
      activeName: 'form-1',
      tabList: [
        {
          label: '表单1',
          name: 'form-1',
          ref: 'fiveSon1'
        },
        {
          label: '表单2',
          name: 'form-2',
          ref: 'fiveSon2'
        }
      ],
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
      ],
      // 是否存在提示
      hasWarning: false,
      // tab各表单数据
      tabData: {}
    }
  },
  methods: {
    bottomBtnClick (type) {
      switch (type) {
        case 'getData':
          this.hasWarning = false
          this.tabList.forEach(async (tabItem, index) => {
            const res = await this.$refs[tabItem.ref][0].validate()
            if (!res && !this.hasWarning) {
              this.hasWarning = true
              this.$utils.tipsWarning(`${tabItem.label}填写有误`)
              return false
            }
          })
          console.log('tabData :>> ', this.tabData)
          break

        default:
          console.log('type :>> ', type)
          break
      }
    }
  }
}
</script>

<style scoped>
.transmitFive {
  height: 100%;
}
/* .tabs-box {
  border: 1px solid #ebeef5;
} */

.color-text {
  margin: 0;
  padding: 8px 16px;
  background-color: #e2f0ff;
  color: #409eff;
  font-size: 14px;
}
</style>
