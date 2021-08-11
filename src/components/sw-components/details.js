import React from 'react';
import {ItemDetails, Record} from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();
const {
	getStarship,
	getStarshipImage
} = swapi;

export {starshipDetails}