<template>
  <div class="">
    <TOP :title="$route.meta.title" />
    <router-view></router-view>
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

<style scoped></style>
