export type QuestionTextareaPropstype = {
  title?: string
  placeholder?: string

  onChange?: (newProps: QuestionTextareaPropstype) => void
  disabled?: boolean
}
export const QuestionTextareaDefaultProps: QuestionTextareaPropstype = {
  title: "输入框标题",
  placeholder: "请输入..."
}
