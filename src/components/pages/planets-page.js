import React from 'react'
import Row from '../row'
import {PlanetDetails, PlanetList} from '../sw-components';



const PlanetsPage = (props) => {
	const selectedId = props.match.params.id || 1

	return (
		<Row
			left={<PlanetList path="planets"/>}
			right={<PlanetDetails itemId={selectedId} />}
		/>
	)
}


export default PlanetsPage
