import React, { Component } from 'react';
import OnClickOutside from 'react-onclickoutside';
import classnames from 'classnames';
import Dropright from './dropright';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class __SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            active: false
        };
    }

    handleMouseOver () {
        this.setState({hover: true});
    }

    handleMouseLeave (event) {
        this.setState({hover: false});
    }

    handleClickOutside(event) {
        console.log(event.toElement.className);
        if (event.toElement.className.indexOf('react-datepicker') == -1)
            this.setState({active: false});
    }

    handleClick() {
        this.setState({active: true});
    }

    render() {
        let classNames = classnames('filter-item', {'active': this.state.active, 'hover': this.state.hover});
        return (
            <li className={classNames}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                onClick={this.handleClick.bind(this)}>
                {this.props.children}
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

export const SidebarItem = OnClickOutside(__SidebarItem);



export class IndividualDriversDropright extends Component {
    render() {
        return (
            <Dropright>
                <nav className="individual-drivers-dropright dropright-nav">
                </nav>
            </Dropright>
        );
    }
}

export class DateRangeDropright extends Component {
    constructor(props) {
        super(props);
        let currentDate = moment();
        console.log(currentDate);
        this.state = {
            startDate: moment(),
            endDate: moment().add(8, 'weeks')
        };
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
    }
    render() {
        return (
            <Dropright>
                <nav className="date-range-dropright dropright-nav">
                    <ul>
                        <li>
                            <span>Today</span>
                        </li>
                        <li>
                            <span>Yesterday</span>
                        </li>
                        <li>
                            <span>Previous 7 Days</span>
                        </li>
                        <li>
                            <span>Previous 30 Days</span>
                        </li>
                        <li>
                            <div>From:</div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleStartDateChange.bind(this)} />
                            <div>To:</div>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndDateChange.bind(this)} />
                        </li>
                    </ul>
                </nav>
            </Dropright>
        );
    }
}

export class ActionsDropright extends Component {
    render() {
        return (
            <Dropright>
                <nav className="actions-dropright dropright-nav">
                    <ul>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Download</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Print</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Email</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Save</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Saved Reports</span>
                        </li>
                    </ul>
                </nav>
            </Dropright>
        );
    }
}

export class EventTypeDropright extends Component {
    render() {
        return (
            <Dropright>
                <nav className="event-type-dropright dropright-nav">
                    <ul>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Overall</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Speeding</span>
                        </li>
                        <li>
                            <span  className="icon"><i  aria-hidden="true" className="fa fa-home"></i></span><span>Harsh Acceleration</span>
                        </li>
                        <li>
                            <span  className="icon">
                                <i  aria-hidden="true" className="fa fa-home"></i>
                            </span>
                            <span>Harsh Braking</span>
                        </li>
                        <li>
                            <span  className="icon">
                                <i  aria-hidden="true" className="fa fa-home"></i>
                            </span>
                            <span>Idling</span>
                        </li>
                    </ul>
                </nav>
            </Dropright>
        );
    }
}


class __Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            hasActiveChildren: false
        };
    }
    handleClickOutside() {
        if (!this.state.hasActiveChildren)
            this.setState({active: false});
        else
            this.setState({hasActiveChildren: false})
    }
    handleButtonClick() {
        this.setState({active: !this.state.active});
    }
    handleMenuClick() {
        this.setState({hasActiveChildren: true});
    }
    render() {
        let filterClassNames = classnames('filters-menu', {active: this.state.active, hasActiveChildren:this.state.hasActiveChildren});
        return (
          <div className="sidebar-container">
            <button className="hvr-icon-wobble-horizontal filters-toggle" onClick={this.handleButtonClick.bind(this)}>
                Filters
            </button>
            <nav onClick={this.handleMenuClick.bind(this)} className={filterClassNames}>
              <ul>
                {this.props.children}
              </ul>
            </nav>
          </div>
        );
    }
}

// We could decorate Sidebar with OnClickOutside once decorators
// are supported
export default OnClickOutside(__Sidebar);
