import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedEvents:new Set()
} 

export const selectedEvents= createSlice({
    name:'selectedEventsSlice',
    initialState,
    reducers:{
        addSelectedEvents:(state)=>{
            state.selectedEvents.add(state.eventid)
        },
        removeSelectedEvents:(state)=>{
            state.selectedEvents.delete(state.eventid)
        }
    }
})
export const {addSelectedEvents,removeSelectedEvents} = selectedEvents.actions
export default selectedEvents.reducer