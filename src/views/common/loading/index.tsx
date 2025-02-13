import { CSSTransition } from 'react-transition-group'
import { appStore } from '@/store'

import styles from './index.module.scss'

import { useIntl } from 'react-intl'

function Loading() {
  const intl = useIntl()
  const useIntls = (text: string) => {
    return intl.formatMessage({ id: text })
  }

  const loading = appStore((state) => state.loading)
  const nodeRef = useRef(null)

  useEffect(() => {
    console.log('加载 Loading', nodeRef)
    return () => {
      console.log('卸载 Loading')
    }
  }, [])

  return (
    <>
      {/* false 隐藏组件  true 显示组件 */}
      <CSSTransition in={loading} nodeRef={nodeRef} timeout={300} classNames="loading-transition" unmountOnExit>
        <div ref={nodeRef} className={styles['global-loading']}>
          <p>{useIntls('加载中')}</p>
        </div>
      </CSSTransition>
    </>
  )
}

export default Loading
