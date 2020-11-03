import React from 'react'

import CountryFormComponent from '../components/CountryFormComponent'
import NavbarComponent from '../components/NavbarComponent'

const CountryScreen = () => {
    const mainStyle = { width: '100%' }

    return (
        <div style = {mainStyle} >
        {/* //     <div> 
        //         style = {{ textAlign: 'center' }}
        //         className = 'mb-5' 
        //     >
        //         <h1>Plot Country Data</h1>
        //     </div> */}

        <NavbarComponent />

            <CountryFormComponent />
        </div>
    )
}

export default CountryScreen
