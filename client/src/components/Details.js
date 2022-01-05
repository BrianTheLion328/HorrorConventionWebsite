import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import CelebrityForm from './CelebrityForm';
import DeleteCeleb from './DeleteCeleb';
import '../App.css';

export default function Details(props) {
    const {id} = props
    const [convention, setConvention] = useState('');
    const [celebrities, setCelebrities] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/conventions/${id}`)
            .then(res => {
                setConvention( {...res.data} )
            })
            .catch(err => console.log(err.response))

            axios.get(`http://localhost:8000/api/celebrities`)
            .then((res) => {
                setCelebrities(res.data)
            })
            .catch(err => console.log(err.response))
    }, [id])

    // useEffect(() => {
    //     // axios.get(`http://localhost:8000/api/celebrities`)
    //     //     .then((res) => {
    //     //         setCelebrities(res.data)
    //     //     })
    //     //     .catch(err => console.log(err.response))
    // }, [celebrities])

    const addCelebrity = celebrity => {
        console.log("CELEBRITY FORM CHECK: ", celebrity)
        setCelebrities([...celebrities, celebrity]);
    }

    const removeFromDom = someId => {
        setCelebrities( celebrities.filter(celebrity => celebrity._id !== someId) )
    }

    return (
        <div className="convention-list-background">
            <div className="all-conventions-header">
                <span><Link className="header-link" to={'/all-conventions'}>Back to your conventions</Link></span>
                <span><Link className="header-link" to={'/convention-creator'}>Add a new convention</Link></span>
            </div>
            <h2 className="solo-convention-title">{convention.conventionName}</h2>
            <CelebrityForm addCelebrity={addCelebrity} />
            <h2 className="celeb-checklist-title">Celebrity Checklist:</h2>
            <div className="all-celeb-boxes">
                <table className="celebrity-table">
                    <tbody>
                        <tr className="celeb-table-headings">
                            <th>Celebrity Name</th>
                            <th>Movie origin</th>
                            <th>Role</th>
                            <th>Photo Op Schedule</th>
                            <th>Image</th>
                            <th colSpan="3">Actions</th>
                        </tr>
                        {
                    celebrities.map((celebrity, index) => {
                        return (
                            <tr key={index} className="celeb-info-display">
                                <td className="celeb-list-name">{celebrity.celebName}</td>
                                <td>{celebrity.celebMovie}</td>
                                <td>{celebrity.celebCharacter}</td>
                                <td>{celebrity.celebPhotoOp}</td>
                                <td colSpan="2"><img className="display-image" src={celebrity.celebPhotoUrl} alt="celeb" /></td>
                                <td><button className="edit-celeb-button" onClick={() => navigate(`/celebrities/${celebrity._id}/edit`)}>Edit Celebrity</button></td>
                                <td><DeleteCeleb someId={celebrity._id} successCallback={() => removeFromDom(celebrity._id)}/></td>

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
