/*
 * @Author: xiangjie
 * @Date: 2020-01-07 16:44:45
 * @Last Modified by: xiangjie
 * @Last Modified time: 2020-09-21 20:33:46
 */

export default [
  // 考勤福利自动化1.0
  {
    path: 'attendanceOne',
    name: 'AttendanceOne',
    meta: { title: '考勤福利自动化1.0' },
    component: () => import('./attendanceOne')
  },
  // 考勤福利自动化2.0
  {
    path: 'attendanceTwo',
    name: 'AttendanceTwo',
    meta: { title: '考勤福利自动化2.0' },
    component: () => import('./attendanceTwo')
  }
]
