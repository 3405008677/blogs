import Page_404 from '@/views/common/404'
import Login from '@/views/common/login'
import Root from '@/layouts/page'

/**
 * 默认路由
 */
const defaultRouterList: RouteConfig[] = [
  {
    index: true,
    path: '/',
    element: <Root />,
    children: [],
  },
  {
    path: '/404',
    element: <Page_404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export { defaultRouterList }
