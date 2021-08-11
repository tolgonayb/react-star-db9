import React, {Component} from 'react';
import './item-details.css';

const Record = ({item, field, label}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}

class ItemDetails extends Component {

	state = {
		data: {},
		loading: true,
		imageUrl: ''
	}

	componentDidMount() {
		this.updateDetails()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.itemId !== this.props.itemId) {
			this.updateDetails()
		}
	}

	updateDetails = () => {
		const {itemId, getImageUrl, getData} = this.props;
		getData(itemId)
			.then(data => {
				this.setState({
					data,
					loading: false,
					imageUrl: getImageUrl({'id': itemId})
				})
			})
	}

	render() {
		return (
			<React.Fragment>
				<div className="person-details card">
					<img className="person-image" src={this.state.imageUrl} alt=''/>

					<div className="card-body">
						<h4>{this.state.data.name}</h4>
						<ul className="list-group list-group-flush">
							{
								React.Children.map(this.props.children, (child) => {
									return React.cloneElement(child, {item: this.state.data})
								})
							}
						</ul>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export {Record, ItemDetails}