<template>
  <div class="hello" flex="dir:top">
    <TOP :title="$route.meta.title" flex-box="0" />
    <div class="content" flex flex-box="1">
      <el-aside flex-box="0">
        <el-menu class="menu">
          <el-submenu
            v-for="(groupBtn, groupIndex) in btnGroups"
            :key="groupIndex"
            :index="`${groupIndex}`"
          >
            <template slot="title">
              <span>{{ groupBtn.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(btn, index) in groupBtn.btnList"
                :key="index"
                :index="`${groupIndex}-${index}`"
                @click="btnClick(btn.type)"
              >
                {{ btn.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="container" flex-box="1">
        <router-view></router-view>
      </el-container>
    </div>
  </div>
</template>

<script>
import TOP from './Top'
export default {
  name: 'Hello',
  components: { TOP },
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

<style scoped lang="less">
.hello {
  height: 100%;
}
.content {
  padding: 10px;
  overflow: auto;

  .menu {
    height: 100%;
  }
  .container {
    padding: 10px;
  }
}
</style>
