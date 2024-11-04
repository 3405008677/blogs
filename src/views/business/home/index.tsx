// 首页
import { appStore } from '@/store'

function home() {
  const setLoading = appStore((state) => state.setLoading)
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <div>首页</div>
    </>
  )
}

export default home
