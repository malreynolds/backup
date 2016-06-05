import React, { Component } from 'react';


export default class MetricPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="metric-panel">
                <div className="metric-panel-title">{this.props.title}</div>
                {this.props.children}
            </div>
        );
    }
}
