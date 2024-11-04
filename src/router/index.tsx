import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { defaultRouterList } from './modules'
import RouterIntercept from './guard'

function Router() {
  return (
    <>
      <BrowserRouter>
        <RouterIntercept>
          <RenderRoutes routeConfigs={defaultRouterList} />
        </RouterIntercept>
      </BrowserRouter>
    </>
  )
}

function RenderRoutes(props: { routeConfigs: RouteConfig[] }) {
  // 递归便利路由
  const renderChildren = (children: RouteConfig[]) => (
    <>
      {children.map((item, index) => {
        // 设置 路由index 重定向 时候的配置
        if (item.index && !item?.children) {
          return <Route key={index} index element={item.element} />
        }

        return (
          <Route key={index} path={item.path} element={item.element}>
            {item?.children && renderChildren(item.children)}
          </Route>
        )
      })}
    </>
  )

  return <Routes>{renderChildren(props.routeConfigs)}</Routes>
}

export default Router
