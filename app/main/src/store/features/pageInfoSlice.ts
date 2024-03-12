import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

export type PageInfoType = {
  title?: string
  desc?: string
  isPublished?: boolean

  js?: string
  css?: string
}

const INIT_STATE: PageInfoType = {
  title: '',
  desc: '',
  js: '',
  css: '',
}

const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: INIT_STATE,
  reducers: {
    changePageTitle: produce((state: PageInfoType, action: PayloadAction<string>) => {
      state.title = action.payload
    })
  }
})

export const { changePageTitle } = pageInfoSlice.actions

export default pageInfoSlice.reducer
