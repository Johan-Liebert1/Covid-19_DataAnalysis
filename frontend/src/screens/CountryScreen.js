import React from 'react'

import CountryFormComponent from '../components/CountryFormComponent'
import NavbarComponent from '../components/NavbarComponent'

const CountryScreen = () => {
    const mainStyle = { width: '100%' }

    return (
        <div style = {mainStyle}  className = 'mb-5'>
            <NavbarComponent />

            <CountryFormComponent isCountry />
        </div>
    )
}

export default CountryScreen
