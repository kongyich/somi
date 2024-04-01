import { FC } from 'react'
import { Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { LOGIN_PATHNAME } from '../router'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const { username, nickname } = {
    username: 'gua',
    nickname: 'toutou'
  }

  function logout() {
    message.success('success')
    nav(LOGIN_PATHNAME)
  }

  const Login = <Link to={LOGIN_PATHNAME}>Log in</Link>

  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        log out
      </Button>
    </>
  )

  return <div>{username ? UserInfo : Login}</div>
}

export default UserInfo
