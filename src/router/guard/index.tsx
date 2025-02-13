import { Navigate, useLocation } from 'react-router-dom'
import { appStore } from '@/store'

/**
 * 路由守卫 路由拦截
 */
function RouterIntercept(props: any) {
  // 判断是否有权限
  let isAuthenticated = true
  // 获取当前路由信息
  const location = useLocation()

  // 控制加载页面
  const setLoading = appStore((state) => state.setLoading)
  console.log('页面跳转，路由守卫')
  setLoading(true)

  if (!isAuthenticated && location.pathname !== '/login') {
    // 如果没有权限 并且不是登陆页面  则 跳转 登陆页面
    return <Navigate to="/login" replace />
  }

  //如果有权限则直接通过
  return props.children
}

export default RouterIntercept
