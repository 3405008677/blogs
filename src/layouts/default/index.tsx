import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import FloatButton from './float_button'

import './float_button/index.scss'

function DefaultLayouts() {
  return (
    <>
      {/* 头部 开始 */}
      <Header />
      {/* 头部 结束 */}

      {/* 身体 开始 */}
      <Outlet />
      {/* 身体 结束 */}

      {/* 页脚 开始 */}
      <Footer />
      {/* 页脚 结束 */}

      {/* 悬浮按钮 开始 */}
      <FloatButton />
      {/* 悬浮按钮 结束 */}
    </>
  )
}

export default DefaultLayouts
