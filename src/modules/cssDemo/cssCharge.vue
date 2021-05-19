<!-- Created by xj on 2021-05-18. cssCharge -->
<template>
  <div class="cssCharge" flex="main:center">
    <div class="container">
      <div class="battery-header"></div>
      <!-- <div class="battery-body shallow"></div> -->
      <div class="battery-body deep"></div>
      <div class="waves">
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cssCharge',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.cssCharge {
  height: 100%;
  .container {
    position: relative;
    width: 140px;
    height: 210px;
  }
  .battery-header {
    position: absolute;
    left: 55px;
    border: 1px solid #ddd;
    border-bottom: #fff;
    border-radius: 40% 40% 0 0;
    width: 30px;
    height: 10px;
  }
  .battery-body {
    position: absolute;
    bottom: 0;
    border-radius: 12% 12% 0 0;
    width: 100%;
  }
  .shallow {
    height: 200px;
    background: #e5f8fe;
  }
  .deep {
    height: 200px;
    background: #0cb3e8;
  }
  .waves {
    position: relative;
    top: 10px;
    left: -1px;
    border: 1px solid #ddd;
    border-radius: 12% 12% 0 0;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .wave {
    position: absolute;
    top: -110px;
    left: -80px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.8);

    animation: whirl 30s linear infinite;
  }
  .wave-1 {
    border-radius: 45% 47% 44% 42%;
  }
  .wave-2 {
    border-radius: 38% 46% 43% 47%;
    transform: rotate(45deg);
  }
  .wave-3 {
    border-radius: 42% 46% 37% 40%;
    transform: rotate(135deg);
  }

  @keyframes whirl {
    50% {
      top: -305px;
      transform: rotate(720deg);
    }
  }
}
</style>
