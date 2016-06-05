import React, { Component } from 'react';
import classnames from 'classnames';
import {
  ProgressBar
} from 'react-bootstrap';


const MetricItem = ({title, score, num_events}) =>{
    let style = "success";
    if (score < 75 && score >= 50)
        style = "warning";
    else if (score < 50)
        style= "danger";
    const classNames = classnames('metric-item', style);
    return (
        <div className={classNames}>
            <div className="metric-values">{score} / {num_events}</div>
            <div className="metric-item-title">{title}</div>
            <div className="metric-graph">
                <ProgressBar now={score} bsStyle={style}></ProgressBar>
            </div>
        </div>
    );
}


export default MetricItem;
