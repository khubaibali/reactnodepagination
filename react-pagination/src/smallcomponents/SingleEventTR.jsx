import IOSSwitch from "../smallcomponents/IosSwitch"
import SingleSelectCheckbox from "./SingleSelectCheckbox";
import { IconButton } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SingleEventTR = ({item,index})=>{
let navigate = useNavigate()    
    return(
    <>
        <tr>
            <td>{index+1}</td>
            <td><SingleSelectCheckbox isSelected={item.isSelected} eventId={item.eventid} index={index}/></td>
            <td>{item.eventname}</td>
            <td>{item.eventvenue}</td>
            <td>{item.eventdate}</td>
            <td>{item.intervaltime}</td>
            <td><IOSSwitch defaultChecked={item.startmonitoring} /></td>
            <td><IconButton onClick={()=>{navigate(`/tickettek/${item.eventid}`)}}><EditOutlined/></IconButton> </td>
        </tr> 
    </>)
}

export default SingleEventTR;