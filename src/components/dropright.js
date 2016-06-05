import React, { Component } from 'react';
import OnClickOutside from 'react-onclickoutside';
import classnames from 'classnames';
import {
  Button
} from 'react-bootstrap';


export default class Dropright extends Component {
    constructor(props) {
      super(props);
      this.state = {active: true};
    }
    handleClickOutside() {
      this.setState({active: true});
    }
    toggleState() {
      this.setState({active: !this.state.active});
    }
    render() {
        return (
        <nav  id="menu" className="dropright-nav">
            <ul>
                <li>
                    <a  href="#" title=""><span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Portfolio</span></a>
                </li>
                <li>
                    <a  href="#" title=""><span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Blog</span></a>
                </li>
                <li>
                    <a  href="#" title=""><span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>The team</span></a>
                </li>
                <li>
                    <a  href="#" title=""><span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Contact</span></a>
                </li>
            </ul>
        </nav>
        );
    }
}


