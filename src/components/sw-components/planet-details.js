import React from 'react';
import {ItemDetails, Record} from "../item-details";
import withSwapiService from '../hoc/with-swapi-service';

const PlanetDetails = ({getPlanet, getPlanetImage, itemId}) => {
	return (
		<ItemDetails
			getData={getPlanet}
			itemId={itemId}
			getImageUrl={getPlanetImage}
		>
			<Record field='population' label='population'/>
			<Record field='rotationPeriod' label='rotation period'/>
			<Record field='diameter' label='diameter'/>
		</ItemDetails>
	)
}

const methodsToProps = (swapi_obj) => {
	return {
		getPlanet: swapi_obj.getPlanet,
		getPlanetImage: swapi_obj.getPlanetImage
	}
}
export default withSwapiService(PlanetDetails, methodsToProps)
