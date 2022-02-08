import React from 'react';

import WeatherBox from './WeatherBox';
import BarChart from './UIElements/BarChart';


const LocationBox = props => {

    return (
    <div className="location-box">
    <div className="location">New York City, US</div>
    <WeatherBox items={props.items}/>
    <BarChart items={props.seven}/>
    </div>
    );
};

export default LocationBox;