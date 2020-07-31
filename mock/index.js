import Mock, { Random } from 'mockjs'

console.log('mock ready')

// 使用mockjs模拟数据
Mock.mock('/api/proxy/virtualRolling/addData', () => {
  return {
    code: '9999',
    msg: '查询成功!',
    data: {
      mtime: '@datetime', // 随机生成日期时间
      'score|1-800': 800, // 随机生成1-800的数字
      'rank|1-100': 100, // 随机生成1-100的数字
      'stars|1-5': 5, // 随机生成1-5的数字
      nickname: '@cname' // 随机生成中文名字
    }
  }
})

Mock.mock('/api/proxy/virtualRolling/aaa', {
  ok: true,
  data: {
    // 标题
    title: () => Random.ctitle(8, 15),
    // 日期
    createTime: () => Random.date('yyyy-MM'),
    // 编号
    num: () => Random.guid(),
    // 计划
    plan: () => Random.cword(5, 8),
    // 编制年度
    year: () => Random.date('yyyy'),
    // 金额
    money: () => Random.integer(5000, 15000),
    // id
    id: () => Random.id()
  }
})

// 随机生成文章数据
const postData = req => {
  console.log(req) // 请求体，用于获取参数

  let posts = [] // 用于存放文章数据的数组

  for (let i = 0; i < 1e4; i++) {
    let post = {
      index: i + 1,
      title: Random.ctitle(2, 10), // 随机生成长度为10-25的标题
      author: Random.cname(), // 随机生成名字
      time: Random.date() + ' ' + Random.time(), // 随机生成年月日 + 时间
      content: Random.csentence(20, 50)
    }

    posts.push(post)
  }

  // 返回状态码和文章数据posts
  return {
    code: 200,
    posts
  }
}
Mock.mock(`/api/proxy/virtualRolling/bbb`, 'get', postData)
