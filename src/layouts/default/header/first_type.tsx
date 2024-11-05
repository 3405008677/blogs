import styles from './first_type.module.scss'

function first_type() {
  const list = [{ title: '主页' }, { title: '日志' }]

  return (
    <>
      <div className={styles.header}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default first_type
