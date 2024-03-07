export type QuestionParagraphPropsType = {
  text?: string
  isCenter?: boolean

  onChange?: (props: QuestionParagraphPropsType) => void
  disabled?: boolean
}

export const QuestionParagraphDefaultProps = {
  text: "一行段落",
  isCenter: false
}
