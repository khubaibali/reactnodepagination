import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    isSelect:false,
    tableData:[],
    loading:false,
    error:null,
    selectedEventId:[]
}

export const fetchTableData = createAsyncThunk('selectall/tabledata', async () =>{

    try {
            const {result} =  await (await fetch("http://localhost:4001/allevents")).json()
            return result
        
    } catch (error) {
       
    }
    })
    

export const selectAllSlice = createSlice({
    name:'selectall',
    initialState,
    reducers:{
        changeSelectAllState:(state)=>{
            state.isSelect = !state.isSelect
            console.log('oooh chane')
            if(state.isSelect===false){
                state.selectedEventId=[]
                return
            }
            state.tableData.forEach((item)=>{
                state.selectedEventId.push(item.eventid)
            })
        },
        unCheckedSelectAllOnly:(state,action)=>{
            const{eventId} = action.payload
            state.selectedEventId = state.selectedEventId.filter((item)=> item!==eventId)
            state.isSelect=false;
            
        },
        selectSingleEvent:(state,action)=>{
            const{tick,eventId} = action.payload
            if(tick === true){
               state.selectedEventId= state.selectedEventId.filter((item)=> item!==eventId)
                return
            }
            state.selectedEventId.push(action.payload.eventId)
            
        }
        
    },
    extraReducers:{
        [fetchTableData.pending]:(state,{payload}) => {
            state.loading = true
        },
        [fetchTableData.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.tableData=payload
        
        },
        [fetchTableData.rejected]:(state,{payload})=>{
            state.loading=false;
        }
    }
})





export const {changeSelectAllState,selectSingleEvent,unCheckedSelectAllOnly} = selectAllSlice.actions
export default selectAllSlice.reducer