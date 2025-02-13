// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 国际化
// import { IntlProvider } from 'react-intl'
// import { appStore } from '@/store'
// import { getLocaleMessageMap } from './locales/index'

// 引入外部文件
import '/core/import'

// 引入unocss
import 'uno.css'

import Router from '@/router'

console.log(import.meta.env.VITE_BASE_URL, 'import.meta.env.VITE_BASE_URL')

// 引入mock
import '../mock'

createRoot(document.getElementById('root')!).render(<Main />)

function Main() {
  // const locale = appStore((state) => state.locale)

  // useEffect(() => {
  //   console.log('语言被改变了locale', locale)
  // }, [locale])

  return (
    <>
      <Router />

      {/* <StrictMode>
        <Router />
      </StrictMode> */}

      {/* <IntlProvider locale={locale} messages={getLocaleMessageMap(locale)}>
        <Router />
      </IntlProvider> */}

      {/* <IntlProvider locale={locale} messages={getLocaleMessageMap(locale)}>
        <StrictMode>
          <Router />
        </StrictMode>
      </IntlProvider> */}
    </>
  )
}
