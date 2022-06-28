import React from 'react'

function WeatherCard({weather}) {
    return (
        <React.Fragment>
            <div className="max-w-sm rounded overflow-hidden border border-black-800 hover:bg-sky-300 hover:text-white">
                <div className="pt-5 ml-10 mr-10">
                    <div className="font-bold text-xl mb-2 justify-center items-center flex">Today</div>
                </div>
                <div className='flex justify-center items-center'>
                    <img height="60" src={weather.condition.icon} />
                </div>
                <p className='flex justify-center items-center ml-10 mr-10 mb-5'>{weather.temp_c}ºC - {weather.temp_f}ºF</p>
            </div>
        </React.Fragment>
    )
}

export default WeatherCard