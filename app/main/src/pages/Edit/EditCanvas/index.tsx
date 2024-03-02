import { FC } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { ComponentInfoType, changeSelectedId } from '../../../store/features/componentSlice'
import styles from './styles/index.module.scss'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import { useDispatch } from 'react-redux'

const EditCanvas: FC = () => {
  const { componentList } = useGetComponentInfo()
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
            return (
              <div onClick={e => handleClick(e, fe_id)}>
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
