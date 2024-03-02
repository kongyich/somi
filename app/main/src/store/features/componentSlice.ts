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
    }
  }
})

export const { addComponent, changeSelectedId } = componentsSlice.actions

export default componentsSlice.reducer
