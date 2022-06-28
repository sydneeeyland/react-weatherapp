import React from 'react'

function Temperature({weather}) {
    return (
        <React.Fragment>
            {
                weather.temp_c
            }
        </React.Fragment>
    )
}

export default Temperature