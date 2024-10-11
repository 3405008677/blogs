// 判断字符串是否存在中文
// import { containsChinese } from "@/utils"

/**
 * 字符串转数组，根据 空格 回车 Tab
 * import { replaceArray } from "@/utils"
 *
 * 数组去重
 * import { replaceArray } from "@/utils"
 *
 * 判断当前是环境否是为微信
 * import { isWXChrome } from "@/utils"
 *
 * 获取当前日期
 * import { getNowFormatDate } from "@/utils"
 *
 * 校验邮箱
 * import { checkEmail } from "@/utils"
 *
 * 校验手机号
 * import { checkPhone } from "@/utils"
 */

// ————————————————————————————————————————————————————————————————

/**
 * 校验手机号
 * @phone 手机号
 * @required
 */
export function checkPhone(phone: string, required = true) {
  if (!phone) {
    return required ? false : true
  } else {
    // 必须是1开头，第二位数字可以是0-9任意一个，总长为11
    let reg = /^1([0-9])\d{9}$/
    // 必须是1开头，第二位数字可以是3|5|6|7|8|9任意一个，总长为11
    // let reg = /^1([3|5|6|7|8|9])\d{9}$/;
    if (reg.test(phone)) {
      return true
    } else {
      return false
    }
  }
}
/**
 * 校验邮箱
 * @email 邮箱
 */
export function checkEmail(email: string) {
  let pattern =
    /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return pattern.test(email)
}

/**
 * 判断当前是环境否是为微信
 */
export function isWXChrome() {
  let info = navigator.userAgent.toLowerCase()
  return !/wxwork/i.test(info) && /MicroMessenger/i.test(info)
}

/**
 * 获取当前日期
 * @return yyyy-mm-dd
 */
export function getNowFormatDate() {
  let date = new Date(),
    year = date.getFullYear(), //获取完整的年份(4位)
    month: number | string = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
    strDate: number | string = date.getDate() // 获取当前日(1-31)
  if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
  if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0
  return `${year}-${month}-${strDate}`
}

/**
 * 判断字符串是否存在中文
 * @param str 需要检测的字符串
 * @returns 返回 Boolean 类型
 */
export function containsChinese(str: string) {
  // 匹配中文字符的正则表达式
  // [\u4e00-\u9fa5] 是基本汉字区块
  // \u3000-\u303f 是中日韩符号和标点
  // \uf900-\ufaff 是CJK兼容扩展A
  // \u3400-\u4dbf 是CJK扩展A
  // \u{20000}-\u{2A6DF} 是CJK扩展B, CJK扩展C, CJK扩展D, CJK扩展E, CJK扩展F, CJK统一表意符号扩展A, CJK统一表意符号扩展B, CJK统一表意符号扩展C, CJK统一表意符号扩展D, CJK兼容表意符号补充
  const regex = /[\u4e00-\u9fa5\u3000-\u303f\uf900-\ufaff\u3400-\u4dbf\u{20000}-\u{2A6DF}]+/u

  // 判断字符串是否包含匹配到的中文字符
  return regex.test(str)
}

/**
 *  字符串转数组，根据 空格 回车 Tab
 */
export function replaceArray(str: string): Array<string> {
  return str
    .split(/[\t\n\r ]+/)
    .map((item: string) => item.trim())
    .filter((item: string) => item !== '')
}
