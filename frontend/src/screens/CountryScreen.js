import React from 'react'

import CountryFormComponent from '../components/CountryFormComponent'

const CountryScreen = () => {
    const mainStyle = { width: '100vw' }

    return (
        <div style = {mainStyle} >
            <CountryFormComponent />
        </div>
    )
}

export default CountryScreen
