import { FC } from "react";
// import IndexTable from '../components/indexTable'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import {MANAGE_INDEX_PATHNAME} from '../router'

const Home: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
        开始使用
      </Button>
      {/* <IndexTable /> */}
    </div>
  )
}

export default Home
