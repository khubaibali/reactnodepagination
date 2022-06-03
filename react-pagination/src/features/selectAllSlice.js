import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isSelect:false,
    selectedEvents:new Set()
}

export const selectAllSlice = createSlice({
    name:'selectall',
    initialState,
    reducers:{
        changeSelectState:(state)=>{
            state.isSelect = !state.isSelect
        },
        selectSingleEvent:(state)=>{
            state.selectedEvents.add(state.eventid)
        }
    }
})

export const {changeSelectState} = selectAllSlice.actions
export default selectAllSlice.reducer