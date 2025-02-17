import styles from './index.module.scss'
import { DoubleRightOutlined } from '@ant-design/icons'

const BannerComponent = () => {
  return (
    <>
      {/* banner 开始 */}
      <div className={styles['banner'] + ' flex-c h100vh text-center'}>
        <div></div>

        {/* 个性签名 开始 */}
        <div className={styles['banner-signature']}>
          <p>123</p>
        </div>
        {/* 个性签名 结束 */}

        {/* 底部icon 开始 */}
        <div>
          <DoubleRightOutlined className={styles['banner-icon'] + ' c-pointer'} rotate={90} onClick={() => scrollTo(window.innerHeight)} />
        </div>
        {/* 底部icon 结束 */}
      </div>
      {/* banner 结束 */}
    </>
  )
}

function scrollTo(value: number) {
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}

export default BannerComponent
