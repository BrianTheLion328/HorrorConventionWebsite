import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import CelebrityForm from './CelebrityForm';
import DeleteCeleb from './DeleteCeleb'
import '../App.css'

export default function Details(props) {
    const {id} = props
    const [convention, setConvention] = useState('');
    const [celebrities, setCelebrities] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/conventions/${id}`)
            .then(res => {
                setConvention( {...res.data} )
            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/celebrities`)
            .then((res) => {
                setCelebrities(res.data)
            })
            .catch(err => console.log(err.response))
    }, [celebrities])

    const removeFromDom = someId => {
        setCelebrities( celebrities.filter(celebrity => celebrity._id !== someId) )
    }

    return (
        <div>
            <div className="all-conventions-header">
                <span><Link to={'/all-conventions'}>Back to your conventions</Link></span>
                <span><Link to={'/convention-creator'}>Add a new convention</Link></span>
            </div>
            <h2>{convention.conventionName}</h2>
            <CelebrityForm />
            <h2>Celebrity Checklist:</h2>
            <div className="all-celeb-boxes">
                {
                    celebrities.map((celebrity, index) => {
                        return (
                            <div style={{border: "1px solid black"}} key={index} className="celeb-info-display">
                                <p>Name: {celebrity.celebName}</p>
                                <p>Movie: {celebrity.celebMovie}</p>
                                <p>Role: {celebrity.celebCharacter}</p>
                                <p>Photo-Op Times: {celebrity.celebPhotoOp}</p>
                                <DeleteCeleb someId={celebrity._id} successCallback={() => removeFromDom(celebrity._id)}/>
                                <img className="display-image" src={celebrity.celebPhotoUrl} alt="celeb" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
