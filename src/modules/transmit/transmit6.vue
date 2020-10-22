<template>
  <div class="transmitSix" flex="dir:top">
    <p class="blueBG-text" flex-box="0">
      tab页在触发子组件验证时，子组件返回验证结果和数据，再由父组件判断是否进行下一步
    </p>
    <div class="tabs-box" flex-box="1">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(tabItem, index) in tabList"
          :key="index"
          :label="tabItem.label"
          :name="tabItem.name"
        >
          <sixSon :ref="tabItem.ref" :tabDataName="tabItem.ref" />
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
import sixSon from './transmitChildren/sixSon'
export default {
  name: 'transmitSix',
  components: { bottomBtn, sixSon },
  data () {
    return {
      activeName: 'form-1',
      tabList: [
        {
          label: '表单1',
          name: 'form-1',
          ref: 'sixSon1'
        },
        {
          label: '表单2',
          name: 'form-2',
          ref: 'sixSon2'
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
      tabData: {}
    }
  },
  methods: {
    bottomBtnClick (type) {
      switch (type) {
        case 'getData':
          this.hasWarning = false

          this.tabList.forEach(async (tabItem, index) => {
            // 接收验证结果和子组件数据
            const { res, data } = await this.$refs[tabItem.ref][0].validate()
            if (!res && !this.hasWarning) {
              this.hasWarning = true
              this.$utils.tipsWarning(`${tabItem.label}填写有误`)
              return false
            } else {
              console.log(`${tabItem.label}填写正确`)
              // 通过验证后进行赋值
              this.tabData[tabItem.ref] = data
            }
          })
          Promise.all(this.tabList).then(() => {
            // 这里奇奇怪怪的，console和devtools的内容经常不一样
            console.log('tabData :>> ', this.tabData)
            if (this.tabData.sixSon2) {
              console.log('sixSon2 :>> ', this.tabData.sixSon2)
            } else {
              console.log('没有sixSon2')
            }
          })
          break

        default:
          console.log('type :>> ', type)
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
.transmitSix {
  height: 100%;
}
/* .tabs-box {
  border: 1px solid #ebeef5;
} */
</style>
