import React from "react";
import "../assets/css/landingStyle.css";
import hero from "../assets/img/hero-img.png"

const LandingPage = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <section className="container">
                <nav className="fixed-top navbar navbar-expand-lg bg-light pb-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <span className="link-secondary">Simple Navbar</span>
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
                        <a href="/login" className="nav-link text-black">
                            Login
                        </a>
                        {/* <a href="/createproduct" className="nav-link text-black">
                            Create Product
                        </a> */}
                    </div>
                    </div>
                </div>
                </nav>
            </section>
            <div className="main">
                <div className="main_banner">
                    <h1>Better Solutions For Your Bussines</h1>
                    <p id="teks">
                        We are team of talented designers making websites with Bootstrap
                    </p>
                    <div className="btn">
                        <button id="get">Get Started</button>
                        <span id="watch">Watch Video</span>
                    </div>
                
                    <img
                        src={hero}
                        alt="gambar"
                    />
                </div>
            </div>
            <div className="main_">
                <h3>Join Our Newsletter</h3>
                <p id="content">
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <form>
                <input className="form_input" />
                <button className="form_btn">Subcribe</button>
                </form>
            </div>
            <div className="footer">
                <div className="row">
                <div className="footer-col">
                    <p id="arsha">ARSHA</p>
                    <p id="add">
                    A108 Adam Street <br />
                    New York, NY 535022 United States <br />
                    <br />
                    Phone: +1 5589 55488 55 <br />
                    Email: info@example.com
                    </p>
                </div>
                <div className="footer-col">
                    <p className="useful">Useful Links</p>
                    <ul className="footer-col1">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Sevices</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="allservice">Our Services</p>
                    <ul className="footer-col2">
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Management</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="social">Our Social Networks</p>
                    <p className="social-item">
                    Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                    valies
                    </p>
                    <div className="sosmed">
                    <div className="sosmed-item" />
                    <div className="sosmed-item" />
                    <div className="sosmed-item" />
                    <div className="sosmed-item" />
                    <div className="sosmed-item" />
                    </div>
                </div>
                </div>
            </div>
            <footer>
                <p className="copyright">
                ©Copyright <strong>Arsha.</strong> All Rights Reserved
                </p>
                <div className="dg">
                Designed by{" "}
                <a id="bs" href="https://bootstrapmade.com/">
                    BootstrapMade
                </a>
                </div>
            </footer>
            </>


    )
}

export default LandingPage