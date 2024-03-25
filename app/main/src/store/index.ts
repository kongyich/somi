import { configureStore } from "@reduxjs/toolkit";
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import componentSlice, { ComponentsStateType } from "./features/componentSlice";
import pageInfoSlice, { PageInfoType } from "./features/pageInfoSlice";

export type StateType = {
  component: StateWithHistory<ComponentsStateType>
  pageInfo: PageInfoType
}

const store = configureStore({
  reducer: {
    pageInfo: pageInfoSlice,
    component: undoable(componentSlice, {
      limit: 20, // 限制20步
      filter: excludeAction([
        'components/changeSelectedId',
        'components/selectNextComponent',
        'components/selectPrevComponent'
      ])
    })
  }
})

export default store
