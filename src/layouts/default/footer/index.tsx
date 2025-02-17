import styles from './index.module.scss'
function footer() {
  return (
    <>
      {/* 页脚 开始 */}
      <div className={styles['content'] + ' text-center'}>
        <div></div>
        <p className="text-center">©2024 - 2024 By BLOG | PQJ</p>
        <img className='w120px' src="/public/img/qzys.gif" alt="2025必将列入年入百万" title='2025必将列入年入百万' />
      </div>
      {/* 页脚 结束 */}
    </>
  )
}

export default footer
