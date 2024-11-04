/**
 * 主页面 的布局
 */

import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'
import { appStore } from '@/store'

function App() {
  const loading = appStore((state) => state.loading)

  return (
    <>
      <div>
        {/* 全局 Loading 组件 */}
        {loading && <Loading />}
        <DefaultLayouts />
      </div>
    </>
  )
}

export default App
