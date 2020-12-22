<!-- Created by xj on 2020-12-22. css1 -->
<template>
  <div class="box" flex="main:center cross:center">
    <div class="btn">AVAILABLE NOW</div>
  </div>
</template>

<script>
export default {
  name: 'cssOne'
}
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  background-color: #f8f004;
  .btn,
  .btn::after {
    position: relative;
    box-shadow: 6px 0 0 #00e6f6;
    border: 0;
    outline: transparent;
    width: 380px;
    height: 86px;
    line-height: 86px;
    // background-color: #fe023b;
    background: linear-gradient(45deg, transparent 5%, #fe023b 5%);
    color: #fff;
    text-align: center;
    font-size: 36px;
    letter-spacing: 3px;
  }
  .btn::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: 'VAILABLE NOW';
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #fe023b 5%
    );
    box-shadow: -3px -3px 0 #f8f004, 3px 3px 0 #00e6f6;
    clip-path: var(--slice-0);
  }
  .btn:hover::after {
    animation: 1.5s glitch;
    animation-timing-function: steps(2, end);
  }
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>
