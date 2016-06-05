import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Grid,
  Row,
  Col,
  Navbar, Nav, MenuItem, Dropdown
} from 'react-bootstrap'

const LogoutButton = () => {
  return (
    <div className="logout-button">
      <a href="accounts/logout">
        Logout &nbsp;|&nbsp; <i className="fa fa-play"></i>
      </a>
    </div>
  );
}

const CustomerDisplay = ({customer, showSwitcher}) => {
  return (
    <div className="nav-customer-info">
      <div className="nav-customer-name">
        <strong>Company:</strong> {customer}
      </div>
      {showSwitcher ? <a href="/sessionSwitchCustomer"> <i className="fa fa-exchange"></i> </a>: ''}
    </div>
  );
}

const LanguageSwitcher = ({currentLanguage}) => {
  return (
    <Dropdown id="language-switcher">
      <Dropdown.Toggle>
        <img src="static/flags/en.png" alt=""/>
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <MenuItem eventKey="1"><img src="static/flags/en.png" alt=""/></MenuItem>
        <MenuItem eventKey="2"><img src="static/flags/en.png" alt=""/></MenuItem>
        <MenuItem eventKey="3" active><img src="static/flags/en.png" alt=""/></MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hovering: false
    }
  }

  handleMouseOver () {
      this.setState({hovering: true});
  }

  handleMouseOut () {
      this.setState({hovering: false});
  }

  render() {
    let classNames = classnames('nav-item', {'hover': this.state.hovering, 'active': this.props.active});
    return (
      <li className={classNames}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}>
          <a href={this.props.href}>{this.props.children}</a>
          {this.props.hasDropdown ? <NavDropdown open={this.state.hovering}/> : ""}
      </li>
    )
  }
}

class NavDropdown extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        let classNames = classnames('nav-dropdown', {'open': this.props.open});
        return (
          <ul className={classNames}>
            <li>
              <a href={this.props.href}>Home</a>
            </li>
            <li>
              <a href={this.props.href}>Dashboard</a>
            </li>
            <li>
              <a href={this.props.href}>Manage Cards</a>
            </li>
            <li>
              <a href={this.props.href}>Manage Groups</a>
            </li>
          </ul>
        );
    }
}


export default class Header extends Component {
    render() {
        return  (
          <div id="velocity-navbar">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                <div className="brand-logo" >
                    <img src="static/logo.png" alt=""/>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <div className="navbar-controls">
                  <CustomerDisplay customer="50565 - RADIUS PAYMENT SOLUTIONS LIMITED" showSwitcher={true}/>
                  <div className="right-control">
                    <LogoutButton></LogoutButton>
                    <LanguageSwitcher></LanguageSwitcher>
                  </div>
                </div>
                <Nav bsClass="navbar-menu">
                  <NavItem id="navbar-home" href="#"><i className="fa fa-home fa-lg"></i></NavItem>
                  <NavItem hasDropdown>Fuel Cards</NavItem>
                  <NavItem active hasDropdown>Kinesis</NavItem>
                  <NavItem hasDropdown>Velos MasterCard®</NavItem>
                  <NavItem hasDropdown>Invoices</NavItem>
                  <NavItem hasDropdown>Account Management</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}
