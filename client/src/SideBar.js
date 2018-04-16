import React, { Component } from 'react';
import { Button, Col } from 'reactstrap'


export class SideBar extends Component {
	render() {
		return (
			<Col md={{ size: 1, offset: 1}} className={ this.props.className }>
				<Button>Devices</Button>
			</Col>
		);
	}
}