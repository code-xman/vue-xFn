<!-- Created by xj on 2021-04-22. promiseOne -->
<template>
  <div class='promiseOne' flex="dir:top">
    <p class="blueBG-text" flex-box="0">Promise是JS异步编程中的重要概念，异步抽象处理对象，是目前比较流行Javascript异步编程解决方案之一</p>
    <div flex-box="1">
      <p>{{num}}是{{numType}}</p>
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
  name: 'promiseOne',
  components: {bottomBtn},
  data () {
    return {
      num: 0,
      numType: '偶数',
      btnList: [
        {
          name: 'TODO A',
          type: 'todoA',
          options: {
            type: 'primary'
          }
        },
        {
          name: 'TODO B',
          type: 'todoB',
          options: {
            type: 'primary'
          }
        }
      ]
    }
  },
  methods: {
    bottomBtnClick (type) {
      switch (type) {
        case 'todoA': {
          this.todoA()
          break
        }
        case 'todoB': {
          this.todoB()
          break
        }

        default:
          break
      }
    },
    successFn () {
      console.log('success')
    },
    errorFn () {
      console.log('error')
    },
    todoA () {
      this.num++
      const aPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('1秒后')
        }, 1000)
        // 3的倍数判断
        if (this.num % 3 === 0) {
          setTimeout(() => {
            // 这里的resolve几乎不会触发，因为setTimeout进入下一次宏任务，所以此处执行时间永远在 奇偶判断 之后；
            // 而Promise的状态被(resolve)改变后就不会再改变了
            resolve('3的倍数')
          }, 1000)
        }
        // 奇偶判断
        if (this.num % 2 === 0) {
          resolve('偶数')
        } else {
          resolve('奇数')
        }
      })
      console.log('1')
      aPromise.then(res => {
        // 此处res参数获取Promise成功后返回的数据
        console.log('3')
        this.numType = res
        console.log(res)
      }).then(res => {
        // 此处res为undefined
        console.log('4')
        console.log('后续then的res是', res)
      })
      console.log('2')
    },
    todoB () {
      const bPromise = new Promise(resolve => {
        setTimeout(() => {
          console.log('1s后')
          resolve({
            state: true,
            data: {
              a: 111,
              b: '222'
            }
          })
        }, 1000)
      })
      bPromise.then(res => {
        if (res.state) {
          console.log('res.data :>> ', res.data)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.promiseOne{
  height: 100%;
}
.blueBG-text {
  margin: 0;
  padding: 8px 16px;
  background-color: #e2f0ff;
  color: #409eff;
  font-size: 14px;
}
</style>
