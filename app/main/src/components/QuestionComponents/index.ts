import { FC } from 'react'
import QuestionTitleConf from './Title'
import { QuestionTitlePropsType } from './Title/interface'

export type ComponentPropsType = QuestionTitlePropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>,
  PropComponent: FC<ComponentPropsType>,
  defaultProps: ComponentPropsType
}

const componentConfList: Array<ComponentConfType> = [
  QuestionTitleConf
]

export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf],
  },
]

export const getComponentConfByType = (type: string) => {
  return componentConfList.find(c => c.type === type)
}
