import React from 'react'

import CountryFormComponent from '../components/CountryFormComponent'
import NavbarComponent from '../components/NavbarComponent'

const CountryScreen = () => {
    const mainStyle = { width: '100%' }

    return (
        <div style = {mainStyle} >
            <NavbarComponent />

            <CountryFormComponent />
        </div>
    )
}

export default CountryScreen
