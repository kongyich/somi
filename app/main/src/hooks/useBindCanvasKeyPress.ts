import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import { removeSelectedComponent } from '../store/features/componentSlice'

/**
 * 判断 activeElem 是否合法
 */
function isActiveElementValid() {
  const activeElem = document.activeElement

  // // 没有增加 dnd-kit 之前
  if (activeElem === document.body) return true // 光标没有 focus 到 input

  // 增加了 dnd-kit 以后
  // if (activeElem === document.body) return true
  // if (activeElem?.matches('div[role="button"]')) return true

  return false
}

export default function useBindCanvasKeyPress() {
  const dispatch = useDispatch()
  // 删除组件
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) return
    dispatch(removeSelectedComponent())
  })
}
