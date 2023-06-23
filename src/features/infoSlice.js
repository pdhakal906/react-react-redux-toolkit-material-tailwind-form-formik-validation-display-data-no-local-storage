import { createSlice } from "@reduxjs/toolkit";


const infoSlice = createSlice({
  name: 'infoSlice',
  initialState: {
    infos: []
  },
  reducers: {

    addInfo: (state, action) => {
      state.infos.push(action.payload)
    }


  }
})
export const { addInfo } = infoSlice.actions
export default infoSlice.reducer;