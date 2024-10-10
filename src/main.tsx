import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 引入外部文件
import '/core/import'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
