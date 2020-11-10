import React from 'react'
import CountryFormComponent from '../components/CountryFormComponent'
import NavbarComponent from '../components/NavbarComponent'

const ContinentScreen = () => {
    return (
        <div className = 'mb-5'>
            <NavbarComponent />
            <CountryFormComponent isCountry = {false} />
        </div>
    )
}

export default ContinentScreen
