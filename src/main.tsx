import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 国际化
import { IntlProvider } from 'react-intl'
import { locale, localeMessageMap } from './locales/index'

// 引入外部文件
import '/core/import'

// 引入unocss
import 'uno.css'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <IntlProvider locale={locale} messages={localeMessageMap as any}>
    <StrictMode>
      <App />
    </StrictMode>
  </IntlProvider>,
)
