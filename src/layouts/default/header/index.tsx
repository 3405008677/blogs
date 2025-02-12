import request from '~/axios'
import FirstType from './first_type/first_type'
import styles from './index.module.scss'

function header() {
  request.get('/user/router/list').then((result) => {
    console.log(result, 'result')
  })

  return (
    <>
      {/* 头部导航 第一种 开始 */}
      <div className={styles['content']}>
        <FirstType />
      </div>
      {/* 头部导航 第一种 结束 */}
    </>
  )
}

export default header
