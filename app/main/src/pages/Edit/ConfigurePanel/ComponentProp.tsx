import { FC } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfByType } from '../../../components/QuestionComponents'

const ComponentProp: FC = () => {

  const { selectedComponent } = useGetComponentInfo()
  if (selectedComponent == null) return

  const { type, props, isLocked, isHidden } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return 
  const { PropComponent } = componentConf
  
  return <PropComponent {...props} disabled={isLocked || isHidden} />
}

export default ComponentProp
