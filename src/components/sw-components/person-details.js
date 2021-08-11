import React from 'react';
import {ItemDetails, Record} from "../item-details";
import withSwapiService from '../hoc/with-swapi-service';

const PersonDetails = ({getPerson, getPersonImage, itemId}) => {
	return (
		<ItemDetails
			getData={getPerson}
			itemId={itemId}
			getImageUrl={getPersonImage}
		>
			<Record field='gender' label='Gender'/>
			<Record field='birthYear' label='Birth Year'/>
			<Record field='eyeColor' label='Eye Color'/>
		</ItemDetails>
	)
}

const methodsToProps = (swapi_obj) => {
	return {
		getPerson: swapi_obj.getPerson,
		getPersonImage: swapi_obj.getPersonImage

	}
}

export default withSwapiService(PersonDetails, methodsToProps)
