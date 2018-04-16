import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import './NavBar.css'

import { Row } from 'reactstrap';
// import logo from './logo.svg';
// import './App.css';

export class NavBar extends Component {
	render() {
		const navBar = 'navBar';
		return (
			<Row className={ navBar + ' row' }>
				<SearchBar className={ 'searchBar col-sm-3 sm-offset-2 col-md-3 md-offset-2' } />
			</Row>
		)
	}
}