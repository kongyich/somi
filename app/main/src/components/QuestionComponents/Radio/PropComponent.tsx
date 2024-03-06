import { FC, useEffect } from 'react'
import { Form, Input, Checkbox, Select, Space, Button } from 'antd'
import { nanoid } from 'nanoid'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { QuestionRadioPropsType, OptionType } from './interface'

const PropComponent: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {

  const { title, isVertical, value, options = [], onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isVertical, value, options })
  }, [title, isVertical, value, options])

  function handlerChange() {
    if (onChange == null) return

    const newValues = form.getFieldsValue() as QuestionRadioPropsType

    if (newValues.options) {
      newValues.options = newValues.options.filter(opt => !(opt.text == null))
    }

    const { options = [] } = newValues

    options.forEach(opt => {
      if (opt.value) return
      opt.value = nanoid(5)
    })

    onChange(newValues)
  }

  return (
    <Form
      layout='vertical'
      initialValues={{ title, isVertical, value, options }}
      disabled={disabled}
      form={form}
      onChange={handlerChange}
    >
      <Form.Item name="title" label="标题" rules={[{ required: true, message: "请输入标题" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="options">
          {
            (fields, { add, remove }) => (
              <>
                {
                  fields.map(({ key, name }, index) => {
                    return (
                      <Space key={key} align="baseline">
                        <Form.Item name={[name, 'text']} rules={[
                          { required: true, message: "请输入选项文字" },
                          {
                            validator(_, text) {
                              // const { options = [] } = form.getFieldsValue()
                              // let curIndex = options.findIndex((opt: OptionType) => opt.text === text)
                              // if (curIndex < 0) {
                              //   return Promise.resolve()
                              // } else {
                              //   return Promise.reject(new Error('和其他选项重复了'))
                              // }
                              const { options = [] } = form.getFieldsValue()
                              let num = 0
                              options.forEach((opt: OptionType) => {
                                if (opt.text === text) num++ // 记录 text 相同的个数，预期只有 1 个（自己）
                              })
                              if (num === 1) return Promise.resolve()
                              return Promise.reject(new Error('和其他选项重复了'))
                            },
                          }
                        ]}>
                          <Input placeholder='请输入选项文字' />
                        </Form.Item>
                        {/* 当前选项 删除按钮 */}
                        {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                      </Space>
                    )
                  })
                }

                {/* 添加选项 */}
                <Form.Item>
                  <Button
                    type="link"
                    onClick={() => add({ text: '', value: '' })}
                    icon={<PlusOutlined />}
                    block
                  >
                    添加选项
                  </Button>
                </Form.Item>
              </>
            )
          }
        </Form.List>
      </Form.Item>
      <Form.Item label="默认选中">
        <Select value={value} options={options.map(({ value, text }) => ({ value, label: text || '' }))}></Select>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
