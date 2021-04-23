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
              <!-- 菜单名称超长后 添加tooltip -->
              <el-tooltip
                v-if="groupBtn.title.length > 14"
                effect="dark"
                placement="right"
                :content="groupBtn.title"
              >
                <span>{{ groupBtn.title }}</span>
              </el-tooltip>
              <span v-else>{{ groupBtn.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(btn, index) in groupBtn.btnList"
                :key="index"
                :index="`${groupIndex}-${index}`"
                @click="btnClick(btn.type)"
              >
                <!-- 菜单名称超长后 添加tooltip -->
                <el-tooltip
                  v-if="btn.name.length > 14"
                  effect="dark"
                  placement="right"
                  :content="btn.name"
                >
                  <div> {{ btn.name }} </div>
                </el-tooltip>
                <span v-else> {{ btn.name }} </span>
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
.el-submenu__title{
  span{
    display: inline-block;
    max-width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.el-menu{
  .el-menu-item{
    display: inline-block;
    max-width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
