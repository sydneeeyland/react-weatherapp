import React, { useEffect, useState } from 'react'
import Location from '../Components/Location';
import Temperature from '../Components/Temperature';
import Weather from '../Components/Weather';
import WeatherCard from '../Components/WeatherCard';

function Forecast() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ec7f9fcd36df4c05a7d35352222706&q=${lat},${long}&aqi=no`);
      const result = await response.json();
      setData(result);
    }
    FetchData();
  }, [lat, long, data]);

  return (
    <React.Fragment>
      <main className='flex flex-col w-full h-screen justify-center items-center'>
        <h1 className='py-8 text-9xl font-thin'>
          { typeof data.current != 'undefined' ? (<Temperature weather={data.current} />) : '0' }
          <small className='text-4xl inline-block align-top'>0</small>
          <small className='text-6xl inline-block align-top'>C</small>
        </h1>
        { typeof data.location != 'undefined' ? (<Location weather={data.location} />) : 'Failed to fetch Geolocation please refresh.' }
        <section className='flex flex-row w-full gap-20 justify-center items-center py-10'>
          { typeof data.current != 'undefined' ? (<Weather weather={data.current} />) : '' }
        </section>
        <section className='flex flex-row w-full gap-3 justify-center items-center py-10'>
          { typeof data.current != 'undefined' ? (<WeatherCard weather={data.current} />) : '' }
        </section>
      </main>
    </React.Fragment>
  )
}

export default Forecast