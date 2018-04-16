import React, { Component } from 'react';
import { Table, Col } from 'reactstrap';

export class Content extends Component {
	render() {
		return (
			<Col md={{ size: 9}}>
				<Table className={ this.props.className }>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Total Size</th>
							<th>Last Modifiled</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</Table>
			</Col>
		);
	}
}