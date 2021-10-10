import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

import logoKredFeed from '../../images/logo-kred-feed.png'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-primary border-1 p-3">
            <div className="container-fluid">
                <img src={logoKredFeed} alt="" className="navbar-logo d-block" />
                <button className="navbar-toggler navbar-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu-icon" />
                </button>
                <div className="collapse navbar-collapse my-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item my-2 px-2">
                            <a className="nav-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faHome} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Home</p>
                            </a>
                        </li>
                        <li className="nav-item my-2 px-2">
                            <a className="nav-link d-flex align-items-center" id="dropdownMenuLink" data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faUser} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Perfil</p>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                <li className="d-flex align-items-center">
                                    <div className="dropdown-item text-secondary">
                                        <FontAwesomeIcon icon={faUserCheck} className="nav-icon me-3 text-secondary" />
                                        <a class="dropdown-link my-2 text-secondary" href="#">Representante Legal</a>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center mt-3">
                                    <div className="dropdown-item text-secondary">
                                        <FontAwesomeIcon icon={faBuilding} className="nav-icon me-3 text-secondary" />
                                        <a class="dropdown-link my-2 text-secondary" href="#">Informacion Fiscal</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}