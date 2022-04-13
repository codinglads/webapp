import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './Layout.css';

// This class places the NavMenu around every page in the application and
// it places the content within a container
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div id="layoutBody">
         <NavMenu />
            <Container>
                {this.props.children}
            </Container>
      </div>
    );
  }
}
