import React, { useState } from 'react'
import GlobalFormComponent from '../components/GlobalFormComponent'

import NavbarComponent from '../components/NavbarComponent'
import '../styles/GlobalScreenStyles.css'


const GlobalScreen = () => {
    return (
        <div>
            <NavbarComponent />

            <GlobalFormComponent />
        </div>
    )
}

export default GlobalScreen
