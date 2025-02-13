import { Navigate, createBrowserRouter } from 'react-router-dom'
import Page_404 from '@/views/common/404'
import Login from '@/views/common/login'
import Root from '@/layouts/page'
import Home from '@/views/business/home'
import Info from '@/views/business/info'

/**
 * 默认路由
 */
const defaultRouterList: RouteConfig[] = [
  {
    index: true,
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/info',
        element: <Info />,
      },
    ],
  },
  {
    path: '/404',
    element: <Page_404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Page_404 />,
  },
]

// const defaultRouterList = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Page_404 />,
//     children: [
//       {
//         path: 'home',
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: '/404',
//     element: <Page_404 />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '*',
//     element: <Page_404 />,
//   },
// ])

export { defaultRouterList }
