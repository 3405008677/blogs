import styles from './first_type.module.scss'
import { ExpandOutlined, GithubOutlined, FontSizeOutlined } from '@ant-design/icons'
import { setIsFull } from '@/layouts/default/utils'
import { userStore } from '@/store'
import { useIntls } from '@/locales'
import { Html5Outlined } from '@ant-design/icons'
import { appStore } from '@/store'

function first_type() {
  const gitHub = userStore((state) => state.gitHub)

  const headerConfig = appStore((v) => v.headerConfig)

  const headerMenuMiddleUpRef = useRef<HTMLDivElement>(null)
  const headerMenuMiddleDownRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (headerConfig.mouseWheelDirection === 'up') {
  //     headerMenuMiddleUpRef.current!.style.animation = 'menu-up-animation-show 0.8s linear both;'
  //     headerMenuMiddleDownRef.current!.style.animation = 'menu-down-animation-hide 0.8s linear both;'
  //   } else if (headerConfig.mouseWheelDirection === 'down') {
  //     headerMenuMiddleUpRef.current!.style.animation = 'menu-up-animation-hide 0.8s linear both;'
  //     headerMenuMiddleDownRef.current!.style.animation = 'menu-down-animation-show 0.8s linear both;'
  //   }
  // }, [headerConfig.mouseWheelDirection])


  // useEffect(() => {
  //   headerMenuMiddleUpRef.current!.addEventListener('animationend', headerMenuMiddleUpEvent)
  //   headerMenuMiddleDownRef.current!.addEventListener('animationend', headerMenuMiddleDownEvent)

  //   return () => {
  //     headerMenuMiddleUpRef.current!.removeEventListener('animationend', headerMenuMiddleUpEvent)
  //     headerMenuMiddleDownRef.current!.removeEventListener('animationend', headerMenuMiddleDownEvent)
  //   }
  // }, [])

  /**
   * up Dom 事件
   */
  function headerMenuMiddleUpEvent() {}

  /**
   * down Dom 事件
   */
  function headerMenuMiddleDownEvent() {}

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
        <div
          className={styles['middle-down'] + (headerConfig.mouseWheelDirection === 'up' ? ' menu-down-animation-hide' : ' menu-down-animation-show')}
          ref={headerMenuMiddleDownRef}
        >
          {headerConfig.mouseWheelDirection}
        </div>

        <div
          ref={headerMenuMiddleUpRef}
          className={styles['middle-up'] + ' flex-j-a' + (headerConfig.mouseWheelDirection === 'up' ? ' menu-up-animation-show' : ' menu-up-animation-hide')}
        >
          <p className="c-pointer">首页</p>
          <p className="c-pointer">文章</p>
          <p className="c-pointer">我的</p>
          <p className="c-pointer">留言</p>
          <p className="c-pointer">关于</p>
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
