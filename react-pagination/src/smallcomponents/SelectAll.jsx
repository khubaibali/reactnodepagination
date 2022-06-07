import { useSelector,useDispatch } from "react-redux"
import {changeSelectAllState} from '../features/selectAllSlice'
const SelectAll =()=>{
 let statevalue = useSelector((state)=>state)
 const dispatch = useDispatch()
 const { isSelect }=statevalue.selectAll

  console.log('I render')
  
   return(
    <>
      <input type="checkbox" name="checkbox" id="" checked={isSelect} onChange={()=>{dispatch(changeSelectAllState(isSelect))}}/> 
    </>
   )
}


export default SelectAll 