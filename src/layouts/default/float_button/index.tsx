// 悬浮按钮
import { CSSTransition } from 'react-transition-group'
import { FloatButton } from 'antd'
import { QuestionCircleOutlined, MenuFoldOutlined, CloseSquareOutlined } from '@ant-design/icons'
import { appStore } from '@/store'
import './index.scss'

function float_button() {
  const floatButtonRef = useRef(null)

  const scrollContorllerHeight = appStore((state) => state.scrollContorllerHeight)
  const setScrollContorllerHeight = appStore((state) => state.setScrollContorllerHeight)

  useEffect(() => {
    // 初始化添加事件
    addEventListener('scroll', addScrollEvent)

    return () => {
      // 销毁组件时删除事件
      removeEventListener('scroll', addScrollEvent)
    }
  }, [])

  /**
   * 添加Scroll事件监听
   */
  let ticking = true
  function addScrollEvent(event: Event) {
    // 优化 scroll 事件
    if (!ticking) return (ticking = false)
    requestAnimationFrame(() => {
      // 更新当前 scroll控制器高度
      setScrollContorllerHeight(window.scrollY)
    })
  }

  return (
    <>
      {/* 悬浮按钮 开始 */}

      <CSSTransition in={scrollContorllerHeight > 5} nodeRef={floatButtonRef} timeout={600} classNames="button-group-transition" unmountOnExit>
        <div ref={floatButtonRef} className="button-group-content">
          <FloatButton.Group shape="circle" trigger="click" placement="top">
            <FloatButton tooltip="1" icon={<QuestionCircleOutlined />} />
            <FloatButton tooltip="2" icon={<MenuFoldOutlined />} />
            <FloatButton tooltip="3" icon={<CloseSquareOutlined />} />
          </FloatButton.Group>
        </div>
      </CSSTransition>

      {/* 悬浮按钮 结束 */}
    </>
  )
}

export default float_button
