import React, { useEffect, useState } from 'react';

import LoadingSpinner from './components/UIElements/LoadingSpinner';
import LocationBox from './components/LocationBox';


function App() {

  const [loadedNewYork, setLoadedNewYork] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedSevenDays, setLoadedSevenDays] = useState();

  useEffect(() => {
    setIsLoading(true);
        const sendRequest = async () => {
        try {
        const response = await fetch(`${process.env.REACT_APP_WEB_API}lat=${process.env.REACT_APP_NY_LAT}&lon=${process.env.REACT_APP_NY_LNG}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`);
        const responseData = await response.json();
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_NY_LAT}&lon=${process.env.REACT_APP_NY_LNG}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
        const responseData2 = await response2.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }  

        setLoadedNewYork(responseData);
        setLoadedSevenDays(responseData2);

        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };
    sendRequest();
}, []);

  return (
    <div className="app">
      <main>
      {isLoading &&
        <div className="center">
            <LoadingSpinner/>
        </div>}
        {!isLoading && loadedNewYork &&
          <LocationBox items={loadedNewYork} seven={loadedSevenDays}/>}
      </main>
    </div>
  );
}

export default App;
