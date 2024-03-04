import { FC, useState, useEffect } from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import PageSetting from './PageSetting'
import ComponentProp from './ComponentProp'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

enum TAB_KEYS {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting'
}

const ConfigurePanel: FC = () => {

  const [activeKey, setActiveKey] = useState(TAB_KEYS.PROP_KEY)
  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) setActiveKey(TAB_KEYS.PROP_KEY)
    else setActiveKey(TAB_KEYS.SETTING_KEY)
  }, [selectedId])

  const changeTab = (key: string) => {
    console.log(key);
    if(key === 'prop') {
      setActiveKey(TAB_KEYS.PROP_KEY)
    } else {
      setActiveKey(TAB_KEYS.SETTING_KEY)
    }
    
  };

  const tabsItems = [
    {
      key: TAB_KEYS.PROP_KEY,
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: <ComponentProp />
    },
    {
      key: TAB_KEYS.SETTING_KEY,
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <PageSetting />
    }
  ]

  return <Tabs activeKey={activeKey} items={tabsItems} onChange={changeTab} />
}

export default ConfigurePanel
