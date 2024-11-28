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
        {/* 全局 Loading 组件 */}

        {/* 默认布局 */}
        <DefaultLayouts />
        {/* 默认布局 */}
      </div>
    </>
  )
}

export default App
