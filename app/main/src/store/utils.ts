import { ComponentInfoType, ComponentsStateType } from "./features/componentSlice";


/**
 * 插入新组件
 * @param draft 组件state
 * @param newComponent 新组件
 * @returns void
*/
export const insertNewComponent = (draft: ComponentsStateType, newComponent: ComponentInfoType) => {
  const { selectedId, componentList } = draft

  const index = componentList.findIndex(c => c.fe_id === selectedId)

  if(index < 0) {
    // 未选中任何组件
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }

  draft.selectedId = newComponent.fe_id
}

/**
 * @param fe_id 当前组件id
 * @param componentList 组件列表
 * @returns 
 * 
*/
export const getNextSelectedId = (fe_id: string, componentList: Array<ComponentInfoType>) => {
  // 过滤隐藏的组件
  const visibleComponentList = componentList.filter(c => !c.isHidden)
  const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)

  if(index < 0) return ''

  let newSelectedId = ''
  const length = visibleComponentList.length
  if(length <= 1) {
    // 组件长度就一个
    newSelectedId = ''
  } else {
    // 组件长度大于一个
    if(index + 1 === length) {
      // 要删除最后一个，就要选中上一个
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // 要删除的不是最后一个，删除以后，选中下一个
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}
