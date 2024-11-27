/**
 * 主页面 的布局
 */
import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'
import { appStore } from '@/store'

/**
 * 设置scroll控制器高度
 */
let scrollContorllerHeight: number
let setScrollContorllerHeight: (value: number) => void
/**
 * 改变头部导航配置信息中的某一个值
 */
let setHeaderConfigItem: (key: string, value: any) => void

function App() {
  scrollContorllerHeight = appStore((state) => state.scrollContorllerHeight)
  setScrollContorllerHeight = appStore((state) => state.setScrollContorllerHeight)

  setHeaderConfigItem = appStore((state) => state.setHeaderConfigItem)

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
  // 优化 scroll 事件
  if (!ticking) return (ticking = false)
  requestAnimationFrame(() => {
    {
      // 如果 保存的高度 > 当前的高度 = 向上  || 保存的高度 < 当前的高度 = 向下
      let type = scrollContorllerHeight > window.scrollY ? 'up' : scrollContorllerHeight < window.scrollY ? 'down' : ''
      if (!type) return

      // setHeaderConfigItem('mouseWheelDirection', type)
      setHeaderConfigItem('mouseWheelDirection', window.scrollY)
    }

    {
      // setScrollContorllerHeight(window.scrollY)
    }
  })
}

export default App
