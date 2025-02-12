import { zh_CN } from './zh_CN'
import { en_Us } from './en_Us'

import { appStore } from '@/store'

import type { IntlShape } from 'react-intl'
import { useIntl } from 'react-intl'

// --------------------------------------------------------

let localeMap: LOCALE_MAP_INTERFACE = {
  'zh-CN': zh_CN,
  'en-Us': en_Us,
}

/**
 * 获取当前语言
 * @returns 返回当前语言
 */
export function getLocale(): LOCALE_MAP_TYPE {
  let locale = navigator.language as LOCALE_MAP_TYPE
  // 判断自身是否存在对于的语言 如果不存在 则默认是中文
  if (!localeMap.hasOwnProperty(locale)) return 'zh-CN'
  return locale
}

/**
 * 获取对于语言的国际化数据
 * @param text 国际化类型 例如 'zh_CN' | 'en_Us'
 */
export function getLocaleMessageMap(locale: LOCALE_MAP_TYPE): any {
  return localeMap[locale]
}

/**
 * 设置国际化 ——————失效
 * @param text 国际化类型 例如 'zh_CN' | 'en_Us'
 */
export function setLocal(text: LOCALE_MAP_TYPE) {
  const setLocale = appStore((state) => state.setLocale)
  setLocale(text)
}

/**
 * 使用国际化 （封装一层）
 */
let intl: IntlShape
// import { useIntls } from "@/locales"
export function useIntls(text: string) {
  if (!intl) intl = useIntl()
  return intl.formatMessage({ id: text })
}
