import { FC } from 'react'
import QuestionTitleConf from './Title'

export type ComponentConfType = {
  title: string
  type: string
  Component: FC
}

export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf],
  },
]
