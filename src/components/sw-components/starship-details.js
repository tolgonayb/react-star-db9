import React from 'react';
import {ItemDetails, Record} from "../item-details";
import withSwapiService from "../hoc/with-swapi-service";

const StarshipDetails = ({getStarship, getStarshipImage, itemId}) => {
	return (
		<ItemDetails
			getData={getStarship}
			itemId={itemId}
			getImageUrl={getStarshipImage}
		>
			<Record field='manufacturer' label='manufacturer'/>
			<Record field='model' label='model'/>
		</ItemDetails>
	)
}

const methodsToProps = (swapi_obj) => {
	return {
		getStarship: swapi_obj.getStarship,
		getStarshipImage: swapi_obj.getStarshipImage
	}
}

export default withSwapiService(StarshipDetails, methodsToProps)