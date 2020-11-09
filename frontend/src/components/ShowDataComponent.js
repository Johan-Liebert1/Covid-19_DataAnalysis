import React from 'react'
import { color_config } from '../constants'

const ShowDataComponent = ({ dataType, data }) => {
    let content
    const divStyles = {
        backgroundColor: color_config[dataType].bg,
        color: color_config[dataType].text,
        width: '40%'
    }

    if (dataType === 'new_cases') {
        content = (
            <>
            <div className = 'row'>
                <div className='col-md-5'>
                    First Case reported on
                </div>
                <div className = 'col-md-5'>{data.first_new_cases_date}</div>
            </div>
            <div className = 'row'>
                <div className='col-md-5'>
                    Maximum Cases
                </div>
                <div className = 'col-md-5'>{data.maximum}</div>
            </div>
            <div className = 'row'>
                <div className='col-md-5'>
                    Maximum Cases Reported on
                </div>
                <div className = 'col-md-5'>{data.max_new_cases_date}</div>
            </div>
            </>
        )
    }

    return (
        <div style = {divStyles} className = 'col-md-5'>
            <h3>{color_config[dataType].heading}</h3>
        </div>
    )
}

export default ShowDataComponent
