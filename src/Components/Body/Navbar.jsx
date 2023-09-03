    import React from 'react';

    const Navbar = () => {
        return (
            <div>
                <nav className="navbar border-navbar-gradient navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container">
                        <a className="navbar-brand text-primary" href="/">DawatNama</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                                <li className="nav-item px-2"><a className="nav-link" href="#Services">Main</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="#about">About Us</a></li>
                                <li className="nav-item px-2"><a className="nav-link" href="#Staff">Partners</a></li>
                                <li className="nav-item px-2"><a className="nav-link" href="#Blogs">Event Services </a></li> <li className="nav-item px-2 dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item nav-link" href="#MeraigeHall">Meraige Hall</a></li>
                                        <li><a className="dropdown-item nav-link" href="#Food">Food</a></li>
                                        <li><a className="dropdown-item nav-link" href="#Photography">Photography</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item px-2"><a className="nav-link"  href="#Form">Form</a></li>
                                <li className="nav-item px-2"><a className="nav-link" href="#ContactUs">Contact</a></li>
                            </ul>
                            {/* <a className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4" href='Form' target='blank'>Sign In</a> */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    export default Navbar;
