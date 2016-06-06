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
        <div className="dropright">
            {this.props.children}
        </div>
        );
    }
}


