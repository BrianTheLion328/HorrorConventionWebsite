import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function CelebrityForm(props) {
    const {addCelebrity} = props;
    const [celebName, setCelebName] = useState('');
    const [movie, setMovie] = useState('');
    const [character, setCharacter] = useState('');
    const [photoUrl, setPhotoUrl] = useState('')
    const [photoOpTime, setPhotoOpTime] = useState('')
    const [errors, setErrors] = useState([])

    const createCelebrity = (e) => {
        e.preventDefault()

        const newCelebrity = {
            celebName: celebName,
            celebMovie: movie,
            celebCharacter: character,
            celebPhotoUrl: photoUrl,
            celebPhotoOp: photoOpTime,
        }
        console.log("New Celebrity: ", newCelebrity)

        console.log("ADD CELEBRITY: ", addCelebrity);

        axios.post("http://localhost:8000/api/celebrities", newCelebrity)
            .then(res => {
                console.log("AXIOS POST NEW CELEBRITY: ", res.data)
                const newCeleb = res.data
                setCelebName('')
                setMovie('')
                setCharacter('')
                setPhotoUrl('')
                setPhotoOpTime('')
                addCelebrity(newCeleb)
            })
            .catch((err) => {
                console.log("ERROR FOR ADDING NEW CELEBRITY: ", err.response.data.errors)
                if (err.response.data.errors) {
                    setErrors(err.response.data.errors)
                }
            })
    }

    return (
        <div>
            <p className="add-new-celeb-title">Add a new celebrity to this convention</p>
            <form className="celebrity-form" onSubmit={createCelebrity}>
                <div>
                    {
                        errors.celebName && <p style={{color: "red"}}>{errors.celebName.message}</p>
                    }
                    <label>Celebrity Name: </label>
                    <input type="text"
                    name="celebrity-name"
                    value={celebName}
                    onChange={(e) => { setCelebName(e.target.value) } } />
                </div>
                <div>
                    {
                        errors.celebMovie && <p style={{color: "red"}}>{errors.celebMovie.message}</p>
                    }
                    <label>Movie: </label>
                    <input type="text"
                    name="celebrity-movie"
                    value={movie}
                    onChange={(e) => { setMovie(e.target.value) } } />
                </div>
                <div>
                    <label>Role they play: </label>
                    <input type="text"
                    name="character-name"
                    value={character}
                    onChange={(e) => { setCharacter(e.target.value) } } />
                </div>
                <div>
                    <label>Photo Url: (image address url) </label>
                    <input type="text"
                    name="celebrity-photo-url"
                    value={photoUrl}
                    onChange={(e) => { setPhotoUrl(e.target.value) } } />
                </div>
                <div>
                    <label>Photo Op Time: </label>
                    <input type="text"
                    name="photo-op-time"
                    value={photoOpTime}
                    onChange={(e) => { setPhotoOpTime(e.target.value) } } />
                </div>
                <input type="submit" value="Add Celebrity" className="add-celebrity-button" />
            </form>
        </div>
    )
}
