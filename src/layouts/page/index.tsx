/**
 * 主页面 的布局
 */
import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'

// 国际化
import { IntlProvider } from 'react-intl'
import { appStore } from '@/store'
import { getLocaleMessageMap } from '@/locales'

function App() {
  const locale = appStore((state) => state.locale)

  useEffect(() => {
    console.log('语言被改变了locale', locale)
  }, [locale])

  return (
    <>
      <IntlProvider locale={locale} messages={getLocaleMessageMap(locale)}>
        <div>
          {/* 全局 Loading 组件 */}
          <Loading />
          {/* 全局 Loading 组件 */}

          {/* 默认布局 */}
          <DefaultLayouts />
          {/* 默认布局 */}
        </div>
      </IntlProvider>
    </>
  )
}

export default App
