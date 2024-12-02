import { create } from 'zustand'

// 头部导航配置信息
interface HEADER_CONFIG_TYPE {
  mouseWheelDirection?: 'down' | 'up' // 鼠标滚轮方向  向下 | 向上
  type?: 'first' // 当前头部类型
}

interface APP_STORE_TYPE {
  locale: LOCALE_MAP_TYPE // 当前语言 默认中文
  setLocale: (text: LOCALE_MAP_TYPE) => void // 设置语言

  loading: boolean // 全局加载框
  setLoading: (value: boolean) => void // 设置全局加载框

  scrollContorllerHeight: number // scroll控制器高度
  setScrollContorllerHeight: (value: number) => void // 设置scroll控制器高度

  headerConfig: HEADER_CONFIG_TYPE // 头部导航配置信息
  setHeaderConfigItem: (key: string, value: any) => void // 改变头部导航配置信息中的某一个值
}

// import { appStore } from '@/store'
const appStore = create<APP_STORE_TYPE>((set) => ({
  locale: 'zh-CN', // 当前语言 默认中文
  setLocale: (text) => set({ locale: text }), // 设置语言

  loading: false, // 全局加载框
  setLoading: (value) => set({ loading: value }), // 设置全局加载框

  scrollContorllerHeight: 0, // scroll控制器高度
  setScrollContorllerHeight: (value) => {
    set((state) => {
      // 如果 保存的高度 > 当前的高度 = 向上  || 保存的高度 < 当前的高度 = 向下
      if (state.scrollContorllerHeight > value) {
        return {
          scrollContorllerHeight: Number(value),
          headerConfig: { ...state.headerConfig, mouseWheelDirection: 'up' },
        }
      } else if (state.scrollContorllerHeight < value) {
        return {
          scrollContorllerHeight: Number(value),
          headerConfig: { ...state.headerConfig, mouseWheelDirection: 'down' },
        }
      } else {
        return { scrollContorllerHeight: Number(value) }
      }
    })
  }, // 设置scroll控制器高度

  // 头部导航配置信息
  headerConfig: {
    mouseWheelDirection: 'up',
    type: 'first',
  },
  setHeaderConfigItem: (key, value) => {
    set((state) => ({
      ...state,
      headerConfig: {
        ...state.headerConfig,
        [key]: value,
      },
    }))
  },
}))

export default appStore
