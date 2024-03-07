import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import produce from 'immer'
import { ComponentPropsType } from '../../components/QuestionComponents'
import { insertNewComponent } from "../utils";

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
    addComponent: (draft: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload
      insertNewComponent(draft, newComponent)
    },
    changeSelectedId: (draft: ComponentsStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
    },
    changeComponentProps: (draft: ComponentsStateType,
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
    }
  }
})

export const { addComponent, changeSelectedId, changeComponentProps } = componentsSlice.actions

export default componentsSlice.reducer
