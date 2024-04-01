import { FC } from "react";
import {Button, Typography} from 'antd'
import styles from './Home.module.scss'
import {useNavigate} from 'react-router-dom'
import {MANAGE_INDEX_PATHNAME} from '../router'

const {Title, Paragraph} = Typography
const Home: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>somi</Title>
        <Paragraph>this is a easy question</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>start !</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
