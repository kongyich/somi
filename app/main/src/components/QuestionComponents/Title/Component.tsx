import { FC } from 'react'
import { Typography } from 'antd';
import { QuestionTitlePropsType, QuestionTitleDefaultProps, LevelType } from './interface'

const { Title } = Typography;

const QuestionTitle: FC<QuestionTitlePropsType> = (props: QuestionTitlePropsType) => {
  const { text = '', level = 1, isCenter = false } = { ...QuestionTitleDefaultProps, ...props }

  const levelToFontSize = {
    1: '24px',
    2: '20px',
    3: '16px'
  } as const

  type GetFontSizeReturn = typeof levelToFontSize[keyof typeof levelToFontSize]

  const getFontSize = (level: LevelType): GetFontSizeReturn => levelToFontSize[level]

  return (
    <>
      <Title
        level={level}
        style={{
          textAlign: isCenter ? 'center' : 'start',
          fontSize: getFontSize(level),
        }}
      >
        {text}
      </Title>
    </>
  )
}

export default QuestionTitle
