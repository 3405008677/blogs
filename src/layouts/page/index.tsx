/**
 * 主页面 的布局
 */
import DefaultLayouts from '../default'
import Loading from '@/views/common/loading'

// 国际化
import { IntlProvider } from 'react-intl'
import { appStore } from '@/store'
import { getLocaleMessageMap } from '@/locales'

//F
function App() {
  const locale = appStore((state) => state.locale)

  return (
    <>
      <IntlProvider locale={locale} messages={getLocaleMessageMap(locale)}>
        {/* 全局 Loading 组件 */}
        <Loading />
        {/* 全局 Loading 组件 */}

        {/* 默认布局 */}
        <DefaultLayouts />
        {/* 默认布局 */}
      </IntlProvider>
    </>
  )
}

export default App
