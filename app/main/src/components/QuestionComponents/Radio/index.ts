import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionRadioDefaultProps } from './interface'
export * from './interface'

export default {
  title: '单选',
  type: 'QuestionRadio',
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps
}
