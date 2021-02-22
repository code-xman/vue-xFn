<!-- Created by xj on 2021-02-22. 时间翻牌 -->
<template>
  <div id="timeBox" class="cssTwo">
    <div class="box" v-for="(item, index) in time" :key="index">
      <div class="down" ref="down">
        <div class="numBox next num1" ref="next" data-text=""></div>
        <div class="numBox prev num0" ref="prev" data-text=""></div>
      </div>
      <em v-if="index % 2 === 1 && index !== 5" class="symbol">:</em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cssTwo',
  data () {
    return {
      time: ['', '', '', '', '', ''],
      oldTime: ['', '', '', '', '', ''],
      maxTime: ['2', '3', '5', '9', '5', '9']
    }
  },
  methods: {
    // 左侧补0
    padLeftZero (num) {
      let str = num.toString()
      return ('00' + str).substring(str.length)
    },

    // 获取时分秒
    getTime () {
      let nowSeconds = this.padLeftZero(new Date().getSeconds())
      let nowMinutes = this.padLeftZero(new Date().getMinutes())
      let nowHours = this.padLeftZero(new Date().getHours())
      return nowHours.split('').concat(nowMinutes.split(''), nowSeconds.split(''))
    },
    nowTime () {
    // 获取时分秒
      this.time = this.getTime()
      // 赋值
      this.time.forEach((item, index) => {
        if (item !== this.oldTime[index]) {
          let prevNum = Number(item) - 1 < 0 ? this.maxTime[index] : (Number(item) - 1).toString()
          this.$refs.prev[index].setAttribute('data-text', prevNum)
          this.$refs.next[index].setAttribute('data-text', item)
          // 进行翻牌
          this.$refs.down[index].setAttribute('class', ' down')
          setTimeout(() => {
            this.$refs.down[index].setAttribute('class', ' down go')
          }, 0)
          this.oldTime[index] = item
        } else {
          this.$refs.prev[index].setAttribute('data-text', item)
          this.$refs.next[index].setAttribute('data-text', item)
        }
      })
      setTimeout(() => {
        this.nowTime()
      }, 1000)
    }
  },
  mounted () {
    this.oldTime = this.getTime()
    this.nowTime()
  }
}
</script>

<style lang="less" scoped>
.box{
  display: inline-block;
}
.symbol{
  margin-left: 10px;
}
.down{
  display: inline-block;
  position: relative;
  margin-left: 10px;
  width: 60px;
  height: 100px;
  line-height: 100px;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .5);
  background: #fff;
  font-size: 66px;
  color: #fff;
  text-align: center;
  .numBox:before,
  .numBox:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: #000;
    overflow: hidden;
    box-sizing: border-box;
  }
  .numBox:before{
    top: 0;
    bottom: 50%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 1px #666;
  }
  .numBox::after{
    top: 50%;
    bottom: 0;
    border-radius:  0 0 10px 10px;
    line-height: 0;
  }
  .num0:before,.num0:after,
  .num1:before,.num1:after{
    content: attr(data-text);
  }
}
#timeBox em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top;
}
/* 下 */
.down .prev:before{
  z-index: 3;
}
/* transform-origin 旋转中心 perspective 设置元素被查看位置的视图 */
.down .next:after{
  z-index: 2;
  transform-origin: 50% 0%;
  -webkit-transform-origin: 50% 0%;
  transform: perspective(160px) rotateX(180deg);
  -webkit-transform: perspective(160px) rotateX(180deg);
}
.down .prev:after,
.down .netx:before{
  z-index: 1;
}
.down.go .prev:before{
  transform-origin: 50% 100%;
  animation: beforeAnimation .6s ease-in-out both;
  -webkit-animation: beforeAnimation .6s ease-in-out both;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}
.down.go .next:after{
  animation: afterAnimation .6s ease-in-out both;
  -webkit-animation: afterAnimation .6s ease-in-out both;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
}
@keyframes beforeAnimation {
  0% {
    transform: perspective(160px) rotateX(0deg);
    -webkit-transform: perspective(160px) rotateX(0deg);
  }
  100% {
    transform: perspective(160px) rotateX(180deg);
    -webkit-transform: perspective(160px) rotateX(180deg);
  }
}
@keyframes afterAnimation {
  0% {
    transform: perspective(160px) rotateX(180deg);
    -webkit-transform: perspective(160px) rotateX(180deg);
  }
  100% {
    transform: perspective(160px) rotateX(0deg);
    -webkit-transform: perspective(160px) rotateX(0deg);
  }
}

</style>
