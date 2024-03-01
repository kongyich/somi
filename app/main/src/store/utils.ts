import { ComponentInfoType, ComponentsStateType } from "./features/componentSlice";


/**
 * 插入新组件
 * @param draft 组件state
 * @param newComponent 新组件
 * @returns void
*/
export const insertNewComponent = (draft: ComponentsStateType, newComponent: ComponentInfoType) => {
  const { selectId, componentList } = draft

  const index = componentList.findIndex(c => c.fe_id === selectId)

  if(index < 0) {
    // 未选中任何组件
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }

  draft.selectId = newComponent.fe_id
}
