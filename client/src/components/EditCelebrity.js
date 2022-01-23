import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function EditCelebrity(props) {
    const {id, conventionId} = props;
    const [celebName, setCelebName] = useState('');
    const [movie, setMovie] = useState('');
    const [character, setCharacter] = useState('');
    const [photoUrl, setPhotoUrl] = useState('')
    const [photoOpTime, setPhotoOpTime] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/celebrities/${id}`, {withCredentials: true})
            .then(res => {
                setCelebName(res.data.celebName)
                setMovie(res.data.celebMovie)
                setCharacter(res.data.celebCharacter)
                setPhotoUrl(res.data.celebPhotoUrl)
                setPhotoOpTime(res.data.celebPhotoOp)
            })
            .catch(err => console.log(err.response) )
    }, [id])

    const updateCelebrity = e => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/celebrities/${id}`, {
            celebName: celebName,
            celebMovie: movie,
            celebCharacter: character,
            celebPhotoUrl: photoUrl,
            celebPhotoOp: photoOpTime,
        })
        .then(res => {
            console.log("Successfully edited this celebrity.")
            navigate(`/convention/${conventionId}`)
        })
        .catch(err => {
            console.log("UPDATE CELEBRITY CONSOLE LOG: ", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h3 className="edit-this-celebrity">Edit this celebrity: </h3>
            <form className="celebrity-update-form" onSubmit={updateCelebrity}>
                <div className="edit-div">
                    {
                        errors.celebName && <p style={{color: "red"}}>{errors.celebName.message}</p>
                    }
                    <label>Celebrity Name: </label>
                    <input type="text"
                    name="celebrity-name"
                    value={celebName}
                    onChange={(e) => { setCelebName(e.target.value) } } />
                </div>
                <div className="edit-div">
                    {
                        errors.celebMovie && <p style={{color: "red"}}>{errors.celebMovie.message}</p>
                    }
                    <label>Movie: </label>
                    <input type="text"
                    name="celebrity-movie"
                    value={movie}
                    onChange={(e) => { setMovie(e.target.value) } } />
                </div>
                <div className="edit-div">
                    <label>Role: </label>
                    <input type="text"
                    name="character-name"
                    value={character}
                    onChange={(e) => { setCharacter(e.target.value) } } />
                </div>
                <div className="edit-div">
                    <label>Photo Url: </label>
                    <input type="text"
                    name="celebrity-photo-url"
                    value={photoUrl}
                    onChange={(e) => { setPhotoUrl(e.target.value) } } />
                </div>
                <div className="edit-div">
                    <label>Photo Op Time: </label>
                    <input type="text"
                    name="photo-op-time"
                    value={photoOpTime}
                    onChange={(e) => { setPhotoOpTime(e.target.value) } } />
                </div>
                <input type="submit" value="Edit Celebrity" className="edit-celebrity-button" />
                <button className="cancel-edit-button" onClick={() => navigate(`/convention/${id}`)}>Cancel</button>
            </form>
            <div>
                <br />
                <img className="display-image-2" src={photoUrl} alt="character"></img>
            </div>
        </div>
    )
}
