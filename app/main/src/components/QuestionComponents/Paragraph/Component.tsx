import { FC } from 'react'
import { Typography } from 'antd'
import { QuestionParagraphPropsType, QuestionParagraphDefaultProps } from './interface'

const { Paragraph } = Typography

const Component: FC<QuestionParagraphPropsType> = (props) => {
  const { text, isCenter } = { ...QuestionParagraphDefaultProps, ...props }

  const textList = text.split('\n')

  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'left' }}>
      {
        textList.map((t, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        ))
      }
    </Paragraph>
  )
}

export default Component
