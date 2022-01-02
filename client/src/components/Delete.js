import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';


const Delete = (props) => {

    const { someId, successCallback } = props;

    const deleteThis = e => {
        axios.delete('http://localhost:8000/api/conventions/' + someId)
            .then(res => {
                successCallback()
                navigate('/all-conventions')
            })

    }
    return (
        <button style={{backgroundColor: "red", color: "white", fontSize: "16px"}} className="delete-btn" onClick={deleteThis}>
            Delete
        </button>
    )
}
export default Delete;
