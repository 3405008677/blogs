// 首页
import { DoubleRightOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

function home() {
  useEffect(() => {
    console.log('初始化 homne ')
  }, [])

  return (
    <>
      <div className={styles['home-page']}>
        {/* banner 开始 */}
        <div className={styles['banner'] + ' flex-c h100vh text-center'}>
          <div></div>

          {/* 个性签名 开始 */}
          <div className={styles['banner-signature']}>
            <p>123</p>
          </div>
          {/* 个性签名 结束 */}

          {/* 底部icon 开始 */}
          <div className={styles['banner-icon']}>
            <DoubleRightOutlined className="c-pointer" rotate={90} onClick={() => scrollTo(window.innerHeight)} />
          </div>
          {/* 底部icon 结束 */}
        </div>
        {/* banner 结束 */}
      </div>
    </>
  )
}

function scrollTo(value: number) {
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}

export default home
