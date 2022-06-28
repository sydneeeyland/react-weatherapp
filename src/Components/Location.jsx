import React from 'react'

function Render({weather}) {
    return (
        <React.Fragment>
            <div>
                <h1 className='text-4xl font-bold'>{weather.name + ', ' + weather.region + ' ' + weather.country}</h1>
            </div>
        </React.Fragment>
    )
}

export default Render