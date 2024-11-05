import { CSSTransition } from 'react-transition-group'
import { appStore } from '@/store'

import styles from './index.module.scss'

function Loading() {
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
      <CSSTransition
        in={loading}
        nodeRef={nodeRef}
        timeout={300}
        classNames="loading-transition"
        unmountOnExit
      >
        <div ref={nodeRef} className={styles['global-loading']}>
          <p>加载 Loading</p>
        </div>
      </CSSTransition>
    </>
  )
}

export default Loading
