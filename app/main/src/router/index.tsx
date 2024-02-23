import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/mainLayout'
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
      },
      {
        path: '/edit',
        element: <Edit />,
      }
    ]
  }
])

export default router
