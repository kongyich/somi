import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'

const App: FC = () => {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
