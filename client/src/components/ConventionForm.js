import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import '../App.css';

export default function ConventionForm(props) {
    const [conName, setConName] = useState('');
    const [conCity, setConCity] = useState('');
    const [conState, setConState] = useState('');
    const [conDate, setConDate] = useState('');
    const [errors, setErrors] = useState([])

    const createConvention = (e) => {
        e.preventDefault()

        const newConvention = {
            conventionName: conName,
            conventionCity: conCity,
            conventionState: conState,
            conventionDate: conDate,
        }
        console.log("New Convention: ", newConvention)

        axios.post("http://localhost:8000/api/conventions", newConvention, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                navigate('/all-conventions')
            })
            .catch((err) => {
                console.log("ERROR CONSOLE LOG ADD FORM: ", err.response.data.errors)
                if (err.response.data.errors) {
                    setErrors(err.response.data.errors)
                }
            })


    }

    return (
        <div className="convention-form-container">
            <div>
                <span className="your-conventions-link"><Link className="header-link-convention" to={'/all-conventions'}>Click here to go directly to your conventions</Link></span>
            </div>
            <form className="conventionForm" onSubmit={createConvention}>
            <h2>Create a new convention:</h2>
                <div className="convention-form-div">
                    <label>Convention: </label>
                    {
                        errors.conventionName && <p style={{color: "red"}}> {errors.conventionName.message} </p>
                    }
                    <input type="text"
                    name="convention-name"
                    value={conName}
                    onChange={ (e) => { setConName(e.target.value) } } />
                </div>
                <div className="convention-form-div">
                    <label>City: </label>
                    {
                        errors.conventionCity && <p style={{color: "red"}}> {errors.conventionCity.message} </p>
                    }
                    <input type="text"
                    name="convention-city"
                    value={conCity}
                    onChange={ (e) => { setConCity(e.target.value) } } />
                </div>
                <div className="convention-form-div">
                    <label>State: </label>
                    {
                        errors.conventionState && <p style={{color: "red"}}> {errors.conventionState.message} </p>
                    }
                    <select onChange={(e) => { setConState(e.target.value)}} value={conState} id="city-list-menu" name="city-list-menu">
                        <option value="blank">select a state</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New-Hampshire">New Hampshire</option>
                        <option value="New-Jesery">New Jersey</option>
                        <option value="New-Mexico">New Mexico</option>
                        <option value="New-York">New York</option>
                        <option value="North-Carolina">North Carolina</option>
                        <option value="North-Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode-Island">Rhode Island</option>
                        <option value="South-Carolina">South Carolina</option>
                        <option value="South-Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                </div>
                <div className="convention-form-div">
                    <label>Date: </label>
                    {
                        errors.conventionDate && <p style={{color: "red"}}> {errors.conventionDate.message} </p>
                    }
                    <input type="text"
                    name="convention-date"
                    value={conDate}
                    onChange={ (e) => { setConDate(e.target.value) } } />
                </div>
                <input type="submit" value="Create Convention" className="create-convention-button" />
            </form>
        </div>
    )
}
