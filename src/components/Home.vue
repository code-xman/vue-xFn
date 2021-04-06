<template>
  <div class="home" flex></div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      btnGroups: this.$store.state.menuData.btnGroups
    }
  },
  methods: {}
}
</script>

<style scoped>
.home {
  height: 100%;
}

.btnGroup {
  margin-bottom: 20px;
}
.title-btnGroup {
  /* margin-bottom: 10px; */
  padding: 5px 0;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
