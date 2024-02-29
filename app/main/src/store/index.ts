import { configureStore } from "@reduxjs/toolkit";
import componentSlice, { ComponentsStateType } from "./features/componentSlice";

export type StateType = {
  component: ComponentsStateType
}

const store = configureStore({
  reducer: {
    component: componentSlice
  }
})

export default store
