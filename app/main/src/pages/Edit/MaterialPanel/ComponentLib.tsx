import { FC } from 'react'
import { componentConfGroup } from '../../../components/QuestionComponents'
import { ComponentConfType } from '../../../components/QuestionComponents'
import styles from './styles/componentLib.module.scss'
import { Typography } from 'antd';

const genComponent = (c: ComponentConfType) => {
  const { type, Component } = c

  return (
    <div key={type} className={styles.wrapper}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

const Lib: FC = () => {
  return (
    <>
      {
        componentConfGroup.map((group, index) => {
          const { groupId, groupName, components } = group
          const { Title } = Typography;
          return (
            <div key={groupId}>
              <Title level={3} style={{ fontSize: '16px', marginTop: '20px' }}>
                {groupName}
              </Title>
              <div>
                {
                  components.map(c => genComponent(c))
                }
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Lib
