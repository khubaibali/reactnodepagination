import { React,useEffect,useState,useCallback } from "react";
import { Table } from "react-bootstrap";
import IOSSwitch from "../smallcomponents/IosSwitch"
import SelectAll from "../smallcomponents/SelectAll";
import {useSelector} from 'react-redux'
function EventTKS(){
const [allevents ,setAllEvents] = useState([])
let selectedEvents = new Set()
let state = useSelector((state)=>state)
console.log("from events",state)
useEffect(()=>{
    console.log('runn');
    fetchEvents(setAllEvents)
},[])

console.log('com rerender')
return(
<>
<Table className="table table-striped">
    <thead className="thead-light">
        <tr>
            <th>
                #
            </th>
            <th>
               <SelectAll/>
            </th>
            <th>
                Name
            </th>
            <th>
                Venues
            </th>
            <th>
                Event Date
            </th>
            <th>
                Interval
            </th>
            <th>
                Monitoring Status
            </th>
            <th>
                Actions
            </th>
        </tr>
    </thead>
    <tbody>
            {allevents.map((item,index)=>(
                <tr key={index+Math.random()*120}>
                    <td>{index+1}</td>
                    <td><input type="checkbox" name="" id="" checked={true}  /></td>
                    <td>{item.eventname}</td>
                    <td>{item.eventvenue}</td>
                    <td>{item.eventdate}</td>
                    <td>{item.intervaltime}</td>
                    <td><IOSSwitch defaultChecked={item.startmonitoring} /></td>
                    <td></td>
                </tr> 
                ))}
    </tbody>
</Table>
</>
)

}

async function fetchEvents(setAllEvents){
  let response = await (await fetch("http://localhost:4001/allevents")).json()
   setAllEvents([...response.result])                    
}


export default EventTKS 