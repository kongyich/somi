import { FC, useState } from 'react'
import { Segmented } from 'antd';
import Layers from './Layers';
import ComponentLib from './ComponentLib';

const MaterialPanel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState('组件库')
  return (
    <div style={{ padding: '20px 0' }}>
      <Segmented<string>
        options={['组件库', '图层']}
        block
        onChange={(value) => {
          setCurrentIndex(value)
        }}
      />

      <div>
        {
          currentIndex === '组件库' ? <ComponentLib /> : <Layers />
        }
      </div>
    </div>
  )
}

export default MaterialPanel
