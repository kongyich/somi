import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Edit from '../pages/Edit/index'
import ManageLayout from '../layouts/ManageLayout'
import List from '../pages/Manage/List'
import Trash from '../pages/Manage/Trash'
import Star from '../pages/Manage/Star'

export const HOME_PATHNAME = '/'
// 登录
export const LOGIN_PATHNAME = '/login'
// 注册
export const REGISTER_PATHNAME = '/register'
// 首页
export const MANAGE_INDEX_PATHNAME = '/manage/list'

export function isLoginOrRegister(pathname: string) {
  if ([LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export function isNoNeedUserInfo(pathname: string) {
  if ([HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'trash',
            element: <Trash />
          },
          {
            path: 'star',
            element: <Star />
          }
        ]
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      }
    ]
  }
])

export default router
