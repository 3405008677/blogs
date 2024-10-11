import { zh_CN } from './zh_CN'
import { en_Us } from './en_Us'

interface LOCALE_MAP_INTERFACE extends Object {
  zh_CN: Record<string, string>
  en_Us: Record<string, string>
}

type LOACLE_MAP_TYPE = 'zh_CN' | 'en_Us'

// --------------------------------------------------------

let localeMap: LOCALE_MAP_INTERFACE = {
  zh_CN: zh_CN,
  en_Us: en_Us,
}

let locale = getLocale()

let localeMessageMap = getLocaleMessageMap(locale)

/**
 * 获取当前语言
 * @returns 返回当前语言
 */
export function getLocale(): LOACLE_MAP_TYPE {
  let locale = navigator.language as LOACLE_MAP_TYPE
  // 判断自身是否存在对于的语言 如果不存在 则默认是中文
  if (!localeMap.hasOwnProperty(locale)) return 'zh_CN'
  return locale
}

/**
 * 获取对于语言的国际化数据
 * @param text 国际化类型 例如 'zh_CN' | 'en_Us'
 */
export function getLocaleMessageMap(text: LOACLE_MAP_TYPE): object {
  return localeMap[text]
}

export { locale, localeMessageMap }
