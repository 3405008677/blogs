import { create } from 'zustand'

interface APP_STORE_TYPE {
  locale: LOCALE_MAP_TYPE
  loading:boolean
  setLocale: (text: LOCALE_MAP_TYPE) => void
  setLoading:(value:boolean)=>void
}

// import { appStore } from '@/store'
const appStore = create<APP_STORE_TYPE>((set) => ({
  locale: 'zh-CN', // 当前语言 默认中文
  loading:false, // 全局加载框
  setLocale: (text) => set({ locale: text }), // 设置语言
  setLoading: (value) => set({ loading: value }), // 设置语言
}))

export default appStore
