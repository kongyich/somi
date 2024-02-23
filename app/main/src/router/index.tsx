import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Edit from '../pages/Edit/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit',
        element: <Edit />,
      }
    ]
  }
])

export default router
