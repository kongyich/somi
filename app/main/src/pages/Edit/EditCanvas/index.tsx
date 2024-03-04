import { FC } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { ComponentInfoType, changeSelectedId } from '../../../store/features/componentSlice'
import styles from './styles/index.module.scss'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

const EditCanvas: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()

  const genComponent = (componentInfo: ComponentInfoType) => {
    const { type, props } = componentInfo
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null

    const { Component } = componentConf
    return <Component {...props} />
  }

  function handleClick(event: MouseEvent, id: string) {
    event.stopPropagation() // 阻止冒泡
    dispatch(changeSelectedId(id))
  }
  return (
    <>
      <div className={styles.canvas}>
        {
          componentList.map(c => {
            const { fe_id } = c

            const wrapperDefaultClassName = styles['component-wrapper']
            const selectedClassName = styles.selected
            const wrapperClassName = classNames({
              [wrapperDefaultClassName]: true,
              [selectedClassName]: fe_id === selectedId,
            })

            return (
              <div className={wrapperClassName} key={fe_id} onClick={e => handleClick(e, fe_id)}>
                <div className={styles.component}>{genComponent(c)}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default EditCanvas
