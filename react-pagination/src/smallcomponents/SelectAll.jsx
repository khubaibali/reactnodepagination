import { useSelector,useDispatch } from "react-redux"
import {changeSelectAllState} from '../features/selectAllSlice'
const SelectAll =()=>{
 let statevalue = useSelector((state)=>state.selectAll.isSelect)
 const dispatch = useDispatch()
 

  console.log('I render')
  
   return(
    <>
      <input type="checkbox" name="checkbox" id="" checked={statevalue} onChange={()=>{dispatch(changeSelectAllState(statevalue))}}/> 
    </>
   )
}


export default SelectAll 