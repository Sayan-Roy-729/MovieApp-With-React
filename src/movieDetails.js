import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Card from './card';
import Loader from './Loader';

class MovieDetails extends Component {
    state = {
        details: {},
        keywords:[],
        recommend: [],
        movieID: null,
    }

    apiCall(movieId){
        // Movie Details
        axios
            .get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US')
            .then((response) => {
                let recommend = this.state.recommend;
                console.log(response.data);
                this.setState({details: response.data, keywords: response.data.genres, recommend : recommend});
            })
            .catch(function (error) {
                console.log(error);
            })

            // fetch recommendations from
            axios
                .get('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=1')
                .then((response) =>  {
                        let details = this.state.details;
                        let keywords = this.state. keywords;
                        let recommend =response.data;
                        this.setState({dertails: details, keywords: keywords, recommend: recommend.results}); 
                        window.scroll(0, 0)
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
    }

    

    componentDidMount() {

        let movieId = this.props.match.params.id;
        this.setState({movieID: movieId});

        this.apiCall(movieId);
        
    }

    componentDidUpdate(prevProps){

        let movieId = this.props.match.params.id;

        if (prevProps.match.params.id !== this.props.match.params.id){
            this.apiCall(movieId);
        }
        
    }

    render() {

        let id = this.props.location.pathname.split('/')[3];

        if (id !== this.state.movieID) {
            this.setState({movieID: id});
        }
        

        let releaseDate = new Date(this.state.details.release_date);
        releaseDate = releaseDate.getFullYear();

        const content =  (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className='row mt-3'>
                            <div className='col-3'>
                                <img src={"http://image.tmdb.org/t/p/w500/" + this.state.details.poster_path} className="card-img-top border" alt="..."/>
                            </div>
                            <div className='col-9'>
                                <h1 className="display-4">{this.state.details.title} {releaseDate}</h1>
                                <p>{this.state.details.release_date} <i className="fas fa-circle font-5"></i> {this.state.keywords.map((keyword, index) => {return <span key = {index}> {keyword.name} </span>})} <i className="fas fa-circle font-5"></i> {this.state.details.runtime} mins</p>
                                <h3><i className="fas fa-star"></i> {this.state.details.vote_average}/10  <small className={'text-muted font-14'}>Vote Count {this.state.details.vote_count}</small></h3>
                                <p><b>{this.state.details.tagline}</b></p>
                                <h3>Overview</h3>
                                <p className="lead">{this.state.details.overview}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                     <div className="row">
                        <div className="col-12">
                                <h3 className="display-4">Similar to {this.state.details.title}</h3>
                        </div>
                        {
                            this.state.recommend.map((movie, index) => {
                                return <div className="col-3" key = {index}>
                                    <Card name = {movie.title} overview = {movie.overview.substr(0, 80)} path = {movie.poster_path} id = {movie.id}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );

        return this.state.keywords.length === 0 ? <Loader/> : content
    }
}

export default MovieDetails;