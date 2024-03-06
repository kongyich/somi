import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { QuestionInfoPropsType } from './interface'

const { TextArea } = Input

const PropComponent: FC<QuestionInfoPropsType> = (props: QuestionInfoPropsType) => {

  const { title, desc, disabled, onChange } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, desc })
  }, [title, desc])

  function handleChange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout='vertical'
      form={form}
      initialValues={{ title, desc }}
      disabled={disabled}
      onChange={handleChange}
    >
      <Form.Item name="title" label="标题" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <TextArea />
      </Form.Item>
    </Form>
  )
}

export default PropComponent
