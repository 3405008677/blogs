/**
 * 主页面 的布局
 */

import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'

function App() {
  return (
    <>
      <div>
        {/* 全局 Loading 组件 */}
        <Loading />
        <DefaultLayouts />
      </div>
    </>
  )
}

export default App
