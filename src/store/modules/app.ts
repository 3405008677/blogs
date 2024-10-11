import { create } from 'zustand'

interface APP_STORE_TYPE {
  locale: LOACLE_MAP_TYPE
  setLocale: (text: LOACLE_MAP_TYPE) => void
}

// import { appStore } from '@/store'
const appStore = create<APP_STORE_TYPE>((set) => ({
  locale: 'zh-CN', // 当前语言 默认中文
  setLocale: (text) => set({ locale: text }), // 设置语言
}))

export default appStore
