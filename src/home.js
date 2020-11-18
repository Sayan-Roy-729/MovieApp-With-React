import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';
import Papination from "./papination";
import Loader from './Loader';

class Home extends Component {
    state = {
        movies : [],
    }

    componentDidMount(pageNumber = 1) {
        axios
            .get('https://api.themoviedb.org/3/movie/top_rated?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=' + pageNumber)
            .then((response) => {
                this.setState({movies: response.data.results});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    changePageNumber(event){
        event.preventDefault();
        let pageNumber = Number(event.target.innerHTML);
        this.componentDidMount(pageNumber);
    }

    movieID(){
        console.log("Movie Id Console");
    }

    search(e){
        e.preventDefault();
        let search = document.querySelector('#serach-movie').value;
        if (search !== ''){
            this.props.history.push('/search/' + search);
        } else {
            alert("Please enter movie name");
        }
        
    }



    render() {


        const content = (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-2">Welcome to Popcorn</h1>
                        <p className="display-4">A onestop place where you can have every info about all of you fouruite movies.</p>
                        <form action="/search" method="get" onSubmit={this.search.bind(this)}>
                            <input type='text' className='form-control form-control-lg' placeholder='search any movie...' id="serach-movie"/><br/>
                            <button className='btn btn-dark btn-lg float-right' type='submit'>Search</button>
                        </form>
                        
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Papination pagenumber = {this.changePageNumber.bind(this)}/>
                            <h3><b>Top Movies</b></h3>
                        </div>
                        <div className='row'>
                            {
                                this.state.movies.map(function(movie, index){


                                    return  <div className='col-3'>
                                                <Card name = {movie.title} overview = {movie.overview.substr(0, 80)} path = {movie.poster_path} id = {movie.id}/>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );

        return this.state.movies.length === 0 ? <Loader/> : content;
    }
}

export default Home;