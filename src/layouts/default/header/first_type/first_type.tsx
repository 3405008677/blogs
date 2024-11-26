import styles from './first_type.module.scss'
import { ExpandOutlined, GithubOutlined, FontSizeOutlined } from '@ant-design/icons'
import { setIsFull } from '@/layouts/default/utils'
import { userStore } from '@/store'
import { useIntls } from '@/locales'
import { Html5Outlined } from '@ant-design/icons'

function first_type() {
  const gitHub = userStore((state) => state.gitHub)

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
