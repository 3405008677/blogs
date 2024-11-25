import styles from './index.module.scss'
function footer() {
  return (
    <>
      {/* 页脚 开始 */}
      <div className={styles['content'] + 'text-center'}>
        <div></div>
        <p className="text-center">©2024 - 2024 By BLOG | PQJ</p>
      </div>
      {/* 页脚 结束 */}
    </>
  )
}

export default footer
