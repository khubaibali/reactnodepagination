import IOSSwitch from "../smallcomponents/IosSwitch"
import SingleSelectCheckbox from "./SingleSelectCheckbox";
const SingleEventTR = ({item,index})=>{
    
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
            <td></td>
        </tr> 
    </>)
}

export default SingleEventTR;