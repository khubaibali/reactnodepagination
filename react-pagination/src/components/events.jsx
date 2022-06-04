import { React,useEffect,useState,useMemo } from "react";
import { Table } from "react-bootstrap";
import {selectAllEvents} from '../features/selectAllSlice'
import SelectAll from "../smallcomponents/SelectAll";
import SingleEventTR from "../smallcomponents/SingleEventTR";
import {useSelector,useDispatch} from 'react-redux'
function EventTKS(){
const [allevents ,setAllEvents] = useState([])
const dispatch = useDispatch();
let isSelectAll = useSelector(state=>(state.selectAll.isSelect))

useEffect(()=>{
    console.log('runn');
    fetchEvents(setAllEvents)
},[])

useEffect(()=>{
    if(isSelectAll){
        console.log('I ran')
        console.log(allevents)
        let eventid= []
        allevents.forEach((item)=>{
            eventid.push(item.eventid)
        })
        dispatch(selectAllEvents([...eventid]))
    }

},[isSelectAll])


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
            {useMemo(()=> allevents.map((item,index)=>(
               <SingleEventTR item={item} index={index} key={index+Math.random()*120}/>
            )),[allevents]) }
    </tbody>
</Table>
</>
)

}

async function fetchEvents(setAllEvents){
    let response=[]
    response = await (await fetch("http://localhost:4001/allevents")).json()
    response.result.forEach((item)=>{
        item.isSelected=false;
    })
   setAllEvents([...response.result])                    
}


export default EventTKS 