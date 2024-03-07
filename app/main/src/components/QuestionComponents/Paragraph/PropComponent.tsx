import { FC, useEffect } from 'react'
import { Form, Input, Checkbox } from 'antd'
import { QuestionParagraphPropsType } from './interface'

const { TextArea } = Input

const PropComponent: FC<QuestionParagraphPropsType> = (props) => {
  const { text, isCenter, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, isCenter })
  }, [text, isCenter])

  function handleChange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout='vertical'
      initialValues={{ text, isCenter }}
      onValuesChange={handleChange}
      form={form}
      disabled={disabled}
    >
      <Form.Item name="text" label="段落内容" rules={[{ required: true, message: "请输入段落内容" }]}>
        <TextArea />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName='checked'>
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
