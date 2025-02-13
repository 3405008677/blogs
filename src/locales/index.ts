import { zh_CN } from './zh_CN'
import { en_Us } from './en_Us'

// --------------------------------------------------------

let localeMap: LOCALE_MAP_INTERFACE = {
  'zh-CN': zh_CN,
  'en-Us': en_Us,
}

/**
 * 设置国际化只能在 hooks 中使用  哎
 * 下面是模板
 */
// import { useIntl } from 'react-intl'
// const intl = useIntl()
// const useIntls = (text: string) => {
//   return intl.formatMessage({ id: text })
// }

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
