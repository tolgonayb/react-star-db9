import React, {Component} from 'react'
import Spinner from "../spinner";

const withData = (ComponentView, getData) => {
	return class extends Component {
		state = {
			data: null,
			loading: true
		}

		componentDidMount() {
			this.updateItemList();
		}

		updateItemList = () => {
			getData()
				.then(data => {
					this.setState({
						data: data,
						loading: false
					})
				})
		}

		render() {
			const content = this.state.loading ? <Spinner/> : <ComponentView {...this.props} data={this.state.data}/>
			return content;
		}
	}
}

export default withData;