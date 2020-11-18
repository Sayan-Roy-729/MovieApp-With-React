import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';
import Loader from './Loader';

class Search extends Component {
    state = { 
        details: [],
     }

    movieSearch(movie) {
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&query=' + movie + '&page=1&include_adult=false')
            .then((response) => {
                let result = response.data.results;
                this.setState({details: result})

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        let movie = this.props.match.params.term;
        this.movieSearch(movie)
    }


    render() { 

        const content =  ( 
            <div>
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col-12 mt-5">
                            <h2 className="text-center">Search results for {this.props.match.params.term}</h2>
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="row">
                    {
                        this.state.details.map((movie, index) => {
                            return <div className="col-3" key = {index}>
                                <Card name = {movie.title} overview = {movie.overview.substr(0, 80)} path = {movie.poster_path} id = {movie.id}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        );

        return this.state.details.length > 0 ? content : <Loader/>
        
    }
}
 
export default Search;