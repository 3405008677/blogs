import React from 'react'
import { Modal } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import styles from './index.module.scss'
import { appStore } from '@/store'

import { useIntl } from 'react-intl'
import { Divider } from 'antd'
import { message } from 'antd'
export interface LanguageComponentType {
  showModal: () => void
}

// 使用远程 阿里图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4064047_r7twpig6947.js',
})

const LanguageComponent = forwardRef<LanguageComponentType>((props, ref) => {
  const [messageApi, contextHolder] = message.useMessage()

  const intl = useIntl()
  const useIntls = (text: string) => {
    return intl.formatMessage({ id: text })
  }

  const locale = appStore((state) => state.locale)
  const prevLocaleRef = useRef(locale)
  useEffect(() => {
    if (locale !== prevLocaleRef.current) {
      messageApi.open({ type: 'success', content: useIntls('改变语言成功') })
      prevLocaleRef.current = locale
    }
  }, [locale])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  /**
   * 设置国际化语言
   * @param text 国际化
   */
  const setLocale = appStore((state) => state.setLocale)

  //   暴露方法
  useImperativeHandle(ref, () => ({
    showModal,
  }))

  // 语言选项数据
  const languageOptions = [
    { key: 'zh-CN', icon: 'icon-zhongwen', label: '中文' },
    { key: 'en-US', icon: 'icon-meiguoguoqi', label: '英语' },
    { key: 'en-GB', icon: 'icon-yingguo', label: '英语' },
    { key: 'ja-JP', icon: 'icon-riben', label: '日语' },
    { key: 'pt-PT', icon: 'icon-putaoya', label: '葡萄牙语' },
    { key: 'es-ES', icon: 'icon-xibanya', label: '西班牙语' },
    { key: 'hi-IN', icon: 'icon-yidali', label: '印度语' },
    { key: 'fr-FR', icon: 'icon-faguo', label: '法语' },
    { key: 'de-DE', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE1', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE2', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE3', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE4', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE5', icon: 'icon-deguo', label: '德语' },
    { key: 'de-DE6', icon: 'icon-deguo', label: '德语' },
  ]

  return (
    <>
      {contextHolder}
      <Modal style={{ top: 40 }} title={useIntls('国际化')} open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.content}>
          {languageOptions.map((option, index) => (
            <React.Fragment key={option.key}>
              <div key={option.key} className={styles.items} onClick={() => setLocale(option.key as any)}>
                <div>
                  <IconFont className="height-30px" type={option.icon} />
                  <p>{useIntls(option.label)}</p>
                </div>
              </div>
              {index < languageOptions.length - 1 && <Divider style={{ margin: '4px 0px' }} />}
            </React.Fragment>
          ))}
        </div>
      </Modal>
    </>
  )
})

export default LanguageComponent
