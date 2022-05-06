import { createSlice } from '@reduxjs/toolkit';
export const Slice= createSlice({
    name: "data",
    initialState:{
        value: "",
    },
    reducers:{
        changeEmpName:(state, action)=>{
            state.value=action.payload.empName;
        },
    }
});
export const {changeEmpName}=Slice.actions;

export default Slice.reducer;