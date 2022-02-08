import React, { useState } from 'react';

import Button from '../components/FormElements/Button';
import Modal from './UIElements/Modal';
import './WeatherBox.css';

const WeatherBox = props => {
    const [showToggle, setShowToggle] = useState(false);

    const openMoreInfo = () => setShowToggle(true);

    const closeMoreInfo = () => setShowToggle(false);

    let setSunHrs = new Date(props.items.sys.sunset * 1000).getHours();
    let setSunMin = new Date(props.items.sys.sunset * 1000).getMinutes();

    let setRisHrs = new Date(props.items.sys.sunrise * 1000).getHours();
    let setRisMin = new Date(props.items.sys.sunrise * 1000).getMinutes();

    return (
        <React.Fragment>
        <Modal
            show={showToggle}
            onCancel={closeMoreInfo}
            header="New York"
            contentClass="item__modal-content"
            footerClass="item__modal-actions" 
            footer={<Button onClick={closeMoreInfo}>CLOSE WINDOW</Button>}
        >
            <div className="weather-box">
            <div className="weather">Wind Speed {props.items.wind.speed}</div>
            <div className="weather">Humidity {props.items.main.humidity}</div>
            <div className="weather">Pressure {props.items.main.pressure}</div>
            <div className="weather">Sun Rise {setRisHrs}:{setRisMin}</div>
            <div className="weather">Sun Set {setSunHrs}:{setSunMin}</div>
            </div>
        </Modal>
        <div className="weather-box">
          <div className="weather">{props.items.weather[0].description}</div>
          <div className="temp">{Math.round(props.items.main.temp)}</div>
          <div className="weather">High: {Math.round(props.items.main.temp_max)}</div>
          <div className="weather">Low: {Math.round(props.items.main.temp_min)}</div>
            <Button inverse onClick={openMoreInfo}>MORE INFO</Button>
          </div>
          </React.Fragment>
    );
};

export default WeatherBox;