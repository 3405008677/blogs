import styles from './first_type.module.scss'
import { ExpandOutlined, GithubOutlined, FontSizeOutlined } from '@ant-design/icons'
import { setIsFull } from '@/layouts/default/utils'
import { userStore } from '@/store'
import { useIntls } from '@/locales'

function first_type() {
  const gitHub = userStore((state) => state.gitHub)

  return (
    <>
      <div className={styles['position-header']}></div>
      <div className={styles['header'] + ' flex'}>
        <div className={styles['left'] + ' flex-j-a'}>
          <div>{useIntls('主页')}</div>
          <div>Home</div>
        </div>
        <div className={styles['right'] + ' flex-j-a'}>
          <div>ICON</div>
          <FontSizeOutlined title={useIntls('语言')} className="ml-20px c-pointer text-20px" />
          <ExpandOutlined title={useIntls('放大')} className="ml-20px c-pointer text-20px" onClick={setIsFull} />
          <GithubOutlined title={useIntls('GitHub')} className="ml-20px c-pointer text-20px" onClick={() => window.open(gitHub)} />
        </div>
      </div>
    </>
  )
}

export default first_type
