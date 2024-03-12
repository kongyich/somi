import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { useDispatch } from 'react-redux'
import { resetPageInfo } from '../../../store/features/pageInfoSlice'

const { TextArea } = Input

const PageSetting: FC = () => {

  const pageInfo = useGetPageInfo()
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [pageInfo])

  function handleChange() {
    dispatch(resetPageInfo(form.getFieldsValue()))
  }
  return (
    <Form
      layout='vertical'
      initialValues={pageInfo}
      form={form}
      onValuesChange={handleChange}
    >
      <Form.Item name="title" label="问卷标题" rules={[{ required: true, message: '请输入标题' }]}>
        <Input placeholder='请输入问卷标题' />
      </Form.Item>
      <Form.Item name="desc" label="问卷描述">
        <TextArea placeholder='请输入问卷描述...' />
      </Form.Item>
      <Form.Item name="js" label="脚本代码">
        <TextArea placeholder='请输JS 代码...' />
      </Form.Item>
      <Form.Item name="css" label="样式代码">
        <TextArea placeholder='请输入CSS 代码...' />
      </Form.Item>
    </Form>
  )
}

export default PageSetting
