import { FC } from 'react'
import styles from './styles/common.module.scss'
import { Typography, Empty, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import QuestionCard from '../../components/QuestionCard'
import ListPagination from '../../components/ListPagination'

const { Title } = Typography
const Star: FC = () => {

  const loading = false
  const total = 10
  const list = [
    {
      _id: '12123',
      title: 'test2',
      isStar: true,
      isPublished: true,
      answerCount: 23,
      createdAt: '2024-12-22'
    }
  ]

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>star questions</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {list.length === 0 && <Empty description="暂无数据" />}
        {
          list.length > 0 &&
          list.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })
        }
      </div>
      <div className={styles.footer}>
        <ListPagination total={total} />
      </div>
    </>
  )
}

export default Star
