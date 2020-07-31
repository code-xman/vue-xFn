<template>
  <div class="virtualRollingTwo">
    <div class="btnList">
      <el-button
        type="primary"
        v-for="(btn, index) in btnList"
        :key="index"
        @click="btnClick(btn.type)"
        >{{ btn.name }}</el-button
      >
    </div>
    <div
      class="virtualRollingTable"
      ref="list"
      :style="{ height: itemSize * count + 'px' }"
      @scroll="scrollEvent($event)"
    >
      <div
        class="infinite-list-phantom"
        :style="{ height: listHeight + 'px' }"
      ></div>
      <div class="infinite-list" :style="{ transform: translateY }">
        <div
          ref="item"
          class="infinite-item"
          v-for="(item, index) in tableData"
          :key="index"
          :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
        >
          {{ item.index + item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'virtualRollingTwo',
  data () {
    return {
      loading: false,
      // 按钮
      btnList: [
        {
          name: '获取数据',
          type: 'getData'
        },
        // {
        //   name: '添加数据',
        //   type: 'addData'
        // },
        {
          name: '清空数据',
          type: 'delData'
        }
      ],
      arrData: [],
      // 表格
      // tableData: [],
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
      ],
      itemSize: 50, // 每条数据height
      startOffset: 0, // 视图y轴偏移量
      start: 0,
      end: 10,
      count: 10
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
          this.tableData = this.arrData.slice(
            0,
            Math.min(this.arrData.length, this.count)
          )
          break
        case 'delData':
          this.arrData = []
          break
        default:
          break
      }
    },
    scrollEvent () {
      // 当前滚动位置
      let scrollTop = this.$refs.list.scrollTop
      this.start = scrollTop / this.itemSize
      this.end = this.start + this.count
      this.startOffset = scrollTop
    }
  },
  mounted () {},
  computed: {
    listHeight () {
      return this.itemSize * this.arrData.length
    },
    translateY () {
      return `translateY(${this.startOffset}px)`
    },
    tableData () {
      return this.arrData.slice(this.start, this.end)
    }
  }
}
</script>

<style scoped>
.virtualRollingTwo {
  height: 100%;
}
.virtualRollingTable {
  position: relative;
  /* height: 500px; */
  overflow: auto;
}

.infinite-list-phantom {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.infinite-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
