import React, { Component } from 'react';

import { NavBar } from './NavBar'
import logo from './logo.svg';
import './App.css';

import { Row, Col } from 'reactstrap'

import { SideBar } from './SideBar';
import { Content } from './Content';
        // <div className="App-header">
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Row>
          <SideBar className={ '' }>
          </SideBar>
          <Content>
          </Content>
        </Row>
      </div>
    );
  }
}

export default App;
