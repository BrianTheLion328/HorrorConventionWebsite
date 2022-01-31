import React, {useState, useEffect} from 'react'
import "../App.css"
import axios from "axios"

export default function Home() {
    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/loggedin", {withCredentials: true})
            .then(thisUser => {
                setUser(thisUser.data.firstName)
                console.log(thisUser.data.firstName)
            })
    }, [])
    return (
        <div className="home-container">
            <div className="home-message">
                <h1>Welcome {user}!</h1>
                <br/>
                <p>Hi {user}, and welcome to H.C.C., the Horror Convention Creator! A place where you can create and customize
                your favorite horror conventions all over the country.</p>
            </div>
            <table className="home-table">
                <tbody>
                    <tr>
                        <th className="h-cell">Step 1</th>
                        <th className="h-cell">Step 2</th>
                        <th className="h-cell">Step 3</th>
                    </tr>
                    <tr>
                        <td className="p-cell"><p>Click on "Create New Convention" and enter the specific details for the convention you want to create. <br />
                        <br />
                        Example: <a href="https://www.texasfrightmareweekend.com/">Texas Frightmare</a>, Dallas, Texas, April 29 - May 1.</p>
                        </td>
                        <td className="p-cell"><p>Click the "Details" link in your new convention to take you to the
                        celebrity form and add as many celebrities as you'd like!<br />
                        <br />
                        Example: David Howard Thornton who plays Art the clown in the film Terrifier.</p>
                        </td>
                        <td className="p-cell">
                            <p>Now you can conveniently keep track of which celebrities will be at that convention,
                            and when they will be taking photos with their fans so you can plan accordingly!<br />
                            <br />
                            Where else but a horror convention can you meet your favorite killer clown?</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="home-table-image-cell">
                        <img className="home-page-image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/12063837_10154002691036798_4820807745010122825_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s_5eiGRJekkAX-_GS36&_nc_ht=scontent-sjc3-1.xx&oh=00_AT-_wmhQZb41OZOh2ligZomp1wsaYILXoGZsyeEGeoiDVA&oe=621562B8" alt="TF logo" />
                        </td>
                        <td className="home-table-image-cell">
                        <img className="home-page-image" src="https://aiptcomics.com/wp-content/uploads/2019/10/art1.jpg" alt="art the clown"/>
                        </td>
                        <td className="home-table-image-cell">
                        <img className="home-page-image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/241795394_10166063253215284_6660345792451192931_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=_rujFHr-encAX8IKsio&_nc_ht=scontent-sjc3-1.xx&oh=00_AT9RDil3qVnQ5kl1o_NaFvyC7G_oumUoni5mNE7UWJGvSA&oe=61FBC9E6" alt="me and art" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
