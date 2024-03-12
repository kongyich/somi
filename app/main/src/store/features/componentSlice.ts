import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from 'immer'
import cloneDeep from 'lodash.clonedeep'
import { arrayMove } from '@dnd-kit/sortable'
import { ComponentPropsType } from '../../components/QuestionComponents'
import { getNextSelectedId, insertNewComponent } from "../utils";
import { nanoid } from "nanoid";

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
      const { componentList = [], selectedId: removeId } = draft

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
      if (isHidden) {
        // 隐藏
        newSelectedId = getNextSelectedId(fe_id, componentList)
      } else {
        // 显示
        newSelectedId = fe_id
      }
      draft.selectedId = newSelectedId

      const curComp = componentList.find(c => c.fe_id === fe_id)
      if (curComp) {
        curComp.isHidden = isHidden
      }
    }),

    // 锁定组件
    changeComponentLock: produce((draft: ComponentsStateType, action: PayloadAction<{ fe_id: string }>) => {
      const { fe_id } = action.payload
      const { componentList = [] } = draft

      const curComp = componentList.find(c => c.fe_id === fe_id)

      if (curComp) {
        curComp.isLocked = !curComp.isLocked
      }
    }),

    // 复制组件
    copySelectedComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft
      const selectedComponent = componentList.find(c => c.fe_id === selectedId)

      if (selectedComponent == null) return
      draft.copiedComponent = cloneDeep(selectedComponent)
    }),

    // 粘贴组件
    pasteSelectedComponent: produce((draft: ComponentsStateType) => {
      const { copiedComponent } = draft

      if (copiedComponent == null) return
      // 修改id
      copiedComponent.fe_id = nanoid()
      // 插入新组件
      insertNewComponent(draft, copiedComponent)
    }),

    moveComponent: produce((draft: ComponentsStateType, action: PayloadAction<{ oldIndex: number, newIndex: number }>) => {
      const { componentList: curComponentList } = draft

      const { oldIndex, newIndex } = action.payload
      draft.componentList = arrayMove(curComponentList, oldIndex, newIndex)
    }),

    // 修改组件标题
    changeComponentTitle: produce((draft: ComponentsStateType, action: PayloadAction<{ fe_id: string, newTitle: string }>) => {
      const { newTitle, fe_id } = action.payload
      const curComp = draft.componentList.find(c => c.fe_id === fe_id)
      if(curComp) curComp.title = newTitle
    })
  }
})

export const { addComponent, changeSelectedId, changeComponentProps, removeSelectedComponent, changeComponentHidden, changeComponentLock, pasteSelectedComponent, copySelectedComponent, moveComponent, changeComponentTitle } = componentsSlice.actions

export default componentsSlice.reducer
