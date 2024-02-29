import { createSlice } from "@reduxjs/toolkit";

export type ComponentsStateType = {
  num: number
}

const INIT_STATE: ComponentsStateType = {
  num: 0
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    increment: state => {
      state.num += 1
    },
  }
})

export const { increment } = componentsSlice.actions

export default componentsSlice.reducer
