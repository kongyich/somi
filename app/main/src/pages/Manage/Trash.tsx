import { FC, useState } from 'react'
import styles from './styles/common.module.scss'
import { Typography, Table, Tag, Button, Space, Modal, Spin, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal

const Trash: FC = () => {

  const loading = false
  // 保存选中的ID
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const list = [
    {
      title: 'test1',
      isPublished: true,
      answerCount: 2,
      createdAt: '2024-12-23'
    },
    {
      title: 'test2',
      isPublished: false,
      answerCount: 1,
      createdAt: '2024-12-01'
    }
  ]

  const tableColumns = [
    {
      title: 'title',
      dataIndex: 'title'
    },
    {
      title: 'hasPublish',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">published</Tag> : <Tag>unpublished</Tag>
      }
    },
    {
      title: 'question',
      dataIndex: 'answerCount'
    },
    {
      title: 'createTime',
      dataIndex: 'createdAt'
    },
  ]

  function recover() { }
  function deleteQuestion() { }

  function del() {
    confirm({
      title: '确认彻底删除该问卷？',
      icon: <ExclamationCircleOutlined />,
      content: '删除以后不可以找回',
      onOk: deleteQuestion,
    })
  }

  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button disabled={selectedIds.length === 0} onClick={recover}>Recover</Button>
          <Button disabled={selectedIds.length === 0} type='primary' onClick={del}>Deep Delete</Button>
        </Space>
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={q => q._id}
          rowSelection={{
            type: 'checkbox',
            onChange: selectedRowKeys => {
              setSelectedIds(selectedRowKeys as string[])
            },
          }}
        />
      </div>
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Trash</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {
          loading && (
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          )
        }
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}></div>
    </>
  )
}

export default Trash
