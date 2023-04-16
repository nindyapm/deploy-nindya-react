import React from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    //Get token existing
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    //Handle logout process
    const handleLogout = () => {
        if(token) {
            //Remove token from Local Storage
            localStorage.removeItem("token")

            //Redirect to Login
            navigate('/login')
        }
    }

    return (
        <nav className="fixed-top navbar navbar-expand-lg bg-light pb-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <span className="link-secondary">Simple header</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
            >
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                Home
                </a>
                <a className="nav-link" href="#">
                Features
                </a>
                <a className="nav-link" href="#">
                Pricing
                </a>
                <a className="nav-link" href="#">
                FAQs
                </a>
                <button onClick={handleLogout} className="logout">Logout</button>
            </div>
            </div>
        </div>
        </nav>
    )   

}

export default Navbar