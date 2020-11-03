import React, { useState } from 'react'

import NavbarComponent from '../components/NavbarComponent'
import '../styles/GlobalScreenStyles.css'


const GlobalScreen = () => {
    return (
        <div>
            <NavbarComponent />

            <div id = 'plots'>
                <div className = 'single-plot'>
                    <h4>Total Confirmed Cases</h4>
                    <img src = '/plotdata/global/total_cases/line' alt = 'GlobalTotalCases'/>
                </div>

                <div className = 'single-plot'>
                    <h4>New Confirmed Cases Per Day</h4>
                    <img src = '/plotdata/global/new_cases/line' />
                </div>

                <div className = 'single-plot'>
                    <h4>Total Confirmed Deaths</h4>
                    <img src = '/plotdata/global/total_deaths/line' />
                </div>

                <div className = 'single-plot'>
                    <h4>New Confirmed Deaths Per Day</h4>
                    <img src = '/plotdata/global/new_deaths/line' />
                </div>
            </div>

        </div>
    )
}

export default GlobalScreen
