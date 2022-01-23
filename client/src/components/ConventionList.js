import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from '@reach/router';
import Delete from './Delete';

export default function ConventionList() {
    const [conventions, setConventions] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/conventions", {withCredentials: true})
            .then((res) => {
                setConventions(res.data)
            })
            .catch((err) => console.log(err.response) )
    }, [])

    const removeFromDom = someId => {
        setConventions( conventions.filter(convention => convention._id !== someId) )
    }

    return (
        <div className="convention-list">
            <div className="all-conventions-header">
                <span>Your Current Conventions:</span>
                <span><Link className="header-link" to={'/convention-creator'}>Add a new convention</Link></span>
            </div>
            <div>
                <table className="conventions-table">
                    <tbody>
                        <tr className="convention-header-row">
                            <th className="table-header">Name </th>
                            <th className="table-header">City </th>
                            <th className="table-header">State </th>
                            <th className="table-header">Date </th>
                            <th colSpan="3" className="table-header">Actions</th>
                        </tr>
                        {
                            conventions && conventions.map((convention, index) => {
                                return (
                                    <tr key={index} className="convention-row">
                                        <td className="cell cell-name">{convention.conventionName}</td>
                                        <td className="cell cell-city">{convention.conventionCity}</td>
                                        <td className="cell cell-state">{convention.conventionState}</td>
                                        <td className="cell cell-date">{convention.conventionDate.split("T")[0]}</td>
                                        <td className="cell cell-details"><Link to={`/convention/${convention._id}`}>Details</Link> </td>
                                        <td className="cell cell-edit-convention"><Link to={`/convention/${convention._id}/edit`}>Edit Convention</Link></td>
                                        <td className="cell cell-delete"><Delete someId={convention._id} successCallback={() => removeFromDom(convention._id)}/></td>
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
