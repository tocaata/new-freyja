import React, { Component } from 'react';
import './SearchBar.css';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button, Col } from 'reactstrap';

export class SearchBar extends Component {
	doSearch() {
		console.log("Do Search");
	}

	render() {
		return (
			<Col  md={{ size: 5, offset: 1 }} className={ this.props.className } >
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>Search</InputGroupText>
					</InputGroupAddon>
					<Input placeholder="searching..." />
					<InputGroupAddon addonType="append">
						<Button color="success" onClick={ this.doSearch.bind(this) } >GO!</Button>
					</InputGroupAddon>
				</InputGroup>
			</Col>
		);
	}
}