import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TRANSLANOVA</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-decoration-none"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/audio">Translate Audio</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/video">Translate Video</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about.js">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/testimonial.js">Testimonial</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact.js">Contact</Link>
                        </li>
                    </ul>
                </div>

                <button className="login_btn">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
