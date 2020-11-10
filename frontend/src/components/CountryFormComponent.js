import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContinentData, getCountryData } from '../actions/mainActions';
import { countries, plotType, plotWhat, mapping, continents } from "../constants";

import '../styles/CountryFormStyles.css'
import ShowDataComponent from './ShowDataComponent';

const CountryFormComponent = ({ isCountry }) => {
    const initial = isCountry ? countries[0] : continents[0]

    const [c, setC] = useState('')
    const [pws, setPws] = useState('')
    const [pts, setPts] = useState('')
    const [cArray, setCArray] = useState([])

    const [country, setCountry] = useState(initial)
    const [plotWhatState, setPlotWhatState] = useState(plotWhat[0])
    const [plotTypeState, setPlotTypeState] = useState(plotType[0])
    const [showImage, setShowImage] = useState(false)

    const windowWidth = window.innerWidth

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const submitHandler = async (e) => {
        e.preventDefault()

        // make some checks here
        if ( cArray.length > 1 && mapping[plotWhatState] === 'all' ) {
            console.log('Error')
        }

        else {
            setShowImage(true)
            setC(country.toLowerCase())
            setPws(plotWhatState)
            setPts(plotTypeState) 

            isCountry ?
            dispatch(getCountryData(country.toLowerCase()))
            :
            dispatch(getContinentData(country.toLowerCase()))
        }
    }

    const pushToArrayC = (e) => {
        setCountry(e.target.value)
        
        if (mapping[plotWhatState] !== 'all')
            setCArray([...cArray, e.target.value])
    }

    const popFromArrayC = (e) => {
        setCArray(cArray.filter(c => c !== e.target.innerText))
    }

    const imageStyle = {
        width: windowWidth * 0.95
    }

    const join = () => {
        let s = ''
        for (let i = 1; i < cArray.length - 1; i++) {
            s += cArray[i] + ','
        }

        return cArray[0] + ',' + s + cArray[cArray.length - 1]
    }

    return (
        <div style = {{ width: '100%' }}>

        <form onSubmit = {submitHandler} className = 'mb-5 container'>
        <div className = 'form-row'>
                { isCountry ?
                    <div className = 'form-group col-md-5'>

                        <label htmlFor='country'>Select Country</label>
                        <select 
                            className = 'form-control'
                            onChange = {pushToArrayC}
                            style = {{
                                backgroundColor: "transparent",
                                color: 'white'
                            }}
                        >
                            {
                                countries.map((country, index) => <option key = {index} style = {{
                                    backgroundColor: 'rgb(14, 22, 29)',
                                    color: "white"
                                }}>{country}</option>)
                            }
                        </select>
                    </div>
                : 
                    <div className = 'form-group col-md-5'>

                        <label htmlFor='country'>Select Continent</label>
                        <select 
                            className = 'form-control'
                            onChange = {pushToArrayC}
                            style = {{
                                backgroundColor: "transparent",
                                color: 'white'
                            }}
                        >
                            {
                                continents.map((cont, index) => <option key = {index} style = {{
                                    backgroundColor: 'rgb(14, 22, 29)',
                                    color: "white"
                                }}>{cont}</option>)
                            }
                        </select>
                    </div>
                }

            <div className = 'form-group col-md-3'>
                <label htmlFor='country'>Select Plot</label>
                <select 
                    className = 'form-control'
                    onChange = {(e) => setPlotWhatState(e.target.value)}
                    style = {{
                        backgroundColor: "transparent",
                        color: 'white'
                    }}
                >
                    {
                        plotWhat.map((p, index) => 
                            <option key = {index} style = {{
                                backgroundColor: 'rgb(14, 22, 29)',
                                color: "white"
                            }}>{p}</option>
                        )
                    }
                </select>
            </div>

            <div className = 'form-group col-md-3'>
                <label htmlFor='country'>Select Plot Type</label>
                <select 
                    className = 'form-control'
                    onChange = {(e) => setPlotTypeState(e.target.value)}
                    style = {{
                        backgroundColor: "transparent",
                        color: 'white'
                    }}
                >
                    {
                        plotType.map((p, i) => <option key = {i} style = {{
                            backgroundColor: 'rgb(14, 22, 29)',
                            color: "white"
                        }}>{p}</option>)
                    }
                </select>
            </div>

        </div>
        <div className = 'form-row'>
            <button 
                type = 'submit' 
                className='btn btn-outline-primary col-md-2'>Plot Data</button>
        </div>
        
        </form>
        
        <div className = 'container' style = {{
            display: 'flex',
            justifyContent: 'flex-start'
        }}
        >
            {
                cArray.length > 0 && cArray.map((c1, i) => (
                    <p  
                        id = 'selected-to-compare'
                        key = {i} 
                        style = {{
                            color: 'rgb(51, 161, 254)',
                            backgroundColor: 'rgba(51, 161, 254, 0.2)',
                            borderRadius: '5px',
                            padding: '0.5rem',
                            marginRight: '0.5rem'
                        }}
                        onClick = {popFromArrayC}
                    >
                        {c1}
                    </p>
                ))
            }
        </div>

        <div style = {{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: '3rem'
            }}
        >
        {
            mapping[pws] === 'all' && 
            <h1 style={{color: 'white', margin: '2rem auto'}}>Stats for {c.toUpperCase()}</h1>
        }

        {   showImage ?

                isCountry ? 
                    cArray.length > 1 ?
                        <img
                            src = {
                                `api/plotdata/countries/${mapping[pws]}/${mapping[pts]}?countries=${join()}`
                            }
                            alt = {`${c}-${mapping[pws]}-${mapping[pts]}`}
                            style = {imageStyle} 
                        />
                        :
                        <img 
                            src = {`api/plotdata/country/${c}/${mapping[pws]}/${mapping[pts]}`} 
                            alt = {`${c}-${mapping[pws]}-${mapping[pts]}`}
                            style= { mapping[pws] === 'all' ? imageStyle : {} }
                        />

                    :

                // isCountry == false
                cArray.length > 1 ? 

                <img
                    src = {`api/plotdata/continents/${mapping[pws]}/${mapping[pts]}?conts=${join()}`}
                    alt = {`${c}-${mapping[pws]}-${mapping[pts]}`}
                    style = {imageStyle} 
                />
                
                :

                <img 
                    src = {`api/plotdata/continent/${c}/${mapping[pws]}/${mapping[pts]}`} 
                    alt = {`${c}-${mapping[pws]}-${mapping[pts]}`}
                    style= { mapping[pws] === 'all' ? imageStyle : {} }
                />

            :

            null

        }

        </div>

        <div 
            className='container'
        >
            <div 
                className = 'row'
                style = {{
                display: "flex",
                justifyContent: 'center'
            }}
            >
                {   Object.keys(data).length > 0 && 
                    ['new_cases', 'new_deaths'].map(
                        (k, index) =>
                        <ShowDataComponent key={index} dataType = {k} data = {data[k]} c = {country} /> 
                    )
                }
            </div>
        </div>

        </div>
    )
}

export default CountryFormComponent
