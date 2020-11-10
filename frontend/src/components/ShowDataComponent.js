import React from 'react'
import { color_config } from '../constants'

const ShowDataComponent = ({ dataType, data, c }) => {
    let content
    const divStyles = {
        backgroundColor: color_config[dataType]['bg'],
        color: color_config[dataType]['text'],
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
    }

    if (dataType === 'new_cases') {
        content = (
            <>
            <div className = 'mb-3'>
                <div>
                    <strong>First Case reported on</strong>
                </div>
                <div>{data.first_new_cases_date.replace('00:00:00 GMT', '')}</div>
            </div>
            
            <div className = 'mb-3'>
                <div>
                    <strong>Maximum Cases Reported in a Day</strong>
                </div>
                <div >{data.maximum}</div>
            </div>


            <div className='mb-3'>
                <div>
                    <strong>Maximum Cases in a Day Reported on</strong>
                </div>
                <div>{data.max_new_cases_date.replace('00:00:00 GMT', '')}</div>
            </div>


            <div className='mb-3'>
                <div>
                    <strong>Total Cases</strong>
                </div>
                <div>{data.total}</div>
            </div>

            </>
        )
    }

    else if (dataType === 'new_deaths') {
        content = (
            <>
            <div className = 'mb-3'>
                <div>
                    <strong>First Death reported on</strong>
                </div>
                <div>{data.first_new_deaths_date.replace('00:00:00 GMT', '')}</div>
            </div>
            
            <div className = 'mb-3'>
                <div>
                    <strong>Maximum Deaths Reported in a Day</strong>
                </div>
                <div >{data.maximum}</div>
            </div>


            <div className='mb-3'>
                <div>
                    <strong>Maximum Deaths in a Day Reported on</strong>
                </div>
                <div>{data.max_new_deaths_date.replace('00:00:00 GMT', '')}</div>
            </div>

            <div className='mb-3'>
                <div>
                    <strong>Cumulative Deaths</strong>
                </div>
                <div>{data.total}</div>
            </div>

            </>
        )
    }

    return (
        <div style = {divStyles} className = 'col-10 col-md-9 col-lg-6 p-5'>
            {   c === 'global' ? 
                <h3 className = 'mb-3'>Global {color_config[dataType].heading}</h3>
                :
                <h3 className = 'mb-3'>{color_config[dataType].heading} for {c}</h3>
            }
            <div style = {{ 
                display:'flex', 
                flexDirection: 'column',
                alignItems: 'space-between',
                justifyContent: 'space-between' 
            }}>
                {content}
            </div>
        </div>
    )
}

export default ShowDataComponent
