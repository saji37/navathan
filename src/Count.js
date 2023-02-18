import React, { Component } from 'react';

import FlipCountdown from '@rumess/react-flip-countdown';

export default class Count extends Component {
    render() {
        return (
            <FlipCountdown
            theme='dark'
            size='large'
            hideYear
            hideMonth
            dayTitle='Days'
            hourTitle='Hours'
            minuteTitle='Minutes'
            secondTitle='Seconds'
            titlePosition='top'
                
                endAt={'2023-2-23 09:00:00'} // Date/Time
            />
        );
    }
}
