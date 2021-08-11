import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from '../pages';


import {Provider} from '../swapi-context/swapi-context';
import SwapiService from "../../services/swapi-service";

import './app.css';

const App = () => {
	const [isAuth, setIsAuth] = useState(false)


	return (
		<div>
			<Provider value={SwapiService}>

				<Router>
					<Header/>
					<RandomPlanet />
					<Switch>
					<Route path='/' exact={true} render={() => <h1>Main Page</h1> } />

					<Route path='/people/:id?' render={({match}) => {
						const {id: selectedId} = match.params;
						return <PeoplePage selectedId={selectedId} />
					}} />


						<Route path='/planets' exact={true} component={PlanetsPage} />
						<Route path='/planets/:id' exact={true} component={PlanetsPage} />

						<Route path='/starships' exact={true} component={StarshipsPage} />
						<Route path='/starships/:id' exact={true} component={StarshipsPage} />


					<Route path='/secret' render={() => {
						return <SecretPage isAuth={isAuth} />
					}} />


					<Route path='/login' render={() => {
						return <LoginPage setIsAuth={() => {setIsAuth(true)}} />
						}} />

						<Redirect to='/' />
 					</Switch>
				</Router>

			</Provider>
		</div>
	);
};

export default App;
