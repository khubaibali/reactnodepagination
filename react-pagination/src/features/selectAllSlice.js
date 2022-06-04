import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    isSelect:false,
    isSingleSelectCheck:false,
    selectedEvents:[],
    status:'idle',
    error:null
}

export const selectAllSlice = createSlice({
    name:'selectall',
    initialState,
    reducers:{
        changeSelectState:(state)=>{
            state.isSelect = !state.isSelect
            state.isSingleSelectCheck=false
            console.log('oooh chane')
            if(state.isSelect===false){
                state.selectedEvents=[]
            }
        },
        selectSingleEvent:(state)=>{
            state.isSelect = false
            state.isSingleSelectCheck = true 
        },
        selectAllEvents:(state,action)=>{
            console.log('reaction',action)
            console.log('redux',state)
            state.selectedEvents= state.payload
        }
    }
})


export const fetchTableData = createAsyncThunk('tabledata', async () =>{
    const response =  await (await fetch("http://localhost:4001/allevents")).json()
    return response.result
})



export const {changeSelectState,selectSingleEvent,selectAllEvents} = selectAllSlice.actions
export default selectAllSlice.reducer