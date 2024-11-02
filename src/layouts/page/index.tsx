/**
 * 主页面 的布局
 */
import { useLocation } from 'react-router-dom'
import { appStore } from '@/store'
import DefaultLayouts from '../default'

function App() {
  const location = useLocation()
  console.log(location, 'location')

  const loading = appStore((state) => state.loading)
  const setLoading = appStore((state) => state.setLoading)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000)
    return () => {
      clearTimeout(timer)
      setLoading(false)
    }
  }, [location])

  return (
    <>
      <div>
        <p>{loading ? '加载中' : '未加载'}</p>
        <DefaultLayouts />
      </div>
    </>
  )
}

export default App
