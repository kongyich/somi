import { FC } from 'react'
import styles from './Login.module.scss'
import { Typography, Space, Form, Input, Checkbox, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { REGISTER_PATHNAME, MANAGE_INDEX_PATHNAME } from '../../router'

const { Title } = Typography
const { Password } = Input
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

const Login: FC = () => {
  const nav = useNavigate()
  const [form] = Form.useForm()

  function rememberUser(username: string, password: string) {
    localStorage.setItem(USERNAME_KEY, username)
    localStorage.setItem(PASSWORD_KEY, password)
  }

  function deleteUserFromStorage() {
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem(PASSWORD_KEY)
  }

  type FormValuesType = {
    username: string
    password: string
    remember: boolean
  }

  function onFinish(values: FormValuesType) {
    const { username, password, remember } = values

    if(remember) {
      rememberUser(username, password)
    } else {
      deleteUserFromStorage()
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}><UserAddOutlined /></Title>
          <Title level={2}>login</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="username"
            name="username"
            rules={[
              { required: true, message: 'username cannot be empty' },
              { type: 'string', min: 5, max: 20, message: 'username length must between 5 - 20' },
              { pattern: /^\w+$/, message: 'only support number/words/underline' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[
              { required: true, message: 'password cannot be empty' }
            ]}
          >
            <Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Rember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Space>
              <Button type='primary' htmlType="submit">log in</Button>
              <Link to={REGISTER_PATHNAME}>log up</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
