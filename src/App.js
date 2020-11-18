import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import MovieDetails from './movieDetails';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	state = {
		id: true,
	}

	

	render() {

		
		return (
			<div>
				<Navbar />
				<Switch>
					<Route path='/' component={Home} exact></Route>
					<Route path='/details/:id' component={MovieDetails}></Route>
					<Route path='/search/:term' component={Search}></Route>
				</Switch>
			</div>

		);
	}
}

export default App;


