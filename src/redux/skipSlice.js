import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     skip: true
}
export const skipSlice = createSlice ({
     name:'skip',
     initialState,
     reducers:{
          skipValueChange:(state,action)=>{
               state.skip = action.payload
          }
     }
})

export const {skipValueChange} =skipSlice.actions;
export default skipSlice.reducer;