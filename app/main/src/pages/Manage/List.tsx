import { FC, useEffect, useRef, useState, useMemo } from 'react'
import styles from './styles/common.module.scss'
import { Typography, Empty, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import QuestionCard from '../../components/QuestionCard'
import { useDebounceFn } from 'ahooks'

const { Title } = Typography

const List: FC = () => {

  const [started, setStarted] = useState(false) // 是否已经开始加载（防抖，有延迟时间）

  const [list, setList] = useState([
    {
      _id: 213123,
      title: "第一个",
      isStar: true,
      isPublished: false,
      answerCount: 12,
      createdAt: '2024-03-24',
    }
  ])
  const containerRef = useRef<HTMLDivElement>(null)
  const [total, setTotal] = useState(0)
  const haveMoreData = total > list.length // 有没有更多的、为加载完成的数据

  const { run: tryLoadMore } = useDebounceFn(() => {
    const elem = containerRef.current
    if (elem == null) return
    const domRect = elem.getBoundingClientRect()
    if (domRect == null) return
    const { bottom } = domRect

    if (bottom <= document.body.clientHeight) {
      // 开始加载数据
      setStarted(true)
    }
  }, {
    wait: 1000
  })

  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener("scroll", tryLoadMore)
    }

    return () => {
      window.removeEventListener("scroll", tryLoadMore)
    }
  }, [haveMoreData])

  const LoadMoreContentElem = useMemo(() => {
    if (!started) return <Spin />
    if (total === 0) return <Empty description="暂无数据" />
    if (!haveMoreData) return <span>没有更多了...</span>
    return <span>开始加载下一页</span>
  }, [started, haveMoreData])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>my question</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/**列表*/}
        {
          list.length > 0 && list.map((q: any) => {
            const { _id } = q
            return (
              <QuestionCard key={_id} {...q} />
            )
          })
        }
      </div>
      <div className={styles.footer}>
        <div ref={containerRef}>{LoadMoreContentElem}</div>
      </div>
    </>
  )
}

export default List
