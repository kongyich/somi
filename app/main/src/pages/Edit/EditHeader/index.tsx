import { FC } from 'react'
import styles from './index.module.scss'
import EditToolBar from '../../../components/EditToolBar'
import { Space, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

const SaveButton: FC = () => {
  return (
    <div>
      <Button>保存</Button>
    </div>
  )
}

const PublishButton: FC = () => {
  return (
    <div>
      <Button>发布</Button>
    </div>
  )
}

const EditHeader: FC = () => {

  const nav = useNavigate()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolBar />
        </div>
        <div className={styles.right}>
          <Space>
            <SaveButton />
            <PublishButton />
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
