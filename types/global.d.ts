/// <reference types="vite/client" />

export {}
declare global {
  type Recordable<T = any> = Record<string, T>
  // env list
  interface ViteEnv {
    VITE_PORT: number
    VITE_PROXY: [string, string][]
    VITE_PUBLIC_PATH: string
    VITE_DROP_CONSOLE: boolean
    VITE_HTTPS: boolean
  }

  interface ImportMetaEnv extends ViteEnv {}

  // 国际化类型
  interface LOCALE_MAP_INTERFACE extends Object {
    'zh-CN': Record<string, string>
    'en-Us': Record<string, string>
  }

  type LOCALE_MAP_TYPE = 'zh-CN' | 'en-Us'
}
declare global {
  const appStore: typeof import('@/store')['appStore']
  const userStore: typeof import('@/store')['userStore']
}
