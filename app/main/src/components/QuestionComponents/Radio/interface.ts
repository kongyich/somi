export type OptionType = {
  value: string,
  text: string
}

export type QuestionRadioPropsType = {
  title?: string,
  isVertical?: boolean,
  value?: string,
  options?: OptionType[],

  onChange?: (newProps: QuestionRadioPropsType) => void
  disabled?: boolean
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: "单选标题",
  isVertical: false,
  value: "",

  options: [
    {
      value: 'item1',
      text: '单选一'
    },
    {
      value: 'item2',
      text: '单选二'
    },
    {
      value: 'item3',
      text: '单选三'
    }
  ]
}
