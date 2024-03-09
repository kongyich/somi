import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from 'immer'
import { ComponentPropsType } from '../../components/QuestionComponents'
import { getNextSelectedId, insertNewComponent } from "../utils";

export type ComponentInfoType = {
  fe_id: string,
  type: string,
  title: string,
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

export type ComponentsStateType = {
  selectedId: string,
  componentList: Array<ComponentInfoType>,
  copiedComponent: ComponentInfoType | null
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    addComponent: produce((draft: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload
      insertNewComponent(draft, newComponent)
    }),
    changeSelectedId: produce((draft: ComponentsStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
    }),
    changeComponentProps: produce((draft: ComponentsStateType,
      action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>) => {
      const { fe_id, newProps } = action.payload

      // 当前要修改属性的这个组件
      const curComp = draft.componentList.find(c => c.fe_id === fe_id)
      if (curComp) {
        curComp.props = {
          ...curComp.props,
          ...newProps,
        }
      }
    }),
    // 删除选中
    removeSelectedComponent: produce((draft: ComponentsStateType) => {
      const {componentList = [], selectedId: removeId} = draft

      // 新的选中id 重新计算
      const newSelectedId = getNextSelectedId(removeId, componentList)

      draft.selectedId = newSelectedId
      const index = componentList.findIndex(c => c.fe_id === removeId)
      componentList.splice(index, 1)
    }),

    // 隐藏组件
    changeComponentHidden: produce((draft: ComponentsStateType, action: PayloadAction<{ fe_id: string; isHidden: boolean }>) => {
      const { componentList = [] } = draft
      const { fe_id, isHidden } = action.payload

      // 重新计算 selectedId
      let newSelectedId = ''
      if(isHidden) {
        // 隐藏
        newSelectedId = getNextSelectedId(fe_id, componentList)
      } else {
        // 显示
        newSelectedId = fe_id
      }
      draft.selectedId = newSelectedId

      const curComp = componentList.find(c => c.fe_id === fe_id)
      if(curComp) {
        curComp.isHidden = isHidden
      }
    })
  }
})

export const { addComponent, changeSelectedId, changeComponentProps, removeSelectedComponent, changeComponentHidden } = componentsSlice.actions

export default componentsSlice.reducer
