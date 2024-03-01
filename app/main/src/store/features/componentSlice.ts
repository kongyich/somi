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
    // increment: state => {
    //   state.num += 1
    // },

    addComponent: (draft: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload
      insertNewComponent(draft, newComponent)
    }
  }
})

export const { addComponent } = componentsSlice.actions

export default componentsSlice.reducer
