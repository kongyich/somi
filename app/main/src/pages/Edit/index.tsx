import { FC } from 'react'
import EditHeader from './EditHeader/index'
import EditCanvas from './EditCanvas'
import ConfigurePanel from './ConfigurePanel'
import MaterialPanel from './MaterialPanel'
import styles from './index.module.scss'
import { useTitle } from 'ahooks'

const Edit: FC = () => {

  useTitle("编辑器")

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          {/* 左侧物料组件 */}
          <div className={styles.left}>
            <MaterialPanel />
          </div>

          {/* 编辑器 */}
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas />
            </div>
          </div>

          {/* 表单属性 */}
          <div className={styles.right}>
            <ConfigurePanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
