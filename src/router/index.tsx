import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { defaultRouterList } from './modules'

function Router() {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes routeConfigs={defaultRouterList} />
      </BrowserRouter>
    </>
  )
}

function RenderRoutes(props: { routeConfigs: RouteConfig[] }) {
  // 递归便利路由
  const renderChildren = (children: RouteConfig[]) => (
    <>
      {children.map((item, index) => (
        <Route key={index} path={item.path} element={item.element}>
          {item.children && renderChildren(item.children)}
        </Route>
      ))}
    </>
  )

  return <Routes>{renderChildren(props.routeConfigs)}</Routes>
}

export default Router
