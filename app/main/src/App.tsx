import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment } from './store/features/componentSlice'
// import { StateType } from './store'

const App: FC = () => {
  return <RouterProvider router={routerConfig}></RouterProvider>
  // const dispatch = useDispatch()
  // const num = useSelector<StateType>(state => state.component.num) as number

  // return (
  //   <div>
  //     <div>{ num }</div>
  //     <button onClick={() => dispatch(increment())}>+</button>
  //   </div>
  // )
}

export default App
