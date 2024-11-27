// 悬浮按钮
import { CSSTransition } from 'react-transition-group'
import { FloatButton } from 'antd'
import { QuestionCircleOutlined, MenuFoldOutlined, CloseSquareOutlined } from '@ant-design/icons'
import { appStore } from '@/store'
import './index.scss'

function float_button() {
  const floatButtonRef = useRef(null)
  return (
    <>
      {/* 悬浮按钮 开始 */}

      <CSSTransition in={appStore().scrollContorllerHeight > 200} nodeRef={floatButtonRef} timeout={600} classNames="button-group-transition" unmountOnExit>
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
