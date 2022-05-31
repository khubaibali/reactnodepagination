import { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
function EventTKS(){
const [allevents ,setAllEvents] = useState([])
useEffect(()=>{
    console.log('runn')
    fetchEvents(setAllEvents)
},[])
return(
<>
<Table>
    <thead>
        <tr>
            Name
        </tr>
    </thead>
    <tbody>
            {allevents.map((item)=>(
                <tr>
                    <td>{item.eventname}</td>
                    <td><button className="btn btn-sm btn-toggle" type="button" data-toggle="button" pressed="false" autocomplete="off">button</button></td>
                </tr> 
                ))}
    </tbody>
</Table>
</>
)

}

async function fetchEvents(setAllEvents){
  let response = await (await fetch("http://localhost:4001/allevents")).json()
  console.log(response)
   setAllEvents([...response.result])                    
}


export default EventTKS