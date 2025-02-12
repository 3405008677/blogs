import { Modal } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import styles from './index.module.scss'
import { useIntls } from '@/locales'
import { appStore } from '@/store'

export interface LanguageComponentType {
  showModal: () => void
}

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4064047_r7twpig6947.js',
})

const LanguageComponent = forwardRef<LanguageComponentType>((props, ref) => {
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

  return (
    <>
      <Modal title={useIntls('国际化')} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles['content']}>
          <div onClick={() => setLocale('zh-CN')}>
            <IconFont type="icon-zhongwen" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-meiguoguoqi" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-yingguo" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-riben" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-putaoya" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-xibanya" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-yidali" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-faguo" />
          </div>
          <div onClick={() => setLocale('en-Us')}>
            <IconFont type="icon-deguo" />
          </div>
        </div>
      </Modal>
    </>
  )
})

export default LanguageComponent
