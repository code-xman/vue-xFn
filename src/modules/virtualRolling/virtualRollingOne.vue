<template>
  <div class="virtualRollingOne">
    <div class="btnList">
      <el-button
        type="primary"
        v-for="(btn, index) in btnList"
        :key="index"
        @click="btnClick(btn.type)"
        >{{ btn.name }}</el-button
      >
    </div>
    <div class="virtualRollingTable">
      <vxe-grid
        fit
        border
        auto-resize
        show-overflow
        highlight-hover-row
        ref="vxeGrid"
        height="500px"
        class="vxe-table-element table"
        v-loading="loading"
        :data="tableData"
        :columns="tableColumns"
        :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false }"
      ></vxe-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'virtualRollingOne',
  data () {
    return {
      loading: false,
      // 按钮
      btnList: [
        {
          name: '获取数据',
          type: 'getData'
        },
        {
          name: '添加数据',
          type: 'addData'
        },
        {
          name: '清空数据',
          type: 'delData'
        }
      ],
      arrData: [],
      // 表格
      tableData: [],
      tableColumns: [
        {
          type: 'seq',
          width: 100,
          align: 'center',
          title: '序号'
        },
        {
          field: 'title',
          title: '名字',
          width: 200
        },
        {
          field: 'author',
          title: '作者',
          width: 140,
          align: 'center'
        },
        {
          field: 'time',
          title: '作者',
          width: 200,
          align: 'center'
        },
        {
          field: 'content',
          title: '内容',
          minWidth: 200
        }
      ]
    }
  },
  methods: {
    // 按钮功能
    async btnClick (type) {
      switch (type) {
        case 'getData': // 获取数据
          this.loading = true
          // const url = 'http://jsonplaceholder.typicode.com/users'
          const url = '/api/proxy/virtualRolling/bbb'

          this.$axios
            .get(url)
            .then(res => {
              console.log('获取数据成功', res.data)
              this.arrData = res.data.posts
              this.loading = false
            })
            .catch(error => {
              console.log(error)
            })
          break
        case 'addData': // 添加数据
          this.tableData = this.arrData
          break
        case 'delData':
          this.tableData = []
          break
        default:
          break
      }
    }
  },
  mounted () {}
}
</script>

<style scoped>
.virtualRollingOne {
  height: 100%;
}
</style>
