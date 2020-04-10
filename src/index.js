import React from 'react';
import './ProgressBar.css'

const ROUND_PRECISION = 1000;

const defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    showPercentage: false,
    animated: false
}

const getPercentage = (min, max, value) => {
    let percentage = ((value - min) / (max - min)) * 100;
    if(percentage >= 100) {
        percentage = 100;
    } else if (percentage < 0) {
        percentage = 0;
    } 
    return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

const ProgressBar = (props) => {
    let percentage = getPercentage(props.min, props.max, props.value);

    let className = 'progress-bar';
    if(props.animated && percentage < 100) {
        className += ' progress-bar-animation'
    }
    if(percentage >= 100) {
        className += ' complete';
    }

    return (
        <div className="progress">
            <div className={className} style={{width: `${percentage}%`}}>
                {props.showPercentage? `${percentage}%` : ""}
            </div>
        </div>
    )
}

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;