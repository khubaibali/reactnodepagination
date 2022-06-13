import { useEffect, useState } from "react"
import { useSelector ,useDispatch} from "react-redux"
import { selectSingleEvent,unCheckedSelectAllOnly } from "../features/selectAllSlice"
import { store } from "../store"

const SingleSelectCheckbox =({eventId})=>{

    const dispatch = useDispatch()
    let {isSelect,selectedEventId} = useSelector((state)=>state.selectAll)
    const [tick,setTick] = useState(false)
    useEffect(()=>{
        if(selectedEventId.includes(eventId)){
            setTick(true)
            return
        }
        setTick(false)
    },[isSelect,selectedEventId])
   return(
    <>
        <input type="checkbox" name="checkbox" id="" checked={tick } onChange={()=>{tickChange()}}/>   
    </>
   )
   function tickChange(){
       if(isSelect){
        console.log(store.getState())
           dispatch(unCheckedSelectAllOnly({eventId}))
           return
        }
        dispatch(selectSingleEvent({eventId,tick}))
        
        console.log(store.getState())
    }

   }



export default SingleSelectCheckbox 