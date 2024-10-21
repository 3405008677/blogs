import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 国际化
import { IntlProvider } from 'react-intl'
import { appStore } from '@/store'
import { getLocaleMessageMap } from './locales/index'

// 引入外部文件
import '/core/import'

// 引入unocss
import 'uno.css'

import Router from '@/router'

console.log(import.meta.env.VITE_BASE_URL, 'import.meta.env.VITE_BASE_URL')

/**
 * 看不懂  看不懂  这俩有区别吗  擦  不这样还不让 使用 zustand了
 */

// createRoot(document.getElementById('root')!).render(
//   <IntlProvider locale={appStore((state) => state.locale)} messages={getLocaleMessageMap()}>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </IntlProvider>,
// )

createRoot(document.getElementById('root')!).render(<Main />)

function Main() {
  return (
    <>
      <IntlProvider locale={appStore((state) => state.locale)} messages={getLocaleMessageMap()}>
        <StrictMode>
          <Router />
        </StrictMode>
      </IntlProvider>
    </>
  )
}
