<!-- Created by xj on 2021-07-13. handleTree -->
<template>
  <div class="handleTree">
    <el-tree :data="treeData" :props="props"> </el-tree>
  </div>
</template>
<script>
export default {
  name: 'handleTree',
  data () {
    return {
      props: {
        label: 'name'
      },
      treeData: [],
      treeData2: [],
      treeData3: [],
      treeList: [
        { id: 1, name: '111' },
        { id: 2, parentId: 1, name: '222' },
        { id: 3, name: '333' },
        { id: 4, parentId: 2, name: '444' }
      ],
      tree: [
        {
          id: 1,
          name: '111',
          children: [
            {
              id: 2,
              parentId: 1,
              name: '222',
              children: [
                {
                  id: 4,
                  parentId: 2,
                  name: '444',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: '333',
          children: []
        }
      ],
      arrData: []
    }
  },
  methods: {
    handleToTree (data, parentId) {
      function handleFn (parentId) {
        let res = []
        data.forEach((item, index) => {
          if (item['parentId'] === parentId) {
            item['children'] = handleFn(item.id)
            res.push(item)
          }
        })
        if (res.length === 0) {
          return null
        } else {
          return res
        }
      }
      return handleFn(parentId)
    },
    handleToArr (tree) {
      let res = []
      function handleFn (data) {
        data.forEach(item => {
          if (item.children.length > 0) {
            handleFn(item.children)
            delete item.children
          }
          res.push(item)
        })
      }
      handleFn(tree)
      return res
    }
  },
  mounted () {
    this.treeData = this.$utils.arrToTree(this.treeList, {
      key: 'id',
      // strict: true,
      // data: 'data',
      parentKey: 'parentId',
      children: 'children'
    })
    this.treeData2 = this.handleToTree(this.treeList, undefined)
    this.treeData3 = this.$utils.arrToTreeX(this.treeList, {
      key: 'id',
      parentId: undefined,
      parentKey: 'parentId',
      childrenKey: 'children'
    })

    this.arrData = this.handleToArr(this.tree)
  }
}
</script>
<style lang="less" scoped></style>
