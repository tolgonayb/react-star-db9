import React from 'react';
import SwapiService from "../../services/swapi-service";
import withData from "../hoc/with-data";
import ItemList from "../item-list";

const {getAllPlanets, getAllPeople, getAllStarships} = new SwapiService();

const withChildFn = (ComponentView, fn) => {
	return (props) => {
		return (
			<ComponentView {...props}>
				{fn}
			</ComponentView>
		)
	}
}

const PeopleList = withChildFn(
	withData(ItemList, getAllPeople),
	({name}) => name
)

const PlanetList = withChildFn(
	withData(ItemList, getAllPlanets),
	({name}) => name
)

const StarshipList = withChildFn(
	withData(ItemList, getAllStarships),
	({name}) => name
)

export {PeopleList, PlanetList, StarshipList}