import { useEffect, useState } from "react"
import { useSelector ,useDispatch} from "react-redux"
import { selectSingleEvent } from "../features/selectAllSlice"
const SingleSelectCheckbox =({isSelected})=>{
    let {isSelect,isSingleSelectCheck} = useSelector((state)=>state.selectAll)
    
    const [isSingleSelect,setSingleSelect] = useState(isSelect)
    const dispatch = useDispatch()
    useEffect(()=>{
        setSingleSelect(isSelect)
    },[isSelect])
    
   {return(
    <>
        <input type="checkbox" name="checkbox" id="" checked={isSelected} onChange={()=>{onSelectChange()}}/>   
    </>
   )}
   
   function onSelectChange(){
       dispatch(selectSingleEvent())
       setSingleSelect(!isSingleSelect)
   }
}


export default SingleSelectCheckbox 