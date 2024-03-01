
export type LevelType = 1 | 2 | 3

export type QuestionTitlePropsType = {
  text?: string,
  level?: LevelType,
  isCenter?: boolean,

  onChange?: (newProps: QuestionTitlePropsType) => void,
  disabled?: boolean
}

export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false,
}
