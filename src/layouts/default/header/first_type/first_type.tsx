import styles from './first_type.module.scss'
import './first_type.module.scss'
import { ExpandOutlined, GithubOutlined, FontSizeOutlined } from '@ant-design/icons'
import { setIsFull } from '@/layouts/default/utils'
import { useIntls } from '@/locales'
import { Html5Outlined } from '@ant-design/icons'
import { appStore, userStore } from '@/store'

function first_type() {
  const gitHub = userStore((state) => state.gitHub)
  const personality = userStore((state) => state.personality)

  const headerConfig = appStore((v) => v.headerConfig)

  const headerMenuMiddleUpRef = useRef<HTMLDivElement>(null)
  const headerMenuMiddleDownRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* 占位 */}
      {/* <div className={styles['position-header']}></div> */}
      {/* 内容开始 */}
      <div className={styles['header'] + ' flex'}>
        {/* 左侧 开始 */}
        <div className={styles['left'] + ' flex-j-a'}>
          <div className={styles['flip-scale-down-hor']}>
            <Html5Outlined />
          </div>
        </div>
        {/* 左侧 结束 */}
        {/* 中间 开始 */}
        <div className={styles['middle']}>
          {/* 菜单 开始 */}
          <div
            ref={headerMenuMiddleUpRef}
            className={`${styles['middle-up']} flex-j-a ${headerConfig.mouseWheelDirection === 'up' ? styles['menu-up-animation-show'] : styles['menu-up-animation-hide']}`}
          >
            <p className="c-pointer">首页</p>
            <p className="c-pointer">文章</p>
            <p className="c-pointer">我的</p>
            <p className="c-pointer">留言</p>
            <p className="c-pointer">关于</p>
            
          </div>
          {/* 菜单 结束 */}
          {/* 个性签名 开始 */}
          <div
            ref={headerMenuMiddleDownRef}
            className={`${styles['middle-down']} flex-j-a ${headerConfig.mouseWheelDirection === 'up' ? styles['menu-down-animation-hide'] : styles['menu-down-animation-show']}`}
          >
            <p>{personality}</p>
          </div>
          {/* 个性签名 结束 */}
        </div>

        {/* 中间 结束 */}

        {/* 右侧 开始 */}
        <div className={styles['right'] + ' flex-j-a'}>
          <div>ICON</div>
          <FontSizeOutlined title={useIntls('语言')} className="ml-20px c-pointer text-20px" />
          <ExpandOutlined title={useIntls('全屏')} className="ml-20px c-pointer text-20px" onClick={setIsFull} />
          <GithubOutlined title="GitHub" className="ml-20px c-pointer text-20px" onClick={() => window.open(gitHub)} />
        </div>
        {/* 右侧 结束 */}
      </div>
    </>
  )
}

export default first_type
