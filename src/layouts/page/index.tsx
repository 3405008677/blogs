/**
 * 主页面 的布局
 */

import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'

import { appStore } from '@/store'

let setScrollContorllerHeight: any

function App() {
  setScrollContorllerHeight = appStore((state) => state.setScrollContorllerHeight)

  useEffect(() => {
    // 初始化添加事件
    addEventListener('scroll', addScrollEvent)

    return () => {
      // 销毁组件时删除事件
      removeEventListener('scroll', addScrollEvent)
    }
  }, [])

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

/**
 * 添加Scroll事件监听
 */
let ticking = true
function addScrollEvent(event: Event) {
  // console.log(event)
  // 优化 scroll 事件
  if (!ticking) return (ticking = false)
  requestAnimationFrame(() => {
    setScrollContorllerHeight(window.scrollY)
  })
}

export default App
