import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { QuestionTextareaPropstype } from './interface'

const PropComponent: FC<QuestionTextareaPropstype> = (props: QuestionTextareaPropstype) => {

  const { title, placeholder, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  function changeValue() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, placeholder }}
      onValuesChange={changeValue}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label='Placeholder' name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropComponent
