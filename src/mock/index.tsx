import * as Mock from 'mockjs'

Mock.mock('http://www.baidu.com', { status: { message: "请先登录", code: 10 } })
