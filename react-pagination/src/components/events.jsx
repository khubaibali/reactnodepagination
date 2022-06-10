import { useEffect } from 'react';
import EventTable from './EventTable'
import { useSelector, useDispatch } from 'react-redux'
import {selectAllEvents,fetchTableData} from '../features/selectAllSlice'

function EventTKS() {

    const dispatch = useDispatch();
    let loading  = useSelector(state => (state.selectAll.loading))
    console.log("event render")
    if(loading==='idle'){
        dispatch(fetchTableData())
    }     
      if(loading){
        return(<>
          Loading
        </>)
      }
        return (
              <EventTable/>
        );


}



export default EventTKS 