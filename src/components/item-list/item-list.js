import React from 'react';
import './item-list.css';
import {NavLink} from "react-router-dom";

const ItemList = (props) => {

	const renderElements = (arr) => {
		const people = arr.map((item) => {
			return (
				<NavLink
					to={`/${props.path}/${item.id}/`}
					key={item.id} className='list-group-item'>
					{props.children(item)}
				</NavLink>
			)
		})
		return people
	}

	const content = renderElements(props.data)
	return (
		<ul className="item-list list-group">
			{content}
		</ul>
	);
}

export default ItemList;