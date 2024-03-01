import { FC } from 'react'
import { nanoid } from 'nanoid'
import { componentConfGroup } from '../../../components/QuestionComponents'
import { ComponentConfType } from '../../../components/QuestionComponents'
import styles from './styles/componentLib.module.scss'
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { addComponent } from '../../../store/features/componentSlice';

const genComponent = (c: ComponentConfType) => {
  const { title, type, Component, defaultProps } = c
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addComponent({
      fe_id: nanoid(),
      title,
      type,
      props: defaultProps,
    }))
  }

  return (
    <div key={type} className={styles.wrapper} onClick={handleClick}>
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
        componentConfGroup.map(group => {
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
