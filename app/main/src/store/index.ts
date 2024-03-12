import { configureStore } from "@reduxjs/toolkit";
import componentSlice, { ComponentsStateType } from "./features/componentSlice";
import pageInfoSlice, { PageInfoType } from "./features/pageInfoSlice";

export type StateType = {
  component: ComponentsStateType
  pageInfo: PageInfoType
}

const store = configureStore({
  reducer: {
    component: componentSlice,
    pageInfo: pageInfoSlice
  }
})

export default store
