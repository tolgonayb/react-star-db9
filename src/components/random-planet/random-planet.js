import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
// import ErrorButton from "../error-button";

const RandomPlanetView = ({planet: {id = '2', name = '-', population = '-', rotationPeriod = '-', diameter = '-'}}) => {

	return (
		<React.Fragment>
			<img className="planet-image"
				 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt=''/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

class RandomPlanet extends Component {

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.planetIsUpdating = setInterval(this.updatePlanet, 2000)
	}


	componentWillUnmount() {
		clearInterval(this.planetIsUpdating)
	}

	swapi = new SwapiService();

	updatePlanet = () => {
		const planetId = Math.floor((Math.random() * 18 + 2));
		this.swapi.getPlanet(planetId)
			.then(data => {
				this.setState({
					planet: data,
					loading: false
				})
			})
	}

	render = () => {
		const {loading, planet} = this.state

		const details = loading ? <Spinner/> : <RandomPlanetView planet={planet}/>

		return (
			<div className="random-planet jumbotron rounded">
				{details}
				{/*<ErrorButton/>*/}
			</div>
		);
	}
}

export default RandomPlanet;
