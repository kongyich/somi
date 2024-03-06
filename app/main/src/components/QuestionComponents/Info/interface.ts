export type QuestionInfoPropsType = {
  title?: string,
  desc?: string,

  onChange?: (nreProps: QuestionInfoPropsType) => void,
  disabled?: boolean
}

export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
  title: '描述标题',
  desc: '描述内容'
}
