import { FC, useState, ChangeEvent } from 'react'
import styles from './index.module.scss'
import EditToolBar from '../../../components/EditToolBar'
import { Space, Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LeftOutlined, EditOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

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

const TitleElem: FC = () => {
  // const { title } = useGetPageInfo()
  const [editState, SetEditState] = useState(false)
  const dispatch = useDispatch()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
  }

  if (editState) {
    return (
      <Input
        value={''}
        onBlur={() => SetEditState(false)}
        onPressEnter={() => SetEditState(false)}
        onChange={handleChange}
      />
    )
  }

  return (
    <Space  align="center">
      {/* <Title level={5}>标题</Title> */}
      <span>标题</span>
      <Button icon={<EditOutlined />} type='text' onClick={() => SetEditState(true)}></Button>
    </Space>
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

            <TitleElem />
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
