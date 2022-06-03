import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {changeSelectState} from '../features/selectAllSlice'
const SelectAll =()=>{
 let statevalue = useSelector((state)=>state)
 const dispatch = useDispatch()
 const { isSelect }=statevalue.selectAll
 console.log(statevalue)

   return(
    <>
        <input type="checkbox" name="checkbox" id="" checked={isSelect} onChange={()=>{dispatch(changeSelectState(isSelect))}}/> 
    </>
   )
}


export default SelectAll 