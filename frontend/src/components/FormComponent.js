import React, { useState } from 'react'
import { countries, plotType, plotWhat, mapping } from "../constants";

const FormComponent = () => {
    
    const [c, setC] = useState('')
    const [pws, setPws] = useState('')
    const [pts, setPts] = useState('')

    const [country, setCountry] = useState(countries[0])
    const [plotWhatState, setPlotWhatState] = useState(plotWhat[0])
    const [plotTypeState, setPlotTypeState] = useState(plotType[0])
    const [showImage, setShowImage] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setShowImage(true)
        setPws(plotWhatState)
        setPts(plotTypeState)  
    }

    return (
        <>
        <form onSubmit = {submitHandler} className = 'mb-5'>
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
                        plotType.map(p => <option style = {{
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

        {
            showImage && 
            <img 
                src = {`/getdata/${country}/${mapping[pws]}/${mapping[pts]}`} />
        }
        </>
    )
}

export default FormComponent
