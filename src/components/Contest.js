
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Contest extends Component {
	render() {
		return (
			<div className="Contest">
				{this.props.description}
			</div>
		);
	}
}

//Validation of Props
Contest.propTypes = {
	description: PropTypes.string.isRequired
};

export default Contest;