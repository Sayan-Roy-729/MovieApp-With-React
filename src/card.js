import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class Card extends Component {
    state = { 
     }
     
    render() {
        return (
            <div>
                <div className="card mt-3 height-500">
                        <img src={"http://image.tmdb.org/t/p/w500/" + this.props.path} className="card-img-top image-height-300" alt="..."/>
                        <div className="card-body d-flex flex-column justify-content-center align-content-end">
                            <h3 className="card-title"><b>{this.props.name}</b></h3>
                            <p className="card-text">{this.props.overview}<span className={"text-muted"}>........</span></p>
                            <Link to={"/details/" + this.props.id} className="btn bg-purple btn-block text-white">View Details</Link>
                        </div>
                </div>


            </div>
        );
    }


}







export default Card;