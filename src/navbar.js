import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-purple fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Popcorn</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">

                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Recommend</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;