<template>
  <div class="hello" flex="dir:top">
    <TOP :title="$route.meta.title" flex-box="0" />
    <div class="content" flex-box="1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TOP from './Top'
export default {
  name: 'Hello',
  components: { TOP },
  data () {
    return {}
  },
  mounted () {
    this.$router.push({
      name: 'Home'
    })
  }
}
</script>

<style scoped>
.hello {
  height: 100%;
}
.content {
  padding: 20px;
  overflow: auto;
}
</style>
