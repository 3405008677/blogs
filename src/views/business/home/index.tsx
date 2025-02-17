// 首页
import styles from './index.module.scss'

import BannerComponent from './src/banner'

const home = () => {
  useEffect(() => {
    console.log('初始化 homne ')
  }, [])

  return (
    <>
      <div className={styles['home-page']}>
        {/* banner 开始 */}
        <BannerComponent />
        {/* banner 结束 */}
      </div>
    </>
  )
}

export default home
