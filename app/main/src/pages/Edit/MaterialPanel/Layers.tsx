import { FC, useState, ChangeEvent } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { useDispatch } from 'react-redux'
import { message, Input, Space, Button } from 'antd'
import styles from './styles/Layers.module.scss'
import classNames from 'classnames'
import { changeComponentHidden, changeComponentLock, changeComponentTitle, changeSelectedId, moveComponent } from '../../../store/features/componentSlice'
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import SortableContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'

const Layers: FC = () => {
  const { selectedId, componentList } = useGetComponentInfo()
  const dispatch = useDispatch()

  // 记录当前正在修改标题的组件
  const [changingTitleId, setChangingTitleId] = useState('')

  function handleTitleClick(fe_id: string) {
    const curCom = componentList.find(c => c.fe_id === fe_id)

    if (curCom && curCom.isHidden) {
      message.info('不能选中隐藏的组件')
      return
    }

    if (fe_id !== selectedId) {
      // 当前组件未被选中，执行选中
      dispatch(changeSelectedId(fe_id))
      setChangingTitleId('')
      return
    }

    setChangingTitleId(fe_id)
  }

  function changeHidden(fe_id: string, isHidden: boolean) {
    dispatch(changeComponentHidden({ fe_id, isHidden }))
  }

  function changeLocked(fe_id: string) {
    dispatch(changeComponentLock({ fe_id }))
  }

  function changeTitle(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
    if (!selectedId) return
    dispatch(changeComponentTitle({ fe_id: selectedId, newTitle }))
  }

  const componentListWithId = componentList.map(c => {
    return {
      id: c.fe_id,
      ...c
    }
  })

  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }))
  }

  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      {
        componentList.map(c => {
          const { fe_id, title, isHidden, isLocked } = c

          const titleDefaultClassName = styles.title
          const selectedClassName = styles.selected

          const titleClassName = classNames({
            [titleDefaultClassName]: true,
            [selectedClassName]: fe_id === selectedId
          })

          return (
            <SortableItem key={fe_id} id={fe_id}>
              <div className={styles.wrapper}>
                <div className={titleClassName} onClick={() => handleTitleClick(fe_id)}>
                  {
                    fe_id === changingTitleId && (
                      <Input
                        value={title}
                        onChange={changeTitle}
                        onPressEnter={() => setChangingTitleId('')}
                        onBlur={() => setChangingTitleId('')}
                      />
                    )
                  }
                  {
                    changingTitleId !== fe_id && title
                  }
                </div>

                <div className={styles.handler}>
                  <Space>
                    <Button
                      size="small"
                      shape="circle"
                      className={!isHidden ? styles.btn : ''}
                      icon={<EyeInvisibleOutlined />}
                      type={isHidden ? 'primary' : 'text'}
                      onClick={() => changeHidden(fe_id, !isHidden)}
                    />
                    <Button
                      size="small"
                      shape="circle"
                      className={!isLocked ? styles.btn : ''}
                      icon={<LockOutlined />}
                      type={isLocked ? 'primary' : 'text'}
                      onClick={() => changeLocked(fe_id)}
                    />
                  </Space>
                </div>
              </div>
            </SortableItem>
          )

        })
      }
    </SortableContainer>
  )
}

export default Layers
