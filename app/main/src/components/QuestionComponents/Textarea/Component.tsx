import { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionTextareaPropstype, QuestionTextareaDefaultProps } from './interface'

const { Paragraph } = Typography
const { TextArea } = Input

const Component: FC<QuestionTextareaPropstype> = (props: QuestionTextareaPropstype) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder} />
      </div>
    </div>
  )
}

export default Component
