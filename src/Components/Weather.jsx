import React from 'react'

function Weather({weather}) {
    return (
        <React.Fragment>
            <h1 className='text-2xl font-semibold'>Humidity: {weather.humidity}</h1>
            <h1 className='text-2xl font-semibold'>Wind MPH: {weather.wind_mph}</h1>
            <h1 className='text-2xl font-semibold'>Condition: {weather.condition.text}</h1>
        </React.Fragment>
    )
}

export default Weather