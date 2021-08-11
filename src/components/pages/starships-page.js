import React from 'react'
import {withRouter} from "react-router-dom";
import {StarshipDetails, StarshipList} from '../sw-components';
import Row from "../row";



const StarshipsPage = (props) => {
    const selectedId = props.match.params.id || 2

    return (
        <Row
            left={<StarshipList path='starships' />}
            right={<StarshipDetails itemId={selectedId}/>}
        />
    )
}

export default withRouter(StarshipsPage);
