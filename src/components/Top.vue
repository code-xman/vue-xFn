<template>
  <div class="top">
    <div class="title" flex="main:justify">
      <div flex-box="1">{{ title }}</div>
      <el-button
        v-show="showBack"
        type="primary"
        class="go-home"
        flex-box="0"
        @click="goHome()"
      >
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TOP',
  props: {
    title: {
      type: String,
      default: '金政前端DEMO'
    }
  },
  data () {
    return {}
  },
  methods: {
    goHome () {
      this.$router.push({
        name: 'Home'
      })
    }
  },
  computed: {
    showBack () {
      return this.$route.name !== 'Home'
    }
  }
}
</script>

<style scoped>
.top /deep/ .go-home {
  padding: 5px 10px;
  font-size: 12px;
}
</style>
