import React, { Component } from 'react';
import {
  Tab, Row, Nav, NavItem, Col
} from 'react-bootstrap';

export default class TabbedDataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePanel: 1
        }
    }
    handleSelect(activePanel) {
      this.setState({activePanel});
    }
    render() {
        return (
          <Tab.Container defaultActiveKey="first">
            <div>
            <Row className="tabbed-data-container">
              <Col md={4}>
                  <h3 className='filters-title'>
                    {this.props.filtersTitle}
                  </h3>
              </Col>
              <Col md={4} >
                  <h3 className='data-title'>
                    {this.props.dataTitle}
                  </h3>
              </Col>
              <Col md={4}>
                <Nav className="tabs-container" bsStyle="tabs">
                  <NavItem eventKey="first">
                    Data
                  </NavItem>
                  <NavItem eventKey="second">
                    Graph
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <Tab.Content animation>
              {this.props.children}
            </Tab.Content>
            </div>
          </Tab.Container>
        );
    }
}

