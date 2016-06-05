import React, { Component } from 'react';
import OnClickOutside from 'react-onclickoutside';
import classnames from 'classnames';
import {
  Button
} from 'react-bootstrap';
import Dropright from './dropright';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            active: false
        };
    }

    handleMouseOver () {
        this.setState({hovering: true});
    }

    handleMouseOut () {
        this.setState({hovering: false});
    }

    handleClickOutside() {
        this.setState({active: false});
    }

    handleClick() {
        this.setState({active: true});
    }

    render() {
        let classNames = classnames('filter-item', {'active': this.state.active, 'hover': this.state.hovering});
        return (
            <li className={classNames}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
                onClick={this.handleClick.bind(this)}>
                <div className="dropright-container">
                    {this.props.children}
                </div>
                <div className="visible-container">
                    <div className="icon">
                        <i className="fa fa-3x fa-home"></i>
                    </div>
                    <span>
                        {this.props.title}
                    </span>
                </div>
            </li>
        )
    }
}


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {active: true};
    }
    handleClickOutside() {
        this.setState({active: true});
    }
    handleButtonClick() {
        this.setState({active: !this.state.active});
    }
    render() {
        let filterClassNames = classnames('filters-menu', {active: this.state.active});
        return (
          <div>
            <button className="hvr-icon-wobble-horizontal filters-toggle" onClick={this.handleButtonClick.bind(this)}>
                Filters
            </button>
            <nav className={filterClassNames}>
              <ul>
                <SidebarItem title="Individual Drivers/Vehicles">
                    <div className="dropright">
                        <Dropright></Dropright>
                    </div>
                </SidebarItem>
                <SidebarItem title="Vehicle Groups">
                    <div className="dropright">
                        <Dropright></Dropright>
                    </div>
                </SidebarItem>
                <SidebarItem title="Date Range">
                    <div className="dropright">
                        <Dropright></Dropright>
                    </div>
                </SidebarItem>
                <SidebarItem title="Event Type">
                    <div className="dropright">
                        <Dropright></Dropright>
                    </div>
                </SidebarItem>
                <SidebarItem title="Actions">
                    <div className="dropright">
                        <Dropright></Dropright>
                    </div>
                </SidebarItem>
              </ul>
            </nav>
          </div>
        );
    }
}

// We could decorate Sidebar with OnClickOutside once decorators
// are supported
export default OnClickOutside(Sidebar);
