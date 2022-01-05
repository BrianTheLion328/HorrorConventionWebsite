import React from 'react'
import axios from 'axios';

const DeleteCeleb = (props) => {

    const { someId, successCallback } = props;

    const deleteThis = e => {
        axios.delete('http://localhost:8000/api/celebrities/' + someId)
            .then(res => {
                successCallback()
            })
            .catch(err => console.log("DELETE CELEB ERROR: ", err))

    }
    return (
        <button style={{backgroundColor: "crimson", color: "white", fontSize: "16px", padding: "10px"}} className="delete-btn" onClick={deleteThis}>
            Delete
        </button>
    )
}
export default DeleteCeleb;
