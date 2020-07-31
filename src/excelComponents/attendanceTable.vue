<template>
  <div class="attendanceTable">
    <vxe-grid
      fit
      auto-resize
      border
      class="vxe-table-element table"
      height="500px"
      :data="tableData"
      :columns="tableColumns"
      ref="vxeGrid"
      :edit-config="{ trigger: 'manual', mode: 'row', autoClear: false }"
    ></vxe-grid>
  </div>
</template>

<script>
export default {
  name: 'attendanceTable',
  props: {
    attendanceTableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      a: '',
      tableColumns: [
        {
          title: '日期',
          width: 150,
          field: 'date',
          align: 'center',
          formatter: this.format
        },
        {
          title: '星期',
          width: 150,
          field: 'week',
          align: 'center',
          formatter: this.format
        },
        {
          title: '上班时间',
          width: 200,
          field: 'goToWork',
          align: 'center',
          editRender: { name: 'input' }
        },
        {
          title: '下班时间',
          width: 300,
          field: 'goOffWork',
          align: 'center',
          formatter: this.format,
          editRender: { name: 'edit' },
          slots: {
            edit: ({ row, rowIndex }) => {
              return [
                <el-input
                  placeholder='请输入时间'
                  value={row.goOffWork}
                  class='input-with-select'
                >
                  <el-select
                    value={row.selectDay}
                    slot='prepend'
                    placeholder='请选择'
                  >
                    <el-option label='当天' value='today'></el-option>
                    <el-option label='次日' value='tomorrow'></el-option>
                  </el-select>
                </el-input>
              ]
            }
          }
        },
        {
          title: '类型',
          width: 150,
          field: 'dayType',
          align: 'center',
          formatter: this.format,
          editRender: { name: 'edit' },
          slots: {
            edit: ({ row, rowIndex }) => {
              return [
                <el-select placeholder='请选择' v-model={row.dayType}>
                  {this.dayTypeArr.map(option => (
                    <el-option
                      label={option.label}
                      value={option.value}
                    ></el-option>
                  ))}
                </el-select>
              ]
            }
          }
        },
        {
          title: '备注',
          minWidth: 150,
          field: 'remark',
          align: 'left',
          headerAlign: 'center',
          editRender: { name: 'input' }
        },
        {
          title: '操作',
          width: 150,
          field: 'handle',
          align: 'center',
          slots: {
            default: ({ row, rowIndex }) => {
              let isEdit = this.$refs.vxeGrid.isActiveByRow(row)
              const txt = isEdit ? '确定' : '编辑'
              return [
                <el-button
                  type='primary'
                  onClick={() => this.rowClick(row, rowIndex, isEdit)}
                >
                  {txt}
                </el-button>,
                <el-button
                  type='primary'
                  plain
                  onClick={() => this.cancelRowEvent(row)}
                >
                  取消
                </el-button>
              ]
            }
          }
        }
      ],
      tableData: [],
      dayTypeArr: [
        {
          label: '休息',
          value: 'rest'
        },
        {
          label: '加班',
          value: 'addWork'
        },
        {
          label: '工作',
          value: 'work'
        },
        {
          label: '调休',
          value: 'addRest'
        }
      ]
    }
  },
  methods: {
    format ({
      cellValue,
      row,
      column: {
        own: { field }
      }
    }) {
      if (!cellValue) {
        return
      }
      let res = ''
      switch (field) {
        case 'date':
          res = '' + cellValue + '日'
          break
        case 'week':
          res = '星期' + cellValue
          break
        case 'goOffWork':
          if (!row.selectDay) {
            res = ''
          } else if (row.selectDay === 'today') {
            res = '当天' + cellValue
          } else {
            res = '次日' + cellValue
          }
          break
        case 'dayType':
          if (cellValue.includes('add')) {
            res = cellValue.includes('Work') ? '加班' : '调休'
          } else {
            res = cellValue.includes('work') ? '工作' : '休息'
          }
          break

        default:
          break
      }
      return res
    },
    changeDayType (row, value) {
      console.log(row, value)
    },
    rowClick (row, rowIndex, isEdit) {
      if (isEdit) {
        // 保存
        this.$refs.vxeGrid.clearActived().then(() => {
          this.tableData[rowIndex].goOffWork = row.goOffWork
        })
      } else {
        // 编辑
        this.$refs.vxeGrid.setActiveRow(row)
      }
    },
    cancelRowEvent (row) {
      const vxeGrid = this.$refs.vxeGrid
      vxeGrid.clearActived().then(() => {
        // 还原行数据
        vxeGrid.revertData(row)
      })
    }
  },
  watch: {
    attendanceTableData: {
      handler: function (val) {
        this.tableData = JSON.parse(JSON.stringify(val))
      },
      immediate: true
    },
    tableData: {
      handler: function (val) {
        this.tableData.map(item => {
          if (['六', '日'].includes(item.week) && !item.attendance) {
            item.dayType = 'rest'
          } else if (['六', '日'].includes(item.week)) {
            item.dayType = 'addWork'
          } else if (item.attendance) {
            item.dayType = 'work'
          } else {
            item.dayType = 'addrest'
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.attendanceTable /deep/ .el-input-group__prepend {
  width: 100px;
}
</style>
