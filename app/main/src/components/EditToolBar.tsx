import { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined, UpOutlined, DownOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons'

const EditToolBar: FC = () => {
  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button shape='circle' icon={<DeleteOutlined />}></Button>
        </Tooltip>
        <Tooltip title="hidden">
          <Button shape='circle' icon={<EyeInvisibleOutlined />}></Button>
        </Tooltip>
        <Tooltip title="lock">
          <Button shape='circle' icon={<LockOutlined />}></Button>
        </Tooltip>
        <Tooltip title="copy">
          <Button shape="circle" icon={<CopyOutlined />}></Button>
        </Tooltip>
        <Tooltip title="paste">
          <Button shape="circle" icon={<BlockOutlined />}></Button>
        </Tooltip>
        <Tooltip title="up">
          <Button shape="circle" icon={<UpOutlined />}></Button>
        </Tooltip>
        <Tooltip title="down">
          <Button shape="circle" icon={<DownOutlined />}></Button>
        </Tooltip>
        <Tooltip title="undo">
          <Button shape="circle" icon={<UndoOutlined />}></Button>
        </Tooltip>
        <Tooltip title="redo">
          <Button shape="circle" icon={<RedoOutlined />}></Button>
        </Tooltip>
      </Space>
    </div>
  )
}

export default EditToolBar
