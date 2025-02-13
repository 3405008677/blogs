import styles from './first_type.module.scss'
import './first_type.module.scss'
import { ExpandOutlined, GithubOutlined, FontSizeOutlined } from '@ant-design/icons'
import { setIsFull } from '@/layouts/default/utils'
import { Html5Outlined } from '@ant-design/icons'
import { appStore, userStore } from '@/store'
import LanguageComponent, { LanguageComponentType } from '@/components/Language'
import { useIntl } from 'react-intl'

function first_type() {
  const intl = useIntl()

  const useIntls = (text: string) => {
    return intl.formatMessage({ id: text })
  }

  const gitHub = userStore((state) => state.gitHub)
  const personality = userStore((state) => state.personality)

  const headerConfig = appStore((v) => v.headerConfig)

  const headerMenuMiddleUpRef = useRef<HTMLDivElement>(null)
  const headerMenuMiddleDownRef = useRef<HTMLDivElement>(null)

  const languageRef = useRef<LanguageComponentType>(null)

  // 打开 国际化组件弹窗
  const openLanguageComponent = () => {
    languageRef.current?.showModal()
  }

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
            <p className="c-pointer">{useIntls('首页')}</p>
            <p className="c-pointer">{useIntls('文章')}</p>
            <p className="c-pointer">{useIntls('我的')}</p>
            <p className="c-pointer">{useIntls('留言')}</p>
            <p className="c-pointer">{useIntls('关于')}</p>
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
          <FontSizeOutlined title={useIntls('语言')} className="ml-20px c-pointer text-20px" onClick={openLanguageComponent} />
          <ExpandOutlined title={useIntls('全屏')} className="ml-20px c-pointer text-20px" onClick={setIsFull} />
          <GithubOutlined title="GitHub" className="ml-20px c-pointer text-20px" onClick={() => window.open(gitHub)} />
        </div>
        {/* 右侧 结束 */}

        {/* 组件 */}
        {/* 国际化 */}
        <LanguageComponent ref={languageRef} />
        {/* 国际化 */}
        {/* 组件 */}
      </div>
    </>
  )
}

export default first_type
