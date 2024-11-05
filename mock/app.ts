import Mock from 'mockjs'

const proxy = import.meta.env.VITE_BASE_URL

if (import.meta.env.VITE_USE_MOCK === 'true') {
  console.log('开启Mock数据')

  Mock.mock(proxy + '/login', 'post', (options: any) => {
    return {
      code: 200,
      data: {
        token: 'admin',
        uid: 123456,
      },
    }
  })

  Mock.mock(proxy + '/user/info', 'post', (options: any) => {
    return {
      code: 200,
      data: {
        uid: 123456,
        name: '我是你爹',
        phone: '110',
        address: '火星',
      },
    }
  })

  Mock.mock(proxy + '/user/router/list', 'get', (options: any) => {
    return {
      code: 200,
      data: [
        {
          uid: 1,
          name: '主页',
          icon: 'system',
          url: 'home',
          keepAlive: false,
          order: 1,
          parentId: null,
          parentName: null,
          list: [],
        },
      ],
    }
  })
}
