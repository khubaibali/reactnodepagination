import { React,useMemo } from "react";
import { Table } from "react-bootstrap";

import SelectAll from "../smallcomponents/SelectAll";
import SingleEventTR from "../smallcomponents/SingleEventTR";
import {useSelector,useDispatch} from 'react-redux'

const EventTable = () => {
    let {tableData} = useSelector(state=>(state.selectAll))
    return (
        <>
            <Table className="table table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            {
                                useMemo(() => {
                                    return <SelectAll />
                                }, [])
                            }
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
                    {useMemo(() => tableData.map((item, index) => (
                        <SingleEventTR item={item} index={index} key={index + Math.random() * 120} />
                    )), [tableData])}
                </tbody>
            </Table>
        </>)
}


export default EventTable;