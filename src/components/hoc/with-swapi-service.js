import React from 'react';
import {Consumer} from "../swapi-context/swapi-context";

const withSwapiService = (ComponentView, methodsToProps) => {
	return (props) => {
		return (
			<Consumer>
				{
					(Swapi) => {
						const new_props = methodsToProps(new Swapi())
						return (
							<ComponentView {...props} {...new_props}/>
						)
					}
				}
			</Consumer>
		)
	}
}

export default withSwapiService;