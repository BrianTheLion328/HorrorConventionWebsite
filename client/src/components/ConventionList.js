import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from '@reach/router';
import Delete from './Delete';
// import ConventionForm from "./ConventionForm"

export default function ConventionList() {
    const [conventions, setConventions] = useState([])
    // const [user, setUser] = useState('')
    // const [errs, setErrs] = useState({})

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/conventions", {withCredentials: true})
    //         .then((res) => {
    //             setConventions(res.data)
    //         })
    //         .catch((err) => console.log(err.response) )
    // }, [])

    // everything from here...

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {withCredentials: true})
            .then((currentUser) => {
                console.log("CURRENT USER: ", currentUser.data)
                // setUser(currentUser.data)
                setConventions(currentUser.data.conventions)
                console.log(currentUser.data.conventions)
            })
    }, [])



    // const getConventionIds = () => {
    //     let conventionIds = conventions.map((convention, index) => {
    //         return convention._id
    //     })
    //     return conventionIds
    // };

    // const updateUserConventions = (updatedUser) => {
    //     axios.put("http://localhost:8000/api/user/loggedin", updatedUser, {withCredentials: true})
    //         .then(result => {
    //             console.log("UPDATED USER WITH CONVENTIONS: ", result);
    //             setUser(result.data)
    //         })
    //         .catch(err => {
    //             console.log("UPDATED USER CONVENTIONS ERROR: ", err)
    //             setErrs("Error while pushing convention into User!")
    //         })
    // }

    // const addConventionIdToUser = (convention) => {
    //     console.log("CONVENTION CHECK: ", convention)
    //     setConventions([...conventions, convention]);
    //     let updatedUser = {...user};
    //     updatedUser.conventions = getConventionIds();
    //     updatedUser.conventions.push(convention._id)
    //     updateUserConventions(updatedUser)
    // }

    // to here is a work in progress.

    const removeFromDom = someId => {
        setConventions( conventions.filter(convention => convention._id !== someId) )
    }

    return (
        <div className="convention-list">

            {/* <ConventionForm addConventionIdToUser={addConventionIdToUser} /> */}
            <div className="all-conventions-header">
                <span>Your Current Conventions:</span>
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
