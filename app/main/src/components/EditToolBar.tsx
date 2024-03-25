import { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined, UpOutlined, DownOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons'
import useGetComponentInfo from '../hooks/useGetComponentInfo'
import { removeSelectedComponent, changeComponentHidden, changeComponentLock, copySelectedComponent, pasteSelectedComponent, moveComponent } from '../store/features/componentSlice'

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

  // 隐藏
  function handleHidden() {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }))
  }

  // 锁定
  function handleLock() {
    dispatch(changeComponentLock({ fe_id: selectedId }))
  }

  // 复制
  function copy() {
    dispatch(copySelectedComponent())
  }

  // 粘贴
  function paste() {
    dispatch(pasteSelectedComponent())
  }

  // 上移
  function moveUp() {
    if (isFirst) return
    dispatch(moveComponent({ oldIndex: selectIndex, newIndex: selectIndex - 1 }))
  }

  // 下移
  function moveDown() {
    if (isLast) return
    dispatch(moveComponent({ oldIndex: selectIndex, newIndex: selectIndex + 1 }))
  }

  // 撤销
  function undo() {
    dispatch(UndoActionCreators.undo())
  }

  // 重做
  function redo() {
    dispatch(UndoActionCreators.redo())
  }

  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button shape='circle' icon={<DeleteOutlined />} onClick={handleDelete}></Button>
        </Tooltip>
        <Tooltip title="hidden">
          <Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
        </Tooltip>
        <Tooltip title="lock">
          <Button shape='circle' icon={<LockOutlined />} type={isLocked ? 'primary' : 'default'} onClick={handleLock}></Button>
        </Tooltip>
        <Tooltip title="copy">
          <Button shape="circle" icon={<CopyOutlined />} onClick={copy}></Button>
        </Tooltip>
        <Tooltip title="paste">
          <Button shape="circle" icon={<BlockOutlined />} onClick={paste} disabled={copiedComponent == null}></Button>
        </Tooltip>
        <Tooltip title="up">
          <Button shape="circle" icon={<UpOutlined />} onClick={moveUp}></Button>
        </Tooltip>
        <Tooltip title="down">
          <Button shape="circle" icon={<DownOutlined />} onClick={moveDown}></Button>
        </Tooltip>
        <Tooltip title="undo">
          <Button shape="circle" icon={<UndoOutlined />} onClick={undo}></Button>
        </Tooltip>
        <Tooltip title="redo">
          <Button shape="circle" icon={<RedoOutlined />} onClick={redo}></Button>
        </Tooltip>
      </Space>
    </div>
  )
}

export default EditToolBar
