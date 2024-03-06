import { FC } from 'react'
import QuestionTitleConf, { QuestionTitlePropsType } from './Title'
import QuestionInputConf, { QuestionInputPropsType } from './Input'
import QuestionTextareaConf, { QuestionTextareaPropstype } from './Textarea'
import QuestionInfoConf, { QuestionInfoPropsType } from './Info'
import QuestionRadioConf, { QuestionRadioPropsType } from './Radio'

export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType & QuestionTextareaPropstype & QuestionInfoPropsType & QuestionRadioPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>,
  PropComponent: FC<ComponentPropsType>,
  defaultProps: ComponentPropsType
}

// 编辑器主视角获取列表
const componentConfList: Array<ComponentConfType> = [
  QuestionTitleConf,
  QuestionInputConf,
  QuestionTextareaConf,
  QuestionInfoConf,
  QuestionRadioConf
]

export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionInfoConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionTextareaConf, QuestionRadioConf],
  },
]

export const getComponentConfByType = (type: string) => {
  return componentConfList.find(c => c.type === type)
}
