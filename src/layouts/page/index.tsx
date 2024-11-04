/**
 * 主页面 的布局
 */
import { appStore } from '@/store'
import DefaultLayouts from '../default'

function App() {
  const loading = appStore((state) => state.loading)
  return (
    <>
      <div>
        <p>{loading ? '加载中' : '未加载'}</p>
        <DefaultLayouts />
      </div>
    </>
  )
}

export default App
