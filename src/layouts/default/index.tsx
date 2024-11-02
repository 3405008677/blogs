import { Outlet } from 'react-router-dom'
import Header from './header'

function DefaultLayouts() {
  return (
    <>
      {/* 头部 */}
      <Header />
      {/* 身体 */}
      <Outlet />
    </>
  )
}

export default DefaultLayouts
