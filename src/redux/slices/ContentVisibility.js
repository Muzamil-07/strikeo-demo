import { createSlice } from '@reduxjs/toolkit'

const ContentVisibilitySlice = createSlice({
  name: 'contentvisibilty',
  initialState: false,
  reducers: {
    setContentVisibilty: (state, action) => {
      return action.payload
    }
  }
})

export const { setContentVisibilty } = ContentVisibilitySlice.actions
export default ContentVisibilitySlice.reducer
