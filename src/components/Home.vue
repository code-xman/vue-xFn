<template>
  <div class="home">
    <div
      class="btnGroup"
      v-for="(groupBtn, groupIndex) in btnGroups"
      :key="groupIndex"
    >
      <div class="title-btnGroup">{{ groupBtn.title }}</div>
      <el-button
        type="primary"
        v-for="(btn, index) in groupBtn.btnList"
        :key="index"
        @click="btnClick(btn.type)"
        >{{ btn.name }}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      btnGroups: this.$store.state.menuData.btnGroups
    }
  },
  methods: {
    btnClick (type) {
      switch (type) {
        case 'autoOne':
          this.$router.push({
            name: 'AttendanceOne'
          })
          break
        case 'autoTwo':
          this.$router.push({
            name: 'AttendanceTwo'
          })
          break
        default:
          this.$router.push({
            name: type
          })
          break
      }
    }
  }
}
</script>

<style scoped>
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
