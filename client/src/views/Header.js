import React from 'react';
import { navigate } from "@reach/router";
import axios from "axios";
import '../App.css'

export default function Header() {

    const logout = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/user/logout", {
            // no body required for this request, but you need to include a empty body object
            // so that post can get to the third parameter (withCredentials: true).
        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err)
        });
    };

    return (
        <div>
            <h1>Welcome to Convention Creator!</h1>
            <div className="main-header">
                <button onClick={() => navigate("/convention-creator")}>Create New Convention</button>
                <button onClick={() => navigate("/all-conventions")}>All Conventions</button>
                <button onClick={(e) => logout(e)} >Logout</button>
            </div>
        </div>
    )
}
