<template>
  <div class="virtualRollingThree">
    <div class="btnList">
      <el-button
        type="primary"
        v-for="(btn, index) in btnList"
        :key="index"
        @click="btnClick(btn.type)"
        >{{ btn.name }}</el-button
      >
    </div>
    <!-- contains为包裹容器，virtualRollingTable为父级，infinite-list为显示数据，infinite-list-phantom为了撑开高度  -->
    <div class="contains" :style="{ height: itemSize * count + 'px' }">
      <div class="virtualRollingTable" ref="list" @scroll="scrollEvent($event)">
        <div class="infinite-list">
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
        <div
          class="infinite-list-phantom"
          :style="{ height: listHeight + 'px' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'virtualRollingThree',
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
      // this.startOffset = scrollTop
    }
  },
  mounted () {},
  computed: {
    listHeight () {
      return this.itemSize * this.arrData.length
    },
    // translateY () {
    //   return `translateY(${this.startOffset}px)`
    // },
    tableData () {
      return this.arrData.slice(this.start, this.end)
    }
  }
}
</script>

<style scoped>
.virtualRollingThree {
  height: 100%;
}
/* 这些css主要斗是让infinite-list以父级固定；
但是又不想用fixed，据说fixed会有点点问题，但我是单纯的不想用fixed；
所以用contains这个家伙来进行代替方案 */
.contains {
  position: relative; /* 负责定位 */
}
.virtualRollingTable {
  height: 100%;
  overflow: auto; /* 仅负责滚动，不进行定位 */
}

.infinite-list {
  position: absolute; /* 定位到contains */
  top: 0;
  left: 0;
  right: 0;
  z-index: -1; /* 为了不影响滚动*/
}
</style>
