import { create } from 'zustand'

interface APP_STORE_TYPE {
  locale: LOCALE_MAP_TYPE // 当前语言 默认中文
  setLocale: (text: LOCALE_MAP_TYPE) => void // 设置语言
  loading: boolean // 全局加载框
  setLoading: (value: boolean) => void // 设置全局加载框
  scrollContorllerHeight: number // scroll控制器高度
  setScrollContorllerHeight: (value: number) => void // 设置scroll控制器高度
}

// import { appStore } from '@/store'
const appStore = create<APP_STORE_TYPE>((set) => ({
  locale: 'zh-CN', // 当前语言 默认中文
  setLocale: (text) => set({ locale: text }), // 设置语言
  loading: false, // 全局加载框
  setLoading: (value) => set({ loading: value }), // 设置全局加载框
  scrollContorllerHeight: 0, // scroll控制器高度
  setScrollContorllerHeight: (value) => set({ scrollContorllerHeight: value }), // 设置scroll控制器高度
}))

export default appStore
