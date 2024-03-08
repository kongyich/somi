import { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined, UpOutlined, DownOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons'
import useGetComponentInfo from '../hooks/useGetComponentInfo'
import { removeSelectedComponent } from '../store/features/componentSlice'

const EditToolBar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, componentList, selectedComponent, copiedComponent } = useGetComponentInfo()
  const { isLocked } = selectedComponent || {}

  const length = componentList.length
  const selectIndex = componentList.findIndex(c => c.fe_id === selectedId)
  // 第一个
  const isFirst = selectIndex <= 0
  // 最后一个
  const isLast = selectIndex + 1 >= length
  // 删除
  function handleDelete() {
    dispatch(removeSelectedComponent())
  }

  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button shape='circle' icon={<DeleteOutlined />} onClick={handleDelete}></Button>
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
