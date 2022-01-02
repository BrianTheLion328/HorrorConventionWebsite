import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from '@reach/router';
import Delete from './Delete';

export default function ConventionList() {
    const [conventions, setConventions] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/conventions")
            .then((res) => {
                setConventions(res.data)
            })
            .catch((err) => console.log(err.response) )
    }, [])

    const removeFromDom = someId => {
        setConventions( conventions.filter(convention => convention._id !== someId) )
    }

    return (
        <div>
            <div className="all-conventions-header">
                <span className="your-conventions-header">Your Conventions</span>
                <span><Link to={'/convention-creator'}>Add a new convention</Link></span>
            </div>
            <div>
                <table className="conventions-table">
                    <tbody>
                        <tr className="convention-header-row">
                            <th className="table-header">Name </th>
                            <th className="table-header">City </th>
                            <th className="table-header">State </th>
                            <th className="table-header">Date </th>
                            <th colSpan="2" className="table-header">Actions</th>
                        </tr>
                        {
                            conventions && conventions.map((convention, index) => {
                                return (
                                    <tr key={index} className="convention-row">
                                        <td className="cell-name">{convention.conventionName}</td>
                                        <td className="cell-city">{convention.conventionCity}</td>
                                        <td className="cell-state">{convention.conventionState}</td>
                                        <td className="cell-date">{convention.conventionDate.split("T")[0]}</td>
                                        <td><Link to={`/convention/${convention._id}`}>Details</Link> </td>
                                        <td><Delete someId={convention._id} successCallback={() => removeFromDom(convention._id)}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}
