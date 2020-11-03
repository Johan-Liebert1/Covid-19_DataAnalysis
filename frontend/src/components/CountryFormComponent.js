import React, { useState } from 'react'
import { countries, plotType, plotWhat, mapping } from "../constants";

const CountryFormComponent = () => {
    
    const [c, setC] = useState('')
    const [pws, setPws] = useState('')
    const [pts, setPts] = useState('')

    const [country, setCountry] = useState(countries[0])
    const [plotWhatState, setPlotWhatState] = useState(plotWhat[0])
    const [plotTypeState, setPlotTypeState] = useState(plotType[0])
    const [showImage, setShowImage] = useState(false)

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const submitHandler = (e) => {
        e.preventDefault()
        setShowImage(true)
        setC(country.toLowerCase())
        setPws(plotWhatState)
        setPts(plotTypeState)  
    }

    const imageStyle = {
        width: windowWidth * 0.95, height: windowHeight *0.95 
    }

    return (
        <div style = {{ width: '100%' }}>

        <form onSubmit = {submitHandler} className = 'mb-5 container'>
        <div className = 'form-row'>
            <div className = 'form-group col-md-5'>
                <label htmlFor='country'>Select Country</label>
                <select 
                    className = 'form-control'
                    onChange = {(e) => setCountry(e.target.value)}
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
        

        <div style = {{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: '3rem'
            }}>
        {
            mapping[pws] === 'all' && 
            <h1 style={{color: 'white', margin: '2rem auto'}}>Stats for {c.toUpperCase()}</h1>
        }

        {
            showImage && 
            <img 
                src = {`/plotdata/${c}/${mapping[pws]}/${mapping[pts]}`} 
                alt = {`${c}-${mapping[pws]}-${mapping[pts]}`}
                style= { mapping[pws] === 'all' ? imageStyle : {} }
            />
        }
        </div>

        </div>
    )
}

export default CountryFormComponent
